import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es6',
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (assetInfos) => assetInfos?.name == "index.css" ? "main.css" : "assets/[name].[hash][extname]"
      }
    }
  },
  server: { origin: 'http://localhost:8081', port: 8081, strictPort: true },
  plugins: [svelte()],
  assetsInclude: ['**/*.xml']
})