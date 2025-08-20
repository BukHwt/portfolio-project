// @ts-ignore
import "vuetify/styles";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#0076B6",
        },
      },
    },
  },
  defaults: {
    global: {
      ripple: false,
    },
    VCard: {
      elevation: 0,
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
