<script setup lang="ts">
import type { Education } from "../types/Education";

defineProps<{ education: Education }>();
</script>

<template>
  <v-card class="education-card">
    <v-card-title>{{ education.school }}</v-card-title>
    <v-card-subtitle>{{ education.degree }}</v-card-subtitle>
    <v-card-text>
      <p>
        <em
          >Start: {{ education.startMonthYear }} - End:
          {{ education.endMonthYear }}</em
        >
      </p>
      <p v-if="education.description">
        <em>{{ education.description }}</em>
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
