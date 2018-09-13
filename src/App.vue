<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Tutorial v-bind:markdown="this.markdown" />
  </div>
</template>

<script>

import {Tutorial} from "./Tutorial.vue"

export default {
  name: "App",
  data() {
    return {
      msg: "Loading Data",
      markdownUrl: "https://raw.githubusercontent.com/Glitch0011/CodingWithTom/master/data.mk",
      markdown: null
    };
  },
  components: {
      Tutorial
  },
  mounted: async function() {
      this.msg = "Loading";

      let request = await fetch(this.markdownUrl);
      let response = await request.text();

      this.msg = "Loaded";
      this.markdown = response;
  }
};
</script>

<style lang="css">
#app {
  color: #56b983;
}
</style>
