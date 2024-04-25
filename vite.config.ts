import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsCheck from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
    },
    plugins: [react(), tsCheck({ typescript: true })],
});
