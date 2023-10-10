import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@css': resolve(__dirname, './src/styled-system/css'),
      '@': resolve(__dirname, './src'),
    }
  }
})
