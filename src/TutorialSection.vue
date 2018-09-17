<template>
  <div class="section card">
        <h4 class="card-header">
            <span v-html="summary"></span>
        </h4>
        <div class="card-body">
                <div v-for="objective in this.objectives" v-bind:key="objective.summary">
                    <TutorialSubSection v-bind="objective" />
                </div>
                <component :is="textAsVue"></component>
        </div>
  </div>
</template>

<script lang="ts">

import marked from "marked"
import Vue from 'vue/dist/vue.js';

import Answer from "./Answer.vue"
import StretchGoal from "./StretchGoal.vue"
import TutorialSubSection from "./TutorialSubSection.vue"
import MonicoCode from "./MonicoCode.vue";

export default {
  name: "TutorialSection",
  props: [
      "summary",
      "text",
      "objectives"
  ],
  components: {
      TutorialSubSection
  },
  data() {
    return {

    };
  },
  computed: {
        "textAsVue": function() {
            
            if (this.text == null)
                return null;

            let component = Vue.compile(`<div>${this.text}</div>`);

            component.components = {
                Answer,
                StretchGoal,
                MonicoCode
            };
  
            return component;
      }
  }
};

</script>

<style lang="css">

.section {
    margin-bottom: 20px;
}

h4 {
    padding: 10px;
}

</style>
