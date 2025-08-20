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
      <span class="hamburger-icon">☰</span>
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
    height="280"
    color="rgb(176, 183, 188)"
    class="mobile-drawer"
  >
    <v-list nav class="mobile-nav-list">
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

.hamburger-icon {
  font-size: 2em !important;
  color: white !important;
  line-height: 1 !important;
  font-weight: normal !important;
  text-shadow: none !important;
}

/* Mobile drawer styling */
.mobile-drawer {
  border-radius: 16px 16px 0 0 !important;
  border: 2px solid rgba(0, 0, 0, 0.3) !important;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3) !important;
  overflow: hidden !important;
}

.mobile-drawer .v-navigation-drawer__content {
  overflow: hidden !important;
  scrollbar-width: none !important; /* Firefox */
  -ms-overflow-style: none !important; /* IE/Edge */
}

.mobile-drawer .v-navigation-drawer__content::-webkit-scrollbar {
  display: none !important; /* Chrome, Safari, Opera */
}

.mobile-nav-list {
  padding: 1em 0 !important;
}

.mobile-nav-item {
  margin: 0.5em 1em !important;
  border-radius: 12px !important;
  background: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  min-height: 60px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.mobile-nav-item:hover {
  background: rgba(255, 255, 255, 0.4) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
}

.mobile-nav-text {
  color: black !important;
  font-weight: bold !important;
  font-size: 1.5em !important;
  text-align: center !important;
  text-shadow: none !important;
  line-height: 1.2 !important;
}

.mobile-nav-text:hover {
  color: rgb(0, 118, 182) !important;
}

/* Desktop navigation styling */
.nav-button {
  color: white !important;
  font-weight: bold;
  font-size: 1.2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
}

.nav-button:hover {
  color: rgb(0, 118, 182) !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9) !important;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
}

.desktop-nav {
  gap: 20px;
}
</style>
