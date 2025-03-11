<script setup lang="ts">
import Header from "./components/Header.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <Header> </Header>
  <div id="app-container">
    <router-view> </router-view>
  </div>
  <SpeedInsights />
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1rem 0.5rem 2rem 0.5rem;
}

/* Tablet styles (768px and up) */
@media (min-width: 768px) {
}
</style>
