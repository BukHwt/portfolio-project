<script setup lang="ts">
defineProps<{
  company: string;
  position: string;
  location: string;
  startMonthYear: string;
  endMonthYear: string;
  description?: string[];
}>();
</script>
<template>
  <div class="employment-card">
    <h2>{{ company }}</h2>
    <p>
      <strong>{{ position }}</strong>
    </p>
    <p>
      <em>{{ location }}</em>
    </p>
    <p>
      <em>Start: {{ startMonthYear }} End: {{ endMonthYear }}</em>
    </p>
    <ul v-if="description">
      <li v-for="desc in description" :key="desc">
        <em>{{ desc }}</em>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
