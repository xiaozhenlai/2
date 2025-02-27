import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
// define: {
//     // 将import.meta.env.VITE_BOOK_APPOINTMENT替换为实际的值
//     'import.meta.env.VITE_BOOK_APPOINTMENT': 'http://localhost:4000'
//   },
  server: {
    port: 3000,
    proxy: {
      '/ai': {
        target: 'http://localhost:6000',
        changeOrigin: true,
      },
      '/api/user': {
        target: 'http://localhost:6000',
        changeOrigin: true,
      },
      '/api/doctor': {
        target: 'http://localhost:6000',
        changeOrigin: true,
      },
      '/uploads':{
        target: 'http://localhost:6000',
        changeOrigin: true,
      },
      '/api/predict':{
        target: 'http://localhost:2000',
        changeOrigin: true,
      }
    },
  },
});
