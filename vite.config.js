import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'WaveMonsterCollapse',
      fileName: 'wave-monster-collapse'
    },
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