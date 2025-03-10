<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StopWatch",
  props: {
    timeInSeconds: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentTime(): string {
      return new Date(this.timeInSeconds * 1000).toISOString().substring(11, 19)
    }
  }
})
</script>

<template>
  <section>
    <strong class="has-text-black">
      {{ currentTime }}
    </strong>
  </section>
</template>
