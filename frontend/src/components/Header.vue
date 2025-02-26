<script setup lang="ts"></script>

<template>
  <header id="header-container" data-testid="header">
    <router-link to="/"
      ><img src="../assets/wizardpng.png" alt="wizard"
    /></router-link>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
#header-container {
  position: sticky;
  background: rgb(176, 183, 188);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  justify-content: right;
  gap: 20px;
  padding-right: 1.5vw;
}

a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-shadow: 0;
  font-size: 1.5em;
  -webkit-text-stroke: 1px rgb(0, 118, 182);
}

a:hover {
  color: rgb(0, 118, 182);
}
img {
  padding-left: 1.5vw;
  height: 6vh;
  width: 6vh;
}
</style>
