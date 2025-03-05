import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_URL': JSON.stringify(env.REACT_APP_URL)
    },
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.REACT_APP_URL,
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
})