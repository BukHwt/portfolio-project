<script setup lang="ts">
import EducationCard from "../components/EducationCard.vue";
import EmploymentCard from "../components/EmploymentCard.vue";
import { getEducation } from "../services/educationService";
import { getEmploymentHistory } from "../services/employmentHistoryService";
import type { Education } from "../types/Education";
import type { EmploymentHistory } from "../types/EmploymentHistory";
import { ref, onMounted } from "vue";

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
      <div id="education-content">
        <h1>Education</h1>
        <EducationCard
          v-for="educationRecord in educationRecords"
          :key="educationRecord.id"
          :education="educationRecord"
        />
      </div>
      <div id="employment-history">
        <h1>Employment History</h1>
        <EmploymentCard
          v-for="employmentHistory in employmentHistoryRecords"
          :key="employmentHistory.id"
          :employment-history="employmentHistory"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
