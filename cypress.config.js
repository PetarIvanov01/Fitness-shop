import { defineConfig } from 'cypress';

export default defineConfig({
    port: 5172,
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        viewportHeight: 1100,
        viewportWidth: 910,
    },

    e2e: {
        baseUrl: 'http://localhost:5173/',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    viewportHeight: 1150,
    viewportWidth: 1100,
});
