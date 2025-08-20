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
    <!-- Hero Section with Profile Picture -->
    <div id="hero-section">
      <h1 class="page-title">About Me</h1>
      <div id="about-content">
        <div class="profile-image-container" v-if="!isMobile">
          <img
            src="../assets/Profile Pic.jpg"
            alt="Profile Picture"
            class="hero-profile-pic"
          />
        </div>
        <div class="hero-text">
          <p class="about-summary">
            Full-Stack Software Engineer with 2+ years experience in Java,
            Spring Boot, JavaScript, React, and Node.js. Passionate about
            delivering scalable solutions and modernizing legacy systems.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Carousel Section -->
    <div id="main-content">
      <div id="employment-content" class="carousel-section">
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
      <div id="project-content" class="carousel-section">
        <h1>Projects</h1>
        <Carousel v-if="projects.length > 0" :items="projects">
          <template v-slot="{ item }">
            <ProjectCard :project="item" class="card" />
          </template>
        </Carousel>
      </div>
      <div id="education-content" class="carousel-section">
        <h1>Education</h1>
        <Carousel v-if="educationRecords.length > 0" :items="educationRecords">
          <template v-slot="{ item }">
            <EducationCard :education="item" class="card" />
          </template>
        </Carousel>
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

/* Hero Section */
#hero-section {
  margin-bottom: 2em;
}

#about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin-bottom: 2em;
}

.profile-image-container {
  flex-shrink: 0;
}

.hero-profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.hero-text {
  flex: 1;
}

.page-title {
  font-size: 2.5em;
  margin-bottom: 1em;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
}

.about-summary {
  font-size: 1.2em;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Main Carousel Content */
#main-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1.5em 1.5em;
  padding-right: 2em; /* Account for scrollbar space */
  overflow-y: auto;
  /* Custom scrollbar styling */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05); /* thumb track */
  width: 85%;
}

/* Webkit browsers (Chrome, Safari, Edge) */
#main-content::-webkit-scrollbar {
  width: 12px;
}

#main-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin: 8px 0; /* Add some margin to match container radius */
}

#main-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.05); /* Creates inner spacing effect */
  background-clip: content-box; /* Makes border create spacing */
}

#main-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

#main-content::-webkit-scrollbar-thumb:active {
  background: rgba(255, 255, 255, 0.4);
}

.carousel-section {
  margin-bottom: 3em;
}

.carousel-section:last-child {
  margin-bottom: 0;
}

.carousel-section h1 {
  font-size: 2em;
  margin-bottom: 1em;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5em;
}

/* Mobile Styles */
@media (max-width: 767px) {
  #about-content {
    flex-direction: column;
    text-align: center;
  }

  .page-title {
    font-size: 2em;
  }

  #main-content {
    padding: 1.5em;
  }
}

/* Desktop Styles */
@media (min-width: 768px) {
  #about {
    height: 91vh;
    overflow: hidden;
    padding: 1.5em 3em;
  }

  #hero-section {
    margin-bottom: 1.5em;
  }

  .hero-profile-pic {
    width: 150px;
    height: 150px;
  }

  .page-title {
    font-size: 3em;
  }

  .about-summary {
    font-size: 1.3em;
  }

  #main-content {
    height: calc(100vh - 250px);
    padding: 2em 0.5em;
    max-width: none;
  }

  .carousel-section h1 {
    font-size: 2.2em;
  }
}
</style>
