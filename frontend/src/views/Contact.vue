<script setup lang="ts">
import ContactTree from "../components/ContactTree.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <div id="contact" data-testId="contact" class="container">
    <h1>Contact Me Today!</h1>
    <ContactTree />
    <ContactForm />
  </div>
</template>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2em;
  gap: 2em;
}
#contact-info {
  padding-top: 3em;
  height: 45vh;
}
</style>
