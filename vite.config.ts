import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
/// <reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    testMatch: ["./**/*.test.tsx", "./**/*.test.ts"],
  },
});
