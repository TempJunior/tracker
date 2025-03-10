<script lang="ts">
import {defineComponent} from 'vue'
import StopWatch from "@/components/StopWatch.vue";

export default defineComponent({
  name: "TasksComponent",
  components: { StopWatch }
})
</script>

<template>
<div class="box has-text-weight-bold">
  <div class="columns">
    <div class="column is-7 has-text-black">
      Descriptions of tasks
    </div>

    <div class="column">
      <StopWatch timeInSeconds="15" class="has-text-black"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.box{
  background: #FAF0CA;
}
</style>