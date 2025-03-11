<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <LateralNavBar/>

    </div>

    <div class="column is-three-quarters">
      <FormComponent @onSaveTask="saveTask" />

      <div class="lista">
        <TasksComponent
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LateralNavBar from "@/components/LateralNavBar.vue";
import FormComponent from "@/components/FormComponent.vue";
import TasksComponent from "@/components/TasksComponent.vue";
import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: 'App',
  components: {
    TasksComponent,
    FormComponent,
    LateralNavBar
  },

  data(){
    return {
      tasks: [] as ITask[]
    }
  },
  methods: {
    saveTask(task: ITask){
      this.tasks.push(task);
    }
  }
})
</script>

<style scoped>
.lista{
  padding: 1.25rem;
}
</style>
