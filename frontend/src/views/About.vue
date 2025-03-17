<script setup lang="ts">
import EducationCard from "../components/EducationCard.vue";
import EmploymentCard from "../components/EmploymentCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
import Carousel from "../components/Carousel.vue"; // Import the new component
import { getEducation } from "../services/educationService";
import { getEmploymentHistory } from "../services/employmentHistoryService";
import type { Education } from "../types/Education";
import type { Project } from "../types/Project";
import type { EmploymentHistory } from "../types/EmploymentHistory";
import { ref, onMounted } from "vue";
import { useMediaQuery } from "../composables/useMediaQuery";
import { fetchGitHubProjects } from "../services/githubServices";

console.log("About: Setup started");
const { isMobile } = useMediaQuery();
console.log("About: isMobile:", isMobile.value);

const employmentHistoryRecords = ref<EmploymentHistory[]>([]);
const educationRecords = ref<Education[]>([]);
const projects = ref<Project[]>([]);

const convertToDate = (monthYear: string) => {
  const [monthStr, year] = monthYear.split(" ");
  const month = new Date(Date.parse(monthStr + " 1, 2012")).getMonth();
  return new Date(Number(year), month);
};

const sortEmploymentHistory = (
  records: EmploymentHistory[]
): EmploymentHistory[] => {
  return records.sort((a, b) => {
    const dateA = convertToDate(a.endMonthYear);
    const dateB = convertToDate(b.endMonthYear);
    return dateB.getTime() - dateA.getTime();
  });
};

onMounted(async () => {
  employmentHistoryRecords.value = sortEmploymentHistory(
    await getEmploymentHistory()
  );
  educationRecords.value = await getEducation();
  projects.value = await fetchGitHubProjects();
});
</script>

<template>
  <div id="about" data-testId="about" class="container">
    <div id="about-content">
      <h1>About</h1>
      <p>
        Solution-focused full-stack software developer skilled in delivering
        scalable, user-centric applications using modern technologies such as
        .NET Core, C#, Java, JavaScript, React, and SQL. Proficient in designing
        RESTful APIs, implementing microservices, and employing unit testing
        frameworks like tSQLt. Experienced in CI/CD practices, cloud-based
        deployments, and creating front-end interfaces with HTML5, CSS3, and
        modern JavaScript frameworks. Committed to Agile methodologies and
        Test-Driven Development, collaborating with teams and stakeholders to
        deliver solutions that align with business goals and maintain technical
        excellence.
      </p>
    </div>
    <div id="desktop-divider">
      <div class="container">
        <img
          src="../assets/Profile Pic.jpg"
          alt="Bad Headshot"
          v-if="!isMobile"
        />
      </div>
      <div class="container" id="carousels-container">
        <div id="employment-content" class="container">
          <h1>Employment History</h1>
          <Carousel
            v-if="employmentHistoryRecords.length > 0"
            :items="employmentHistoryRecords"
          >
            <template v-slot="{ item }">
              <EmploymentCard :employment-history="item" class="card" />
            </template>
          </Carousel>
        </div>
        <div id="education-content" class="container">
          <h1>Education</h1>
          <Carousel
            v-if="educationRecords.length > 0"
            :items="educationRecords"
          >
            <template v-slot="{ item }">
              <EducationCard :education="item" class="card" />
            </template>
          </Carousel>
        </div>
        <div id="project-content" class="container">
          <h1>Projects</h1>
          <Carousel v-if="projects.length > 0" :items="projects">
            <template v-slot="{ item }">
              <ProjectCard :project="item" class="card" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  height: auto;
}

#desktop-divider {
  flex-grow: 1;
  overflow: hidden;
}

@media (min-width: 768px) {
  #about {
    height: 91vh;
    overflow: hidden;
  }
  #desktop-divider {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  #carousels-container {
    flex: 1;
    height: 100%;
    overflow-y: auto;
  }

  #desktop-divider > .container:first-child {
    flex: 0 0 auto;
  }

  img {
    max-height: 100%;
    width: auto;
  }
}
</style>
