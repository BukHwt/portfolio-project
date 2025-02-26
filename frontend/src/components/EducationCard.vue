<script setup lang="ts">
import type { Education } from "../types/Education";

defineProps<{
  education: Education;
}>();
</script>

<template>
  <div class="education-card">
    <h2>{{ education.school }}</h2>
    <p>
      <strong>{{ education.degree }}</strong>
    </p>
    <p>
      <em
        >Start: {{ education.startMonthYear }} End:
        {{ education.endMonthYear }}</em
      >
    </p>
    <p v-if="education.description">
      <em>{{ education.description }}</em>
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
