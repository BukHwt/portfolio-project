export default {
  preset: "ts-jest/presets/default", // Use ts-jest preset for TypeScript
  transform: {
    "^.+\\.vue$": "vue-jest", // Handle .vue files with vue-jest
    "^.+\\.ts$": "ts-jest", // Handle .ts files with ts-jest
    "^.+\\.js$": "babel-jest", // Handle .js files with babel-jest
  },
  moduleFileExtensions: ["js", "ts", "vue"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  testMatch: [
    "**/tests/**/*.spec.[jt]s?(x)", // Matches any spec files within the tests folder or subfolders
    "**/tests/components/**/*.spec.[jt]s?(x)", // Specifically matches component test files
    "**/tests/routers/**/*.spec.[jt]s?(x)", // Specifically matches router test files
    "**/tests/views/**/*.spec.[jt]s?(x)", // Specifically matches view test files
  ],
};
