<script setup lang="ts">
import EducationCard from "../components/EducationCard.vue";
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
        <p>
          <strong>Software Consultant</strong>
          <br />
          <strong>Menlo Innovations</strong>
          <br />
          Ann Arbor, MI
          <br />
          <em>December 2022 - December 2024</em>
          <br />
          <br />
          <strong>Team Leader, Workforce Management</strong>
          <br />
          <strong>Rocket Mortgage</strong>
          <br />
          Detroit, MI
          <br />
          <em>Nov 2018 - Jan 2022</em>
          <br />
          <br />
          <strong>People Capacity Specialist</strong>
          <br />
          <strong>Rocket Mortgage</strong>
          <br />
          Detroit, MI
          <br />
          <em>Jul 2017 - Nov 2018</em>
          <br />
          <br />
          <strong>Team Leader, Training</strong>
          <br />
          <strong>Rocket Mortgage</strong>
          <br />
          Detroit, MI
          <br />
          <em>Apr 2016 - Jul 2017</em>
          <br />
          <br />
          <strong>ISM Assurance Specialist</strong>
          <br />
          <strong>Rocket Mortgage</strong>
          <br />
          Detroit, MI
          <br />
          <em>Jun 2013 - Apr 2016</em>
          <br />
          <br />
          <strong>Mortgage Banker</strong>
          <br />
          <strong>Rocket Mortgage</strong>
          <br />
          Detroit, MI
          <br />
          <em>Feb 2012 - Jun 2013</em>
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
