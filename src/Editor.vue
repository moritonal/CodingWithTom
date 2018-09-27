<template>

  <div id="app">
	  <monico-code
			v-if="markdown != null" 
			v-bind:read-only=false
			language="markdown"
	   	editor-height="fill"
	   	v-on:change="onChange"
			v-bind:suggest=false
			v-bind:word-wrap=true>{{markdown}}</monico-code>
  </div>
</template>

<script>
import MonicoCode from "./MonicoCode.vue";
import debounce from "debounce";

export default {
  name: "Editor",
  data() {
    return {
	  markdown: null,
	  channel: null
    };
  },
  components: {
    MonicoCode
  },
  methods: {
	  onChange: function(evt, data) {
		  this.channel.postMessage({
			  command: "update",
			  newMarkdown: data
		  });
	  }
  },
  mounted: function() {

	this.onChange = debounce(this.onChange, 500);

    this.channel = new BroadcastChannel("EditChannel");

		let savedMarkdownUri = localStorage.getItem("savedMarkdownUrl");

		this.markdown = localStorage.getItem(`${savedMarkdownUri}.edited`);
  },
  watch: {}
};
</script>

<style lang="css">
</style>
