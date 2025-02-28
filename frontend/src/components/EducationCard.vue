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

<style scoped></style>
