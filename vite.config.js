import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://nevin.github.io/powerbi-portfolio/",
  plugins: [react()],
})
