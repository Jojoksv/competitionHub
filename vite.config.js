import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 5174,
    proxy: import.meta.env.VITE_REACT_APP_ENV === "DEV" 
      ? {
          "/api": {
            target: "http://localhost:8000",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, "/"),
          },
        }
      : undefined,
  },
})
