<script lang="ts">
import {defineComponent} from 'vue'
import TimerComponent from "@/components/TimerComponent.vue";

export default defineComponent({
  name: "FormComponent",
  components: {
    TimerComponent
  },
  data(){
    return {
      description: ''
    }
  },
  methods: {
    finishTask(currentTime: number): void {
      console.log(currentTime);
      console.log(this.description);
      this.description = '';
    }
  }
})
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="formulario criaçao tarefa">
        <input
            type="text"
            class="input"
            placeholder="What task do you want for you dumb?"
            v-model="description"/>
      </div>

      <div class="column">
        <TimerComponent @TimerFinished="finishTask"/>
      </div>
    </div>
  </div>
</template>