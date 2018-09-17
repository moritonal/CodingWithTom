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

.blur {
  filter: blur(6px);
  user-select: none;
  -moz-user-select: none;
  cursor: pointer;
}

#app {

}


#editor {
  width: 500px;
  height: 300px;
}

.vs-dark {
  background-color: #1e1e1e;
}

</style>
