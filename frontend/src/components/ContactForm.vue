<script setup lang="ts">
import { ref } from "vue";
import type { ContactSubmission } from "../types/ContactSubmission";
import { submitContactForm } from "../services/contactSubmissionService";

const form = ref<ContactSubmission>({ name: "", email: "", message: "" });
const message = ref("");
const messageType = ref<"success" | "error">("success");
const showToast = ref(false);

const submitForm = async () => {
  try {
    form.value.name = form.value.name.trim();
    form.value.email = form.value.email.trim();
    form.value.message = form.value.message.trim();

    if (!form.value.name || !form.value.email || !form.value.message) {
      showToastMessage("All fields are required.", "error");
      return;
    }

    if (!validateEmail(form.value.email)) {
      showToastMessage("Please enter a valid email address.", "error");
      return;
    }

    await submitContactForm(form.value);
    showToastMessage("Message sent successfully!", "success");

    form.value = { name: "", email: "", message: "" };
  } catch (error: any) {
    console.error("Failed to submit form:", error);

    if (error.response) {
      console.log("Error response:", error.response);
      console.log("Error data:", error.response.data);
    } else {
      console.log("Error does not have a response object:", error);
    }

    const errorMessage =
      error.response?.data?.error ||
      error.message ||
      "Something went wrong. Please try again.";
    showToastMessage(errorMessage, "error");
  }
};

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const showToastMessage = (msg: string, type: "success" | "error") => {
  message.value = msg;
  messageType.value = type;
  showToast.value = true;
};
</script>

<template>
  <v-container id="contact-form">
    <v-form @submit.prevent="submitForm" id="form">
      <v-text-field
        label="Your Name"
        v-model="form.name"
        density="compact"
        variant="solo"
        hide-details
        required
        class="mb-4"
      ></v-text-field>
      <v-text-field
        label="Your Email"
        v-model="form.email"
        density="compact"
        variant="solo"
        hide-details
        required
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
        class="mb-4"
      ></v-textarea>
      <v-btn type="submit" color="primary" variant="elevated"
        >Send Message</v-btn
      >
    </v-form>
    <v-snackbar v-model="showToast" :color="messageType" timeout="3000">
      {{ message }}
    </v-snackbar>
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
