<script setup lang="ts">
import { ref } from "vue";
import { useMediaQuery } from "../composables/useMediaQuery";

const { isMobile } = useMediaQuery();

const isMenuOpen = ref(false);

const toggleMenu = (event: MouseEvent) => {
  event.stopPropagation();
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header id="header-container" data-testid="header">
    <router-link to="/"
      ><img src="../assets/wizardpng.png" alt="wizard" v-if="!isMobile"
    /></router-link>

    <button v-if="isMobile" @click="toggleMenu" aria-label="Toggle Navigation">
      <span class="hamburger">&#9776;</span>
    </button>

    <nav v-if="!isMobile" class="desktop-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <div v-if="isMobile" :class="{ 'mobile-menu': true, active: isMenuOpen }">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/about" @click="closeMenu">About</router-link>
      <router-link to="/contact" @click="closeMenu">Contact</router-link>
    </div>
  </header>
</template>

<style scoped>
#header-container {
  position: fixed;
  display: flex;
  justify-content: end;
  align-items: center;
  bottom: 0;
  right: 0;
  padding: 0 1em 1em 0;
  z-index: 1000;
}
button {
  background: rgb(0, 118, 182);
  border: 1px black solid;
  border-radius: 1em;
}

.hamburger {
  font-size: 3.5rem;
  cursor: pointer;
  background: none;
  border: none;
  color: black;
  padding-bottom: 1em;
}
router-link {
  width: 100%;
}
router-link {
  width: 100%;
}

.mobile-menu {
  position: absolute;
  bottom: 3em;
  right: 0;
  background: rgb(176, 183, 188);
  width: 8em;
  height: auto;
  max-height: 18em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-right: 1em;
  border: 1px black solid;
  align-items: center;
  justify-content: space-evenly;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out,
    transform 0.3s ease-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
  transform: translateY(0);
  opacity: 1;
}

.mobile-menu a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.5em;
  padding: 15px 0;
  width: 100%;
  text-align: center;
  transition: color 0.3s ease;
}

.mobile-menu a:hover {
  color: rgb(0, 118, 182);
}

@media (min-width: 768px) {
  #header-container {
    position: sticky;
    background: rgb(176, 183, 188);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5vw;
    height: 9vh;
  }

  img {
    height: 100%;
    width: 9vh;
  }
  .desktop-nav {
    display: flex;
    justify-content: right;
    gap: 20px;
  }

  .desktop-nav a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 1.5em;
    -webkit-text-stroke: 1px rgb(0, 118, 182);
  }

  .desktop-nav a:hover {
    color: rgb(0, 118, 182);
  }

  .hamburger {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
