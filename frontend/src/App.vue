<script setup lang="ts">
import Header from "./components/Header.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <Header> </Header>
  <div id="app-container">
    <router-view> </router-view>
  </div>
</template>

<style scoped>
/* Mobile styles (default) */

/* Tablet styles (768px and up) */
@media (min-width: 768px) {
}
</style>
