<script setup lang="ts">
import EducationCard from "../components/EducationCard.vue";
import EmploymentCard from "../components/EmploymentCard.vue";
import { getEducation } from "../services/educationService";
import { getEmploymentHistory } from "../services/employmentHistoryService";
import type { Education } from "../types/Education";
import type { EmploymentHistory } from "../types/EmploymentHistory";
import { ref, onMounted } from "vue";
import { highlightCard, resetCards } from "../utils/cssSelectorHelpers";

const employmentHistoryRecords = ref<EmploymentHistory[]>([]);
const educationRecords = ref<Education[]>([]);
onMounted(async () => {
  employmentHistoryRecords.value = await getEmploymentHistory();
  educationRecords.value = await getEducation();
});
</script>

<template>
  <div id="about" data-testId="about" class="container">
    <div>
      <div id="about-content">
        <h1>About</h1>
        <p>
          Solution-focused full-stack software developer skilled in delivering
          scalable, user-centric applications using modern technologies such as
          .NET Core, C#, Java, JavaScript, React, and SQL. Proficient in
          designing RESTful APIs, implementing microservices, and employing unit
          testing frameworks like tSQLt. Experienced in CI/CD practices,
          cloud-based deployments, and creating front-end interfaces with HTML5,
          CSS3, and modern JavaScript frameworks. Committed to Agile
          methodologies and Test-Driven Development, collaborating with teams
          and stakeholders to deliver solutions that align with business goals
          and maintain technical excellence.
        </p>
      </div>
      <div id="education-content" class="container">
        <h1>Education</h1>
        <div class="container-content">
          <EducationCard
            v-for="educationRecord in educationRecords"
            :id="`education-card-${educationRecord.id}`"
            :key="educationRecord.id"
            :education="educationRecord"
            class="card"
            @mouseover="highlightCard"
            @mouseleave="resetCards"
            @touchstart="highlightCard"
            @touchend="resetCards"
          />
        </div>
      </div>
      <div class="container">
        <h1>Employment History</h1>
        <div class="container-content">
          <EmploymentCard
            v-for="employmentHistory in employmentHistoryRecords"
            :id="`employment-card-${employmentHistory.id}`"
            :key="employmentHistory.id"
            :employment-history="employmentHistory"
            class="card"
            @mouseover="highlightCard"
            @mouseleave="resetCards"
            @touchstart="highlightCard"
            @touchend="resetCards"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Base styles for mobile (up to 767px) */
.container {
  display: flex;
  flex-direction: column;
  padding: 1em;
  max-width: 100%;
  margin: 0 auto;
}

.container-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  overflow-x: auto;
}

#about-content,
#education-content,
#employment-history,
.container-content > div {
  flex: 1 1 calc(33.33% - 1em);
  min-width: 12.5em;
  box-sizing: border-box;
}

/* Tablet styles (768px and up) */

@media (min-width: 768px) {
}
</style>
