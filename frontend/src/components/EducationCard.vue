<script setup lang="ts">
defineProps<{
  school: string;
  degree: string;
  fieldOfStudy: string;
  startMonthYear: string;
  endMonthYear: string;
  description?: string;
}>();
</script>

<template>
  <div class="education-card">
    <h2>{{ school }}</h2>
    <p>
      <strong>{{ degree }}</strong> in {{ fieldOfStudy }}
    </p>
    <p>
      <em>Start: {{ startMonthYear }} End: {{ endMonthYear }}</em>
    </p>
    <p v-if="description">
      <em>{{ description }}</em>
    </p>
  </div>
</template>

<style scoped>
.education-card {
  border: 2px solid #0076b6;
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
h2 {
  color: #0076b6;
  margin-bottom: 4px;
}
p {
  margin: 4px 0;
}
</style>
