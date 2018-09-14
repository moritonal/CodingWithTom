<template>
  <div v-bind:class="{ blur : blurred}" v-on:click="deBlur">
      <slot />
  </div>
</template>

<script lang="ts">

import marked from "marked"

export default {
  name: "Answer",
  data() {
    return {
      blurred: true
    };
  },
  props: ["markdown"],
  methods: {
    "deBlur": function() {
      this.blurred = false;
    }
  },
  computed: {
    jsonMarkdown: function() {
        return marked(this.markdown);
    }
  }
};

</script>

<style lang="css">

div {
  transition: filter 1s;
}

.blur {
  filter: blur(6px);
  user-select: none;
  -moz-user-select: none;
  cursor: pointer;
}

#app {

}

</style>
