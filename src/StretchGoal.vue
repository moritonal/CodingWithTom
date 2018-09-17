<template>
  <div>
      StretchGoal
  </div>
</template>

<script lang="ts">

import marked from "marked"

export default {
  name: "StretchGoal",
  data() {
    return {};
  },
  props: ["markdown"],
  mounted: async function() {},
  computed: {
    jsonMarkdown: function() {
        return marked(this.markdown);
    }
  }
};

</script>

<style lang="css">

</style>
