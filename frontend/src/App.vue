<script setup lang="ts">
import Header from "./components/Header.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
  <v-app style="background: rgb(0, 118, 182);">
    <Analytics />
    <SpeedInsights />
    <Header> </Header>
    <v-main style="background: rgb(0, 118, 182);">
      <div id="app-container">
        <router-view> </router-view>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
/* Mobile styles (default) */

/* Tablet styles (768px and up) */
@media (min-width: 768px) {
}
</style>
