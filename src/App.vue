<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <LateralNavBar/>

    </div>

    <div class="column is-three-quarters">
      <FormComponent/>

      <div class="lista">
        <TasksComponent/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LateralNavBar from "@/components/LateralNavBar.vue";
import FormComponent from "@/components/FormComponent.vue";
import TasksComponent from "@/components/TasksComponent.vue";

export default defineComponent({
  name: 'App',
  components: {TasksComponent, FormComponent, LateralNavBar},
})
</script>

<style scoped>
.lista{
  padding: 1.25rem;
}
</style>
