import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es6',
    manifest: true
  },
  server: { port: 8081, strictPort: true },
  plugins: [svelte()],
  assetsInclude: ['**/*.xml']
})