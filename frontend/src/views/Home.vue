<script setup lang="ts"></script>

<template>
  <div id="home" data-testid="home" class="container">
    <div id="message-container">
      <h2>Hi! My name is:</h2>
      <h1>Steve Anderson</h1>
      <h2>
        I'm a problem-solving fullstack software developer who loves bringing
        ideas to life with code.
      </h2>
    </div>
    <div id="image-container">
      <img src="../assets/Anderson-36.jpg" alt="Anderson Family Photo" />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 55vh;
  padding-top: 3em;
}
#home {
  justify-content: space-evenly;
  text-align: center;
  padding-left: 0.25em;
  display: flex;
  flex-direction: column;
}
#message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}
h1 {
  margin: 0;
  font-size: 50px;
}

@media (min-width: 768px) {
  img {
    height: 65vh;
    padding: 0 1.5em 0 0;
  }
  #home {
    justify-content: space-evenly;
    height: 91vh;
    text-align: center;
    padding-left: 0.25em;
    flex-direction: row;
  }
  #message-container {
    display: flex;
    flex-direction: column;
    gap: 2.5vh;
  }
}
</style>
