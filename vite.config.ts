import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // Serve from the root of the repository
    build: {
        outDir: 'dist', // Output directory for build
        lib: {
            entry: 'src/index.ts', // Entry point for your library
            formats: ['es'], // Output format
            fileName: (format) => `minesweeper.${format}.js`
        }
    }
});