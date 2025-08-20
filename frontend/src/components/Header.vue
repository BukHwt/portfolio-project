<script setup lang="ts">
import { ref } from "vue";
import { useMediaQuery } from "../composables/useMediaQuery";

const { isMobile } = useMediaQuery();

const drawer = ref(false);

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' }
];
</script>

<template>
  <!-- Mobile Header: Fixed bottom-right -->
  <div v-if="isMobile" class="mobile-header-container">
    <v-btn
      @click="drawer = !drawer"
      color="rgb(0, 96, 148)"
      size="large"
      class="mobile-nav-button"
      aria-label="Toggle Navigation"
    >
      <v-icon size="large">mdi-menu</v-icon>
    </v-btn>
  </div>

  <!-- Desktop Header: Sticky top -->
  <v-app-bar
    v-if="!isMobile"
    data-testid="header"
    color="rgb(176, 183, 188)"
    height="80"
    app
  >
    <router-link to="/">
      <v-img
        src="../assets/wizardpng.png"
        alt="wizard"
        max-width="72"
        height="72"
        class="ml-4"
      />
    </router-link>

    <v-spacer />

    <v-toolbar-items class="desktop-nav">
      <v-btn
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        variant="text"
        class="nav-button"
      >
        {{ link.text }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="bottom"
    height="auto"
    color="rgb(176, 183, 188)"
    class="mobile-drawer"
  >
    <v-list nav density="compact">
      <v-list-item
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        @click="drawer = false"
        class="mobile-nav-item"
      >
        <v-list-item-title class="mobile-nav-text">{{ link.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
/* Mobile header positioning */
.mobile-header-container {
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 1000;
}

.mobile-nav-button {
  border: 1px black solid !important;
  border-radius: 2em !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}

/* Mobile drawer styling */
.mobile-drawer {
  border-radius: 8px 8px 0 0 !important;
  border: 1px black solid !important;
  max-height: 300px !important;
}

.mobile-nav-item {
  text-align: center;
}

.mobile-nav-text {
  color: black !important;
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
}

.mobile-nav-text:hover {
  color: rgb(0, 118, 182) !important;
}

/* Desktop navigation styling */
.nav-button {
  color: black !important;
  font-weight: bold;
  font-size: 1.2em;
  -webkit-text-stroke: 1px rgb(0, 118, 182);
}

.nav-button:hover {
  color: rgb(0, 118, 182) !important;
}

.desktop-nav {
  gap: 20px;
}
</style>
