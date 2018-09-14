<template>
  <div id="app">
      <div v-if="this.markdown != null">
          <component :is="jsonMarkdown"></component>
      </div>
  </div>
</template>

<script lang="ts">

import marked from "marked"
import Vue from 'vue/dist/vue.js';

import Answer from "./Answer.vue"
import StretchGoal from "./StretchGoal.vue"

export default {
  name: "Tutorial",
  data() {
    return {
        
    };
  },
  components: {
      Answer
  },
  props: ["markdown"],
  mounted: async function() {},
  computed: {
    jsonMarkdown: function() {

        // Here I think it'd be best to convert the markdown into json, then work with it.
        // Although there a small argument that markdown isn't the correct format in the first place.
        let compiledMardown = marked(this.markdown);

        let component = Vue.compile(`<div>${compiledMardown}</div>`);

        component.components = {
            Answer,
            StretchGoal
        };

        return component;
    }
  }
};

</script>

<style lang="css">

#app {

}

</style>
