<script lang="ts">
import {defineComponent, PropType} from 'vue'
import StopWatch from "@/components/StopWatch.vue";
import ITask from "@/interfaces/ITask";
import BoxComponent from "@/components/BoxComponent.vue";

export default defineComponent({
  name: "TasksComponent",
  components: {BoxComponent, StopWatch },
  props:{
    task:{
      type:Object as PropType<ITask>, required: true
    }
  }
})
</script>

<template>
<BoxComponent class="box has-text-weight-bold">
  <div class="columns">
    <div class="column is-7 has-text-white">
      {{task.description || 'No description Task'}}
    </div>

    <div class="column has-text-black">
      <StopWatch :timeInSeconds="task.durationInSeconds"/>
    </div>
  </div>
</BoxComponent>
</template>
