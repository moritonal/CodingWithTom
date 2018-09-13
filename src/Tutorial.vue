<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Tutorial",
  data() {
    return {
      msg: "Loading Data",
      markdownUrl: "https://raw.githubusercontent.com/Glitch0011/CodingWithTom/master/data.mk"
    };
  },
  mounted: async function() {
      this.msg = "Loading";

      let request = await fetch(this.markdownUrl);
      let response = await request.text();

      this.msg = "Loaded";
  }
};
</script>

<style lang="css">
#app {
  color: #56b983;
}
</style>
