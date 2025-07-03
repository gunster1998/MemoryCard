import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@app": resolve(__dirname, "src/App"),
      "@assets": resolve(__dirname, "src/assets"),
      "@entities": resolve(__dirname, "src/entities"),
      "@features": resolve(__dirname, "src/features"),
      "@widgets": resolve(__dirname, "src/widgets"),
    },
  },
  build: {
    outDir: "dist", // ← всё попадёт в ./dist вместо src/
    emptyOutDir: true, // ← очищает папку dist перед сборкой
    sourcemap: false,
  },
});
