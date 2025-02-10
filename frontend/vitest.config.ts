import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true, // Enables global test functions like `it`
    environment: "jsdom", // Allows document-related operations
  },
});
