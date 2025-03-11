<script setup lang="ts">
import { ref } from "vue";

const form = ref({ name: "", email: "", message: "" });
const submitForm = () => {
  console.log("submit", form.value);
};
</script>

<template>
  <v-container id="contact-form">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        label="Your Name"
        v-model="form.name"
        required
      ></v-text-field>
      <v-text-field
        label="Your Email"
        v-model="form.email"
        required
      ></v-text-field>
      <v-textarea
        label="Your Message"
        v-model="form.message"
        required
      ></v-textarea>
      <v-btn type="submit" color="primary">Send Message</v-btn>
    </v-form>
  </v-container>
</template>

<style scoped>
#contact-form {
  max-width: 30em;
  /* margin: auto; */
  padding: 0;
}
</style>
