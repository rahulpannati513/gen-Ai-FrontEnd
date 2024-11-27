import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Set the default port number here
    strictPort: true, // Ensure Vite doesn't try to use another port if 5175 is in use
  },
});
