<script lang="ts">
import {defineComponent, PropType} from 'vue'
import StopWatch from "@/components/StopWatch.vue";
import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "TasksComponent",
  components: { StopWatch },
  props:{
    task:{
      type:Object as PropType<ITask>, required: true
    }
  }
})
</script>

<template>
<div class="box has-text-weight-bold">
  <div class="columns">
    <div class="column is-7 has-text-white">
      {{task.description}}
    </div>

    <div class="column has-text-black">
      <StopWatch :timeInSeconds="task.durationInSeconds"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.box{
  background: #0d3b66;
}
</style>