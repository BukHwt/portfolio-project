<script setup lang="ts">
import type { Project } from "../types/Project";

defineProps<{ project: Project }>();
</script>

<template>
  <v-card class="project-card">
    <v-card-title>{{ project.name }}</v-card-title>
    <v-card-text>
      <p>{{ project.description || "No description available." }}</p>
      <em
        ><p>Created {{ project.created_at }}</p></em
      >
      <em
        ><p>Last updated {{ project.updated_at }}</p></em
      >
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
