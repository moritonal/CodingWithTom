<template>
  <div id="app">
    <div v-if="this.state == 'LOADING'">
        <h1>Loading</h1>
    </div>
    <div v-if="this.state == 'SHOW'">
        <Tutorial v-bind:markdown="this.markdown" />
    </div>
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

#app {

}

</style>
