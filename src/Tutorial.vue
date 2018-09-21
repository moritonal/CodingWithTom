<template>
  <div id="tutorial">
      <div v-if="this.markdown != null">

            <div v-show="currentUrl === '/'">
                <TutorialSummary v-bind:text="this.jsonObject.summary"></TutorialSummary>

                <div class="d-flex justify-content-center">
                    <div class="btn-group btn-group-justified" role="group">
                    <button type="button" class="btn btn-primary p-2" v-on:click="NextObjective">Next</button>
                    </div>
                </div>
            </div>

            <div v-for="objective in this.jsonObject.objectives" v-bind:key="objective.title">

                <div v-if="currentUrl === `/${objective.url}`">
                    <TutorialSection v-bind="objective"></TutorialSection>

                    <div class="d-flex justify-content-center">
                        <div class="btn-group btn-group-justified" role="group">
                        <button type="button" class="btn btn-secondary p-2" v-on:click="PreviousObjective">Previous</button>
                        <button type="button" class="btn btn-primary p-2" v-on:click="NextObjective">Next</button>
                        </div>
                    </div>
                </div>

            </div>
      </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue/dist/vue.js';
import MarkdownLexor from "./MarkdownLexor"

import Answer from "./Answer.vue"
import StretchGoal from "./StretchGoal.vue"
import TutorialSection from "./TutorialSection.vue"
import TutorialSummary from "./TutorialSummary.vue"
import striptags from "striptags"

export default {
  name: "Tutorial",
  data() {
    return {
      currentUrl: window.location.pathname,
      objectives: null,
      cachedJsonObjectives: null
    };
  },
  props: ["markdown"],
  components:{
      TutorialSection,
      TutorialSummary
  },
  methods: {
      NextObjective: function() {

          let nextObjectiveId = this.currentObjectiveIndex + 1;

          if (nextObjectiveId >= this.jsonObject.objectives.length) {
              window.location.href = "https://bonner.is";
              return;
          }

          let nextObjective = this.jsonObject.objectives[nextObjectiveId];

          window.history.pushState(null, null, nextObjective.url);
          this.currentUrl = window.location.pathname;
          this.scrollToTop();      
      },
      PreviousObjective: function() {
          console.log("Going back");
          window.history.go(-1);
          return false;
      },
      scrollToTop: function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        },
    updateTitle() {
            let i = this.currentObjectiveIndex;
            if (i === -1) {
                document.title = "Coding With Tom";
            } else {
                document.title = `Coding With Tom - ${this.jsonObject.objectives[i].title}`;
            }
        }
  },
  mounted: async function() {
    this.updateTitle();

    window.onpopstate = (evt) => {
          this.currentUrl = window.location.pathname;
    }

    document.onkeydown = (key) => {
        console.log(key)

        if (key.code === "ArrowRight") {
            this.NextObjective();
        } else if (key.code === "ArrowLeft") {
            this.PreviousObjective();
        }
    }
  },
  watch: {
      currentUrl: function(val) {
        this.updateTitle();
      }
  },
  computed: {
    jsonObject: function() {
        
        if (this.cachedJsonObjectives != null) 
            return this.cachedJsonObjectives;

        console.log("Processing markdown");

        let objectives = MarkdownLexor.Parse(this.markdown);

        for (let objective of objectives.objectives) {

            let summary = objective.summary;

            let summaryWithoutTags = striptags(summary).replace(/[^\w\s!?\n]/g,'').trim();

            objective.title = summaryWithoutTags;

            let summaryUrl = encodeURI(summaryWithoutTags);
            objective.url = summaryUrl;
        }

        this.cachedJsonObjectives = objectives;

        return objectives;
    },
    currentObjectiveIndex: function() {

        if (this.currentUrl == "/") {
            return -1;
        } else {
            return this.jsonObject.objectives.findIndex( (i : any) => this.currentUrl === `/${i.url}`);
        }
    }
  }
};

</script>

<style lang="css">

#tutorial {
    margin: 0px;
    padding: 20px;

    font-size: 110%;
    font-weight: 400;
    font-family: "Segoe UI",Arial,sans-serif;

    max-width: 920px;
}

body {
    margin: 0;
    background-color: antiquewhite;
}

img {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

</style>
