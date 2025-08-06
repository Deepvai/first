import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:"/first/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // ✅ your file
  },
});
