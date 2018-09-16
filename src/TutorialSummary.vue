<template>
  <div class="alert alert-warning">
      <span v-html="text"></span>
  </div>
</template>

<script lang="ts">

import marked from "marked"

export default {
  name: "TutorialSummary",
  props: [
    "text"
  ],
  data() {
    return {

    };
  },
};

</script>

<style lang="css">

</style>
