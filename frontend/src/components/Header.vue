<script setup lang="ts"></script>

<template>
  <header id="header-container" data-testid="header">
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
  top: 0;
  width: 100%;
  background: turquoise;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 2.5em;
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

router-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

router-link:hover {
  color: blue;
}
</style>
