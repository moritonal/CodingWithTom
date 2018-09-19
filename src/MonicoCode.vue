<template>
  <div class="parent">
  <div ref="editor_container" class="vs-dark">
    <div id="editor" ref="editor"></div>
    <div v-show="false" ref="code">
      <slot/>
    </div>
  </div>
  </div>
</template>

<script lang="js">

import MonicoCode from "./MonicoCode.ts";

export default MonicoCode;

</script>

<style lang="css">

div {
  transition: filter 500ms;
}

#app {

}

.parent {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  background-color: #1e1e1e;
}

#editor {
  width: 100%;
  height: 10px;
}

.vs-dark {
  background-color: #1e1e1e;
}

</style>
