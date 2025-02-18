<script setup lang="ts">
import EducationCard from "../components/EducationCard.vue";
import EmploymentCard from "../components/EmploymentCard.vue";
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
          company="Menlo Innovations"
          position="Software Consultant"
          location="Ann Arbor, MI"
          startMonthYear="December 2022"
          endMonthYear="December 2024"
          :description="[
            'Designs and implements full-stack solutions using JavaScript, C#, SQL, and Java for diverse projects.',
            'Builds scalable applications with React, Aurelia, Spring Boot, and .NET, enhancing user experience',
            'Collaborates with clients to align project requirements with business goals, ensuring satisfaction.',
            'Mentors team members, promoting knowledge sharing and technical growth.',
            'Delivers measurable improvements in project outcomes through effective problem-solving. ',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
