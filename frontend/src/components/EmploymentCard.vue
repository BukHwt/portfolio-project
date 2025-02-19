<script setup lang="ts">
import type { EmploymentHistory } from "../types/EmploymentHistory";

defineProps<{
  employmentHistory: EmploymentHistory;
}>();
</script>
<template>
  <div class="employment-card">
    <h2>{{ employmentHistory.company }}</h2>
    <p>
      <strong>{{ employmentHistory.position }}</strong>
    </p>
    <p>
      <em>{{ employmentHistory.location }}</em>
    </p>
    <p>
      <em
        >Start: {{ employmentHistory.startMonthYear }} End:
        {{ employmentHistory.endMonthYear }}</em
      >
    </p>
    <ul v-if="employmentHistory.description">
      <li v-for="desc in employmentHistory.description" :key="desc">
        <em>{{ desc }}</em>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
