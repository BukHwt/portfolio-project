<script setup lang="ts">
import Header from "./components/Header.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div id="app-container">
    <Header> </Header>
    <router-view> </router-view>
  </div>
  <SpeedInsights />
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
