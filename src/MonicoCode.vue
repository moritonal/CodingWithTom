<template>
  <div class="vs-dark">
    <div id="editor" ref="editor"></div>
    <div v-show="false" ref="code">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">

import assign from 'nano-assign'
import * as monaco from 'monaco-editor'

// import MonacoEditor from './CustomMonacoEditor.js'

export default {
  name: "MonicoCode",
  props: {
    value: String,
    theme: {
      type: String,
      default: 'vs-dark'
    },
    language:{
      type: String,
      default: "html"
    },
    options: Object,
    amd: {
      type: Boolean,
      default: false
    },
    require: {
      type: Function,
      default: window.require
    }
  },
  model: {
    event: 'change'
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        if (this.editor) {
          this.editor.updateOptions(options)
        }
      }
    },

    value(newValue) {
      if (this.editor) {
        if (newValue !== this.editor.getValue()) {
          this.editor.setValue(newValue)
        }
      }
    },

    language(newVal) {
      if (this.editor) {
        window.monaco.editor.setModelLanguage(this.editor.getModel(), newVal)
      }
    },

    theme(newVal) {
      if (this.editor) {
        window.monaco.editor.setTheme(newVal)
      }
    }
  },

  mounted() {

    this.value = this.$refs.code.innerText;

    if (this.amd) {
      this.require(['vs/editor/editor.main'], () => {
        this.initMonaco(window.monaco)
      })
    } else {
      this.initMonaco(monaco)
    }
  },

  beforeDestroy() {
    this.editor && this.editor.dispose()
  },

  methods: {
    initMonaco(monaco) {

      const options = assign(
        {
          value: this.value,
          theme: this.theme,
          language: this.language
        },
        this.options
      );

      let element = this.$refs.editor;

      this.editor = monaco.editor.create(element, options);
      
      console.log(this.$slots.defualt);
    },

    getMonaco() {
      return this.editor
    },

    focus() {
      this.editor.focus()
    }
  }
}

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
