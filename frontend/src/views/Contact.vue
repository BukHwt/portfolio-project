<script setup lang="ts">
import ContactTree from "../components/ContactTree.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <div id="contact" data-testId="contact" class="container">
    <div class="mb-4">
      <h1 class="mb-4">Contact Me Today!</h1>
      <h3 class="mb-4">
        If you're looking to add to your team or want to chat programming, just
        get in touch!
      </h3>
      <p>
        Feel free to reach out to me or send me a message and I'll get back to
        you!
      </p>
    </div>
    <div id="contact-content">
      <ContactTree />
      <ContactForm />
    </div>
  </div>
</template>

<style scoped>
#contact {
  padding: 1em 2em;
}
@media (min-width: 768px) {
  #contact {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
  }
  #contact-content {
    padding-top: 5em;
    display: flex;
    gap: 2em;
    width: 75vw;
    align-items: center;
  }
}
</style>
