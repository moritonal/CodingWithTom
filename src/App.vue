<template>
  <div id="app">
    <div v-if="this.state == 'SHOW'">
        <Tutorial v-bind:markdown="this.markdown" />
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
import Data from "./Test.txt"

export default {
  name: "App",
  data() {
    return {
      state: "INIT",
      markdownUrl: Data,
      markdown: null
    };
  },
  components: {
      Tutorial
  },
  mounted: async function() {
      this.state = "LOADING";

      let request = await fetch(this.markdownUrl);
      let response = await request.text();

      this.state = "SHOW";
      this.markdown = response;
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

#app {

}

html {
  overflow-y: scroll;
}

</style>
