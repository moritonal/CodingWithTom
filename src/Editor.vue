<template>

  <div id="app">
	  <monico-code
		v-if="markdown != null" 
		v-bind:read-only=false
		language="markdown"
	   	editor-height="fill"
	   	v-on:onChange="onChange">{{markdown}}</monico-code>
  </div>
</template>

<script>
import MonicoCode from "./MonicoCode.vue";
import debounce from "debounce";

export default {
  name: "Editors",
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
		  console.log(data);
		  this.channel.postMessage({
			  command: "update",
			  newMarkdown: data
		  });
	  }
  },
  mounted: function() {
    console.log("Sending post to ", window.top);
	window.parent.postMessage("Hello", window.location.origin);
	
	this.onChange = debounce(this.onChange, 1000);

    this.channel = new BroadcastChannel("EditChannel");

    this.channel.onmessage = evt => {
      console.log(evt);
	};
	
	let savedMarkdownUri = localStorage.getItem("savedMarkdownUrl");

	this.markdown = localStorage.getItem(`${savedMarkdownUri}.edited`);
		
  },
  watch: {}
};
</script>

<style lang="css">
</style>
