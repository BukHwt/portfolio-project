<script setup lang="ts">
import ContactTree from "../components/ContactTree.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <div id="contact" data-testId="contact" class="container">
    <div>
      <h1>Contact Me Today!</h1>
      <h3>
        If you're looking to add to your team or want to chat programming, just
        get in touch!
      </h3>
      <p>
        Feel free to reach out to me or send me a message and I'll get back to
        you!
      </p>
    </div>
    <div>
      <ContactTree />
      <ContactForm />
    </div>
  </div>
</template>

<style scoped>
#contact {
  padding: 1em 2em;
}
</style>
