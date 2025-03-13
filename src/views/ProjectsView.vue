<script lang="ts">
import {defineComponent} from 'vue'
import IProjeto from "@/interfaces/IProjeto";

export default defineComponent({
  name: "ProjectsView",

  data() {
    return {
      projectName: '',
      projects: [] as IProjeto[]
    }
  },
  methods: {
    save() {
      const project: IProjeto = {
        name: this.projectName,
        id: new Date().toISOString()
      }

      this.projects.push(project)
      this.projectName = ''
    }
  }
})

</script>

<template>
  <section class="projetos">
    <h1>

    </h1>

    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">
          Name project
        </label>

        <input type="text" class="input" v-model="projectName" id="projectName"/>
      </div>

      <div class="field">
        <button class="button" type="submit">
          Save
        </button>
      </div>
    </form>

    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>
          ID
        </th>

        <th>
          Name
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="project in projects" :key="project.id">
        <td>
          {{project.id}}
        </td>
        <td>{{project.name}}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.projetos {
  padding: 1.25rem;
}

</style>