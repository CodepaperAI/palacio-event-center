import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-router")) {
              return "vendor-react";
            }
            if (id.includes("@radix-ui") || id.includes("framer-motion") || id.includes("lucide-react")) {
              return "vendor-ui";
            }
            if (id.includes("@tanstack")) {
              return "vendor-query";
            }
          }
        },
      },
    },
  },
}));
