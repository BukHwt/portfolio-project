<script setup lang="ts">
import EducationCard from "../components/EducationCard.vue";
import EmploymentCard from "../components/EmploymentCard.vue";
import { getEmploymentHistory } from "../services/employmentHistoryService";
import type { EmploymentHistory } from "../types/EmploymentHistory";
import { ref, onMounted } from "vue";

const employmentHistoryRecords = ref<EmploymentHistory[]>([]);
onMounted(async () => {
  employmentHistoryRecords.value = await getEmploymentHistory();
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
          school="Grand Circus Bootcamp"
          degree="Javascript Full Stack Development"
          fieldOfStudy="MERN Tech Stack"
          startMonthYear="January 2022"
          endMonthYear="April 2022"
          description="Full Stack Development Bootcamp focused on the MERN Tech Stack"
        />
        <EducationCard
          school="Olivet College
        "
          degree="Secondary Education Certification"
          fieldOfStudy="Social Studies"
          startMonthYear="August 2009"
          endMonthYear="December 2010"
        />
        <EducationCard
          school="Albion College"
          degree="Bachelor of Arts"
          fieldOfStudy="History and Political Science"
          startMonthYear="August 2003"
          endMonthYear="May 2007"
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
