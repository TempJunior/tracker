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
    <strong class="display has-text-white">
      {{ currentTime }}
    </strong>
  </section>
</template>

<style scoped>
.display{
  color: var(--text-primary);

}
</style>
