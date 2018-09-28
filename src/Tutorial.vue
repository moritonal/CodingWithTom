<template>
    <div>
        <nav class="navbar navbar-light fixed-top bg-light my-border-bottom">
            <a class="navbar-brand d-none d-sm-flex">Coding With Tom</a>
            <a class="navbar-brand d-flex d-sm-none">CWT</a>
            <ul class="nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link d-flex">
                        <span class="d-none d-none d-md-flex">Revealed Answers:</span>
                        <span class="d-flex d-md-none">A:</span>
                        <span>{{answersRevealed}}/{{answersTotal}}</span>
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link d-flex">
                        <span class="d-none d-none d-md-flex">Current Objective:</span>
                        <span class="d-flex d-md-none">O:</span>
                        <span>{{currentObjectiveIndex + 1}}/{{totalObjectives}}</span>
                    </a>
                </li>
            </ul>
            <form class="form-inline m-0">
                <button type="button" class="btn btn-primary d-none d-md-flex mx-2" v-on:click="openEditMode">Edit</button>
                <button type="button" class="btn btn-primary d-none d-md-flex">{{tutorialName}}</button>
                <button type="button" class="btn btn-danger ml-2" v-on:click="exitTutorial">Exit</button>
            </form>
        </nav>
    
        <div v-if="this.cachedMarkdown != null" id="tutorial" class="paddedSides">

                <!-- Show summary when at the root -->
                <div v-show="currentCleanUrl === '/'" class="w-100">
                    <TutorialSummary v-bind:text="this.jsonObject.summary"></TutorialSummary>

                    <div class="d-flex justify-content-center">
                        <div class="btn-group btn-group-justified" role="group">
                        <button type="button" class="btn btn-primary p-2" v-on:click="NextObjective">Next</button>
                        </div>
                    </div>
                </div>

                <!-- Create all the objectives -->
                <div v-for="objective in this.jsonObject.objectives" v-bind:key="objective.title" class="w-100" v-if="currentCleanUrl === `/${objective.url}`">

                    <div >
                        <TutorialSection v-bind="objective"></TutorialSection>

                        <div class="d-flex justify-content-center">
                            <div class="btn-group btn-group-justified" role="group">
                                <button type="button" class="btn btn-secondary p-3 px-4" v-on:click="PreviousObjective">Previous</button>
                                <button type="button" class="btn btn-primary p-3 px-4" v-on:click="NextObjective" v-if="currentObjectiveIndex + 1 != totalObjectives">Next</button>
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
import MonicoCode from "./MonicoCode.vue"

export default {
  name: "Tutorial",
  data() {
    return {
      currentUrl: window.location.pathname,
      objectives : null,
      cachedJsonObjectives: null,
      answersRevealed: null,
      tutorialName: null,
      editWindow: null,
      cachedMarkdown: null
    };
  },
  props: ["markdown"],
  components:{
      TutorialSection,
      TutorialSummary,
      MonicoCode
  },
  methods: {
    NextObjective: function() {

            console.log("CurrentObjectiveIndex", this.currentObjectiveIndex);

            let nextObjectiveId = this.currentObjectiveIndex + 1;

            if (nextObjectiveId >= this.jsonObject.objectives.length) {
                return;
            }

            let nextObjective = this.jsonObject.objectives[nextObjectiveId];

            console.log("NextObjective", nextObjective.url);

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
        let revealedObj = localStorage.getItem(`${localStorage.getItem("savedMarkdownUrl")}score`) ;

        let revealed = (revealedObj === null ? null : parseInt(revealedObj)) || 0;
        
        this.answersRevealed = revealed;
    },
    updateTutorialName() {
        let url = localStorage.getItem("savedMarkdownUrl");
        
        if (url == null)
            return;

        console.log("Current URL", url);

        let possibleTitle = url.replace(/^(.*\/)/g, "");

        this.tutorialName = possibleTitle.replace(/_/g, " ").replace(/\.(.*)md/g, "");
    },
    exitTutorial : function() {
        console.log("Exiting tutorial");
        this.$emit("exit-tutorial");
    },
    openEditMode : function() {

        let savedMarkdownUri = localStorage.getItem("savedMarkdownUrl");

        localStorage.setItem(`${savedMarkdownUri}.edited`, this.cachedMarkdown);

        this.editWindow = window.open(`./editor?uri=${savedMarkdownUri}`, "_blank", "location=no,width=630,height=820,scrollbar=no");
        return false;
    }
  },
  mounted: async function() {

    this.cachedMarkdown = JSON.parse(JSON.stringify(this.markdown));

    this.updateTitle();
    this.updateAnswersRevealed();
    this.updateTutorialName();

    console.log("Current Path", this.currentCleanUrl);
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

    try {
        if (BroadcastChannel !== undefined) {
            let channel = new BroadcastChannel("EditChannel");

            channel.onmessage = (evt) => {

                let data = evt.data;

                switch (data.command) {
                    case "update":
                        this.cachedJsonObjectives = null;
                        this.cachedMarkdown = data.newMarkdown;
                        break;
                }
            }
        }
    }
    catch {
        
    }
  },
  watch: {
      currentUrl: function(val) {
        this.updateTitle();
      },
      markdown: function(val) {
          console.log("Markdown set to ", val);
        this.cachedMarkdown= val;
      }
  },
  computed: {
    jsonObject: function() {
        
        if (this.cachedJsonObjectives != null) 
            return this.cachedJsonObjectives;

        if (this.cachedMarkdown == null) {
            return null;
        }

        let objectives = MarkdownLexor.Parse(this.cachedMarkdown);

        if (objectives == null) {

            if (this.editWindow == null) {

                // Encountered problem with this url
                this.$emit("cannot-parse");

                return {
                    summary: "Error rendering",
                    objectives: [],
                    text: null
                };
            } else {
                console.warn("Can't parse markdown, but in edit-mode so not exiting");

                return {
                    summary: "Error rendering",
                    objectives: [],
                    text: null
                };
            }
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
        if (this.cachedMarkdown !== null) {
            return (this.cachedMarkdown.match(/\<\/Answer/g) || []).length
        } else {
            return 0;
        }
    },
    totalObjectives: function() {

        if (this.jsonObject == null)
            return 0;

        return this.jsonObject.objectives.length;
    },
    currentObjectiveIndex: function() {

        if (this.jsonObject == null)
            return 0;

        if (this.currentCleanUrl == "/") {
            return -1;
        } else {
            return this.jsonObject.objectives.findIndex( (i : any) => this.currentCleanUrl === `/${i.url}`);
        }
    },
    currentCleanUrl: function() {
        return this.currentUrl.replace(/^(.*)(?=\/)/g, "");
    }
  }
};

</script>

<style lang="css">

#tutorial {
    
    padding: 20px;

    font-size: 110%;
    font-weight: 400;
    font-family: "Segoe UI",Arial,sans-serif;

    margin-top: 70px;

    display: flex;
}

.paddedSides {
    max-width: 920px;
    width:100%;
    margin-left: auto;
    margin-right: auto;
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

.editor {
    width: 800px;
    height: 100%;
}

</style>
