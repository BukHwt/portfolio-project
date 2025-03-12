<script setup lang="ts">
import { ref } from "vue";
import type { ContactSubmission } from "../types/ContactSubmission";

const form = ref<ContactSubmission>({ name: "", email: "", message: "" });
const submitForm = () => {
  console.log("submit", form.value);
};
</script>

<template>
  <h1>COMING SOON!</h1>
  <v-container id="contact-form">
    <v-form @submit.prevent="submitForm" id="form">
      <v-text-field
        label="Your Name"
        v-model="form.name"
        density="compact"
        variant="solo"
        hide-details
        required
        disabled
        class="mb-4"
      ></v-text-field>
      <v-text-field
        label="Your Email"
        v-model="form.email"
        density="compact"
        variant="solo"
        hide-details
        required
        disabled
        class="mb-4"
      ></v-text-field>
      <v-textarea
        id="text-area"
        label="Your Message"
        v-model="form.message"
        density="compact"
        variant="solo"
        hide-details
        required
        disabled
        class="mb-4"
      ></v-textarea>
      <v-btn type="submit" color="primary" variant="elevated" disabled
        >Send Message</v-btn
      >
    </v-form>
  </v-container>
</template>

<style scoped>
#contact-form {
  padding: 0;
  color: black;
  background-color: rgb(0, 118, 182);
}
#form {
  gap: 1em;
}
.v-input {
  border-radius: 1em;
  background-color: white;
}
</style>
