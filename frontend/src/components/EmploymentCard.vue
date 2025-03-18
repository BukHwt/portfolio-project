<script setup lang="ts">
import type { EmploymentHistory } from "../types/EmploymentHistory";

defineProps<{ employmentHistory: EmploymentHistory }>();
</script>

<template>
  <v-card class="employment-card">
    <v-card-title>{{ employmentHistory.company }}</v-card-title>
    <v-card-subtitle>{{ employmentHistory.position }}</v-card-subtitle>
    <v-card-text>
      <p>
        <em>{{ employmentHistory.location }}</em>
      </p>
      <p>
        <em
          >Start: {{ employmentHistory.startMonthYear }} - End:
          {{ employmentHistory.endMonthYear }}</em
        >
      </p>
      <v-list v-if="employmentHistory.description">
        <v-list-item v-for="desc in employmentHistory.description" :key="desc">
          <v-list-item-title
            ><em>{{ desc }}</em></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
