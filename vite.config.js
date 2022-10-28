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
  base: process.env.NODE_ENV == 'production' ? `https://app.pierrelespingal.com/wave-monster-collapse/v${process.env.npm_package_version}/` : 'http://localhost:8081/',
  server: { port: 8081, strictPort: true },
  plugins: [svelte()],
  assetsInclude: ['**/*.xml']
})