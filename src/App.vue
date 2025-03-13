<template>
  <main class="columns is-gapless is-multiline dark-mode">
    <div class="column is-one-quarter">
      <LateralNavBar/>

    </div>

    <div class="column is-three-quarters conteudo">
        <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
import LateralNavBar from "@/components/LateralNavBar.vue";
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
