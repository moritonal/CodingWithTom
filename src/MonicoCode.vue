<template>
  <div class="parent" v-bind:class="{fillHeight:editorHeight == 'fill'}" >
    <div id="editor_container" ref="editor_container" class="vs-dark" v-bind:class="{fillHeight:editorHeight == 'fill'}">
      <div id="editor" ref="editor" v-bind:class="{fillHeight:editorHeight}"></div>
      <div v-show="false" ref="code">
        <slot v-pre/>
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

.parent {

}

.fillHeight {
  height: 95%;
  overflow-y: hidden;
}

#editor_container {

}

.parent {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  background-color: #1e1e1e;
}

#editor {
  width: 100%;
  /*height: 10px;*/
}

.vs-dark {
  background-color: #1e1e1e;
}

</style>
