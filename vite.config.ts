import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // must match repo name exactly (repo name is capitalized)
  build: {
    outDir: 'dist',
  },
})
