<script setup lang="ts">
import type { Project } from "../types/Project";

defineProps<{ project: Project }>();

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
</script>

<template>
  <v-card class="project-card">
    <v-card-title>{{ project.name }}</v-card-title>
    <v-card-text>
      <p>{{ project.description || "No description available." }}</p>
      <em
        ><p>Created: {{ formatDate(project.created_at) }}</p></em
      >
      <em
        ><p>Last updated: {{ formatDate(project.updated_at) }}</p></em
      >
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
