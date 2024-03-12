import { defineConfig } from "cypress";

export default defineConfig({
  port: 5173,

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    viewportHeight: 1100,
    viewportWidth: 910,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
