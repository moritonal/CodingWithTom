<template>
  <div class="vs-dark">
    <div id="editor" ref="editor"></div>
    <div v-show="false" ref="code">
      <slot/>
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


#editor {
  width: 100%;
  height: 10px;
}

.vs-dark {
  background-color: #1e1e1e;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

</style>
