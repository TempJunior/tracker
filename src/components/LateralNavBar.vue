<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo">
    </h1>

    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            Home page
          </router-link>
        </li>

        <li>
          <router-link to="/projects" class="link">
            Task
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LateralNavBar"
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #FAF0CA;
}
.link.router-link-active {
  color: #FAF0CA;
}
</style>