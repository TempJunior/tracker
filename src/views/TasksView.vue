<template>
      <FormComponent @onSaveTask="saveTask" />

      <div class="lista">
        <TasksComponent
            v-for="(task, index) in tasks"
            :key="index"
            :task="task"
        />
        <BoxComponent v-if="!tasks.length">
          No tasks found.
        </BoxComponent>
      </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import FormComponent from "@/components/FormComponent.vue";
import TasksComponent from "@/components/TasksComponent.vue";
import ITask from "@/interfaces/ITask";
import BoxComponent from "@/components/BoxComponent.vue";

export default defineComponent({
  name: 'App',
  components: {
    BoxComponent,
    TasksComponent,
    FormComponent,
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

main{
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode{
  --bg-primary: #2d2d42;
  --text-primary: #ddd;
}

.conteudo{
  background-color: var(--bg-primary);
}
</style>
