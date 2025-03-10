<script lang="ts">
import {defineComponent} from 'vue'
import StopWatch from "@/components/StopWatch.vue";

export default defineComponent({
  name: "TimerComponent",
  components: { StopWatch},
  data(){
    return {
      timeInSeconds: 0,
      stopwatch : 0,
      buttonDisabled: false,
    }
  },
  emits: ['TimerFinished'],
  methods: {
    start(){
      this.buttonDisabled = true;
      this.stopwatch = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000)
      console.log(this.timeInSeconds)
    },
    stop(){
      this.buttonDisabled = false;
      clearInterval(this.stopwatch)
      this.$emit("TimerFinished", this.timeInSeconds)
      this.timeInSeconds = 0
    }
  }
})
</script>

<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">

    <StopWatch :timeInSeconds="timeInSeconds"/>
    <button class="button" @click="start" :disabled="buttonDisabled">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
      <span>play</span>
    </button>
    <button class="button" @click="stop" :disabled="!buttonDisabled">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
      <span>stop</span>
    </button>
  </div>
</template>