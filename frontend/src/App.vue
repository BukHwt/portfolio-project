<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div id="app-container">
    <Header> </Header>
    <div id="router-container">
      <router-view> </router-view>
    </div>
  </div>
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  min-width: 100vw;
  padding: 0;
}
</style>
