<template>
  <div id="app">
      <div v-if="this.markdown != null">

            <TutorialSummary v-bind:text="this.jsonObject.summary"></TutorialSummary>

            <div v-for="objective in this.jsonObject.objectives" v-bind:key="objective.title">
                <TutorialSection v-bind="objective"></TutorialSection>
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

export default {
  name: "Tutorial",
  data() {
    return {
        
    };
  },
  props: ["markdown"],
  components:{
      TutorialSection,
      TutorialSummary
  },
  mounted: async function() {},
  computed: {
    jsonObject: function() {
        
        return MarkdownLexor.Parse(this.markdown);
    }
  }
};

</script>

<style lang="css">

#app {
    margin: 0px;
    padding: 20px;

    font-size: 110%;
    font-weight: 400;
    font-family: "Segoe UI",Arial,sans-serif;
}

body {
    margin: 0;
    background-color: antiquewhite;
}

</style>
