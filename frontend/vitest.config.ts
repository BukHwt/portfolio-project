import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enables global test functions like `it`
    environment: "jsdom", // Allows document-related operations
  },
});
