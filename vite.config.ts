import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Al usar dominio personalizado (misscenteno.study), la base pasa a ser la raíz '/'
  // en lugar del nombre del repositorio.
  base: '/', 
})
