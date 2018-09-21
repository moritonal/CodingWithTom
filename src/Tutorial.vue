<template>
    <div>
        <nav class="navbar navbar-light fixed-top bg-light my-border-bottom">
            <a class="navbar-brand">Coding With Tom</a>
            <ul class="nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link">Revealed Answers: {{answersRevealed}}/{{answersTotal}}</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link">Current Objective: {{currentObjectiveIndex + 1}}/{{totalObjectives}}</a>
                </li>
            </ul>
            <form class="form-inline m-0">
                <button type="button" class="btn btn-primary">{{tutorialName}}</button>
                <button type="button" class="btn btn-danger ml-2" v-on:click="exitTutorial">Exit</button>
            </form>
        </nav>
    
        <div v-if="this.markdown != null" id="tutorial">           
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
      cachedJsonObjectives: null,
      answersRevealed: null,
      tutorialName: null
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
    },
    onStorage() {
        console.log("Update");
        this.updateAnswersRevealed();
    },
    updateAnswersRevealed: function() {
        let revealedObj = localStorage.getItem("score") ;

        let revealed = (revealedObj === null ? null : parseInt(revealedObj)) || 1;
        
        this.answersRevealed = revealed - 1;
    },
    updateTutorialName() {
        let url = localStorage.getItem("savedMarkdownUrl");

        console.log(url);
        
        if (url == null)
            return;

        let possibleTitle = url.replace(/^(.*\/)/g, "");

        this.tutorialName = possibleTitle.replace(/_/g, " ").replace(/\.md/g, "");
    },
    exitTutorial : function() {
        this.$emit("exitTutorial");
    }
  },
  mounted: async function() {
    this.updateTitle();
    this.updateAnswersRevealed();
    this.updateTutorialName();

    window.onpopstate = (evt) => {
          this.currentUrl = window.location.pathname;
    }

    document.onkeydown = (key) => {
        if (key.code === "ArrowRight") {
            this.NextObjective();
        } else if (key.code === "ArrowLeft") {
            this.PreviousObjective();
        }
    }

    window.addEventListener("answerRevealed", this.onStorage, false);

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

        if (objectives == null) {

            // Encountered problem with this url
            this.$emit("cannotParse");

            return {
                summary: "Error rendering",
                objectives: [],
                text: null
            };
        }

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
    answersTotal: function() {
        return (this.markdown.match(/\<\/Answer/g) || []).length
    },
    totalObjectives: function() {
        return this.jsonObject.objectives.length;
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

    margin-left: auto;
    margin-right: auto;

    margin-top: 70px;
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

.my-border-bottom {    
    border-bottom: #ffffff2b 1px solid;
}

</style>
