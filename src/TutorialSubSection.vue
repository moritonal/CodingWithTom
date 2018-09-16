<template>
    <div class="section">
        <h4 v-html="summary"></h4>
        <div class="px-4">
            <div v-if="this.text != null">
                <component :is="textAsVue"></component>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">

import marked from "marked"
import Vue from 'vue/dist/vue.js';

import Answer from "./Answer.vue"
import StretchGoal from "./StretchGoal.vue"
import MonicoCode from "./MonicoCode.vue";

export default {
  name: "TutorialSubSection",
  props: [
      "summary",
      "text",
      "objectives"
  ],
  data() {
    return {

    };
  },
  computed: {
        "textAsVue": function() {
          
            if (this.text == null)
                return this.text;

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
