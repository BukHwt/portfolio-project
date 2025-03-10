<script setup lang="ts">
const contactMethods = [
  {
    name: "Phone - (269) 208-9592",
    href: "tel:+12692089592", // Your actual phone number
    icon: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
  },
  {
    name: "Email - swanderson79@gmail.com",
    href: "mailto:swanderson79@gmail.com", // Your actual email
    icon: "M3 4.5A2.5 2.5 0 0 1 5.5 2h13A2.5 2.5 0 0 1 21 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-15Zm2.35-.5a.5.5 0 0 0-.5.5v.307l7.1 5.135a.5.5 0 0 0 .6 0l7.1-5.135V4.5a.5.5 0 0 0-.5-.5h-13Zm13.15 16a.5.5 0 0 0 .5-.5v-11.47l-6.45 4.67a2.5 2.5 0 0 1-2.9 0L5 8.53V19.5a.5.5 0 0 0 .5.5h13Z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/stephen-anderson-steve-anderson/", // Replace with your LinkedIn URL
    icon: "M4 3C2.9 3 2 3.9 2 5v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4zm3.5 4.5c.8 0 1.5.7 1.5 1.5S8.3 10.5 7.5 10.5 6 9.8 6 9s.7-1.5 1.5-1.5zM6 11h3v7H6v-7zm5 0h3v1.3c.7-.9 1.8-1.3 2.9-1.3 2 0 3.1 1.4 3.1 4.1V18h-3v-3.7c0-1.2-.4-1.9-1.3-1.9-.9 0-1.7.6-1.7 1.9V18h-3v-7z",
  },
  {
    name: "GitHub",
    href: "https://github.com/BukHwt", // Replace with your GitHub URL
    icon: "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z",
  },
];
</script>

<template>
  <div id="contact-info">
    <h3>Contact Info</h3>
    <h2>Feel free to reach out!</h2>
    <p>I'd love to chat about opportunities or coding! Let's connect!</p>

    <div id="contact-tree">
      <a
        v-for="contact in contactMethods"
        :key="contact.name"
        :href="contact.href"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon"
        >
          <path :d="contact.icon" />
        </svg>
        <p>{{ contact.name }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
#contact-tree {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
a {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
}
svg {
  height: 1.5em;
  padding: 0 1em;
}
</style>
