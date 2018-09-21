<template>
  <div v-bind:class="{answer: true, wrapper: true, clickable : storedBlurred }" v-on:click="deBlur">
    <div v-bind:class="{ payload : true, blurred : storedBlurred}" ref="slot">
      <slot />
    </div>
    <transition name="sweep" duration="500">
      <div v-bind:class="{overlay : true}" v-show="this.storedBlurred">
        <span class="text">Reveal</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">

import marked from "marked"

async function StringToKey(key : string) : Promise<string> {

  var buffer = new TextEncoder().encode(key);
  let hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  let hex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  
  return hex;
}

export default {
  name: "Answer",
  data() {
    return {
      storedBlurred: true,
      key: null
    };
  },
  props: ["markdown"],
  watch: {
    
  },
  mounted: async function() {

      if (this.$refs.slot == null)
        return false;

      let key = this.$refs.slot.innerText;
      let hex = await StringToKey(key);

      this.key = hex;

      let localVal = localStorage.getItem(hex);

      if (localVal == undefined)
        this.storedBlurred = true;
      else {
        this.storedBlurred = localVal == "true" ? true : false;
        if (!this.storedBlurred) 
          console.log("Revealed answer", this.key);
      }
  },
  methods: {
    "deBlur": function() {
      
      if (localStorage.getItem(this.key) !== "false") {
        console.log("Reveal answer", this.key);
        localStorage.setItem(this.key, "false");

        let scoreStr = localStorage.getItem("score") ;

        let score = scoreStr === null ? null : parseInt(scoreStr);
        if (score == null)
          score = 1;
        else 
          score = score + 1;
        localStorage.setItem("score", score.toString());

        let totalAnswers = document.querySelectorAll(".answer").length;
        
        console.log(`${score}/${totalAnswers}`);

        window.dispatchEvent(new Event("answerRevealed"));

        this.storedBlurred = false;
      }
    }
  },
  computed: {

}
};

</script>

<style lang="css">

.sweep-enter-active, .sweep-leave-active {
  transition: all 0.4s;
}
.sweep-enter, .sweep-leave-to {
  opacity: 0;
}

.wrapper {
  position: relative;
  padding: 10px;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  
  background-color: rgb(0,0,0,0.4);
  border: 1px solid rgb(0,0,0,0.4s);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  -moz-user-select: none;
  -moz-user-focus: ignore;
}

.payload {
  transition: filter 0.75s;
}

.payload.blurred {
  filter: blur(6px);

  user-select: none;
  -moz-user-select: none;
  -moz-user-focus: ignore;
}

.clickable {
  cursor: pointer;
  user-select: none;
}

.answer {
  padding: 10;
  border-radius: 10px;
  margin-bottom: 15px;
}

.black-border {
  border: 5px solid rgba(77, 70, 70, 1.0);
}

.text {
  color: rgb(255,255,255,0.9);
}

.opaque {
  opacity: 1.0;
}

.blur {
  filter: blur(6px);
  user-select: none;
  -moz-user-select: none;
  cursor: pointer;
}

</style>
