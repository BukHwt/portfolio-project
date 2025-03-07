<script setup lang="ts">
import ContactTree from "../components/ContactTree.vue";
</script>

<template>
  <div id="contact" data-testId="contact" class="container">
    <h1>Contact Me Today!</h1>
    <ContactTree />
    <div id="contact-form">
      <h1>Find a form to use here</h1>
      <h2>Also gonna need a way to send the contact info</h2>
    </div>
  </div>
</template>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  padding-top: 2em;
}
#contact-info {
  padding-top: 3em;
  height: 45vh;
}
</style>
