// (1) Desired editor features:
import 'monaco-editor/esm/vs/editor/browser/controller/coreCommands.js';
// import 'monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget.js';
// import 'monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget.js';
// import 'monaco-editor/esm/vs/editor/browser/widget/diffNavigator.js';
// import 'monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js';
// import 'monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations.js';
// import 'monaco-editor/esm/vs/editor/contrib/caretOperations/transpose.js';
// import 'monaco-editor/esm/vs/editor/contrib/clipboard/clipboard.js';
// import 'monaco-editor/esm/vs/editor/contrib/codelens/codelensController.js';
// import 'monaco-editor/esm/vs/editor/contrib/colorPicker/colorDetector.js';
// import 'monaco-editor/esm/vs/editor/contrib/comment/comment.js';
// import 'monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu.js';
// import 'monaco-editor/esm/vs/editor/contrib/cursorUndo/cursorUndo.js';
// import 'monaco-editor/esm/vs/editor/contrib/dnd/dnd.js';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
// import 'monaco-editor/esm/vs/editor/contrib/folding/folding.js';
// import 'monaco-editor/esm/vs/editor/contrib/format/formatActions.js';
// import 'monaco-editor/esm/vs/editor/contrib/goToDeclaration/goToDeclarationCommands.js';
// import 'monaco-editor/esm/vs/editor/contrib/goToDeclaration/goToDeclarationMouse.js';
// import 'monaco-editor/esm/vs/editor/contrib/gotoError/gotoError.js';
// import 'monaco-editor/esm/vs/editor/contrib/hover/hover.js';
// import 'monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js';
// import 'monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js';
// import 'monaco-editor/esm/vs/editor/contrib/links/links.js';
// import 'monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js';
// import 'monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHints.js';
// import 'monaco-editor/esm/vs/editor/contrib/quickFix/quickFixCommands.js';
// import 'monaco-editor/esm/vs/editor/contrib/referenceSearch/referenceSearch.js';
// import 'monaco-editor/esm/vs/editor/contrib/rename/rename.js';
// import 'monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js';
// import 'monaco-editor/esm/vs/editor/contrib/snippet/snippetController2.js';
// import 'monaco-editor/esm/vs/editor/contrib/suggest/suggestController.js';
// import 'monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode.js';
// import 'monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js';
// import 'monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOutline.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickOpen/gotoLine.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickCommand.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';
import 'monaco-editor/esm/vs/editor/editor.api.js';

// (2) Desired languages:
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';
import 'monaco-editor/esm/vs/language/css/monaco.contribution';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';
import 'monaco-editor/esm/vs/language/html/monaco.contribution';
// import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';

import * as monaco from "monaco-editor"

self.MonacoEnvironment = {
	getWorker: function (moduleId, label) {
		if (label === 'json') {
            let path = "./json.worker.js"

			return new Worker(path)
		}
		if (label === 'css') {
            let path = "./css.worker.js";
			return new Worker(path)
		}
		if (label === 'html') {
            let path = "./html.worker.js";
            console.log(path);
			return new Worker(path);
		}
		if (label === 'typescript' || label === 'javascript') {
            let path = './typescript.worker.js';
			return new Worker(path)
        }
        let path = './editor.worker.js';
		return new Worker(path)
	}
}

interface IData {
    editor : monaco.editor.IStandaloneCodeEditor
}

export default {
  name: "MonicoCode",
  props: {
    theme: {
      type: String,
      default: 'vs-dark'
    },
    language: {
      type: String,
      default: "html"
    },
    options: Object
  },
  data: function() : IData {
    return <IData>{
      editor: null
    }
  },
  model: {
    event: 'change'
  },
  watch: {
    language(newVal) {
      if (this.editor) {
        this.editor.setModelLanguage(this.editor.getModel(), newVal)
      }
    },

    theme(newVal) {
      if (this.editor) {
        this.editor.setTheme(newVal)
      }
    }
  },

  mounted() {

    this.value = this.$refs.code.innerText;
    this.initMonaco()
  },

  beforeDestroy() {
    this.editor && this.editor.dispose()
  },

  methods: {
    initMonaco() {

      let element = this.$refs.editor;

      console.log("Creating editor for", this.language);

      this.editor = monaco.editor.create(element, {
        value: this.value,
        language: this.language,
        theme: 'vs-dark',
        readOnly: true,
        automaticLayout: false,
        scrollBeyondLastLine: false,
        scrollbar: {
            vertical: "hidden"
        } as monaco.editor.IEditorScrollbarOptions
      });

      let lines = this.editor.getModel().getLineCount() + 2;

      const contentHeight = lines * 19;

      element.style.height = contentHeight;

      this.editor.layout();
    },

    getMonaco() {
      return this.editor
    },

    focus() {
      this.editor.focus()
    }
  }
}