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

const { isMobile } = useMediaQuery();

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
const sortProjects = (projects: Project[]): Project[] => {
  return projects.sort((a, b) => {
    const dateA = new Date(a.updated_at);
    const dateB = new Date(b.updated_at);
    return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
  });
};

onMounted(async () => {
  employmentHistoryRecords.value = sortEmploymentHistory(
    await getEmploymentHistory()
  );
  educationRecords.value = await getEducation();
  projects.value = sortProjects(await fetchGitHubProjects());
});
</script>

<template>
  <div id="about" data-testId="about" class="container">
    <div id="about-content">
      <h1>About</h1>
      <p>
        Adaptable Full-Stack Software Engineer with over two years of hands-on
        experience rapidly delivering high-quality, scalable software solutions.
        Proven ability to quickly master diverse technologies, including Java,
        Spring Boot, JavaScript, React, Node.js, and SQL. Background in
        leadership and data analytics complements strong technical skills,
        enabling effective collaboration in Agile teams. Passionate about
        translating complex business challenges into robust, maintainable
        applications, with a demonstrated history of driving successful legacy
        system transformations and modernization projects. Leverages prior
        experience in social science, education, and leadership—working directly
        with C-suite executives to understand business needs, initiate strategic
        projects, and deliver impactful outcomes.
      </p>
    </div>
    <div id="desktop-divider">
      <div class="container" id="headshot-container">
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
        <div id="project-content" class="container">
          <h1>Projects</h1>
          <Carousel v-if="projects.length > 0" :items="projects">
            <template v-slot="{ item }">
              <ProjectCard :project="item" class="card" />
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
      </div>
    </div>
  </div>
</template>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 1em 2em;
  padding-bottom: 7em;
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
    align-items: center;
  }

  #headshot-container {
    width: 40vw;
  }

  #carousels-container {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    width: auto;
    padding: 0 1em;
  }

  #desktop-divider > .container:first-child {
    flex: 0 0 auto;
  }

  img {
    max-height: 100%;
    width: 18em;
  }
}
</style>
