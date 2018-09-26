<template>

  <div id="app">

    <div v-if="this.state == 'INIT'" class="center-screen">
      <div class="container">
        <div class="section card">
          <h4 class="card-header">
              <span>Enter Tutorial URL</span>
          </h4>
          <div class="card-body">
            <span>Please type in or paste the tutorial URL you've been given.</span>
            
            <form v-on:submit.prevent="onSubmitUrl">
              <div class="input-group mt-3">
                <input type="text" v-model="markdownUrl" class="form-control" v-bind:placeholder="defaultUrl">
                <div class="input-group-append">
                  <button class="btn btn-success" type="submit">Go</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div v-if="this.state == 'SHOW'">
        <Tutorial
          v-bind:markdown="this.markdown"
          v-on:cannot-parse="RemoveUrl"
          v-on:exit-tutorial="exitTutorial"/>
    </div>

    <transition name="sweep" duration="500">
      <div v-bind:class="{fullPageOverlay : true}" v-show="this.state == 'LOADING'">
        <h1>Loading</h1>
      </div>
    </transition>
  </div>
</template>

<script>

import Tutorial from "./Tutorial.vue"
import LiveTutorial from "./../tutorials/Tutorial_DownloadData.md"

export default {
  name: "App",
  data() {
    return {
      state: "INIT",
      markdownUrl: null,
      defaultUrl: "https://raw.githubusercontent.com/Glitch0011/CodingWithTom/master/tutorials/Tutorial_UploadingData.md",
      storedMarkdownUrl: null,
      markdown: null
    };
  },
  components: {
      Tutorial
  },
  methods: {
    "onSubmitUrl": function() {

      if (this.markdownUrl == "" || this.markdownUrl == null)
        this.markdownUrl = this.defaultUrl;

      this.storedMarkdownUrl = this.markdownUrl
    },
    "RemoveUrl": function() {
        console.log("Error thrown, unsetting tutorial");
        localStorage.removeItem("savedMarkdownUrl");
        this.storedMarkdownUrl = null;
    },
    "exitTutorial": function() {
        console.log("App.vue ExitTutorial");
        localStorage.removeItem("savedMarkdownUrl");
        this.storedMarkdownUrl = null;
    }
  },
  mounted: function() {
  
    // The user has arrived with a URL, let's use it
    let urlParams = new URLSearchParams(window.location.search);
    let providedUrl = urlParams.get('url');

    if (providedUrl !== null) {
      localStorage.setItem("savedMarkdownUrl", providedUrl);
    }

    // The user already has a tutorial set, let's use it
    let savedMarkdownUrl = localStorage.getItem("savedMarkdownUrl");

    if (savedMarkdownUrl == null) {
      console.log("No tutorial set");
      return;
    }

    this.storedMarkdownUrl = savedMarkdownUrl;
  },
  watch: {
    "storedMarkdownUrl": async function() {

      console.log("StoredMarkdownUrl", this.storedMarkdownUrl);

      if (this.storedMarkdownUrl == null) {
        this.state = "INIT";
        return;
      }

      console.log("Loading tutorial", this.storedMarkdownUrl);

      this.state = "LOADING";

      try{
        let request = await fetch(this.storedMarkdownUrl);

        if (!request.ok) {
          throw new Error("404");
        }

        // At this point we assume all's okay, so save the url
        localStorage.setItem("savedMarkdownUrl", this.storedMarkdownUrl);

        let response = await request.text();

        this.state = "SHOW";
        this.markdown = response;
      } catch (ex) {
        console.log("Could not find tutorial")
        this.markdownUrl = "";
        this.state = "INIT";
      }
    }
  }
};

</script>

<style lang="css">

.fullPageOverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  
  background-color: rgb(0,0,0,0.4);
  border: 1px solid rgb(0,0,0,0.4s);
  border-radius: 10px;

  display: flex;  
  align-items: center;
  justify-content: center;
}

.center-screen {
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

html {
  overflow-y: scroll;
}

</style>
