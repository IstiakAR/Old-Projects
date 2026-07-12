import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  appType: "mpa",
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calculator: resolve(__dirname, "Calculator/index.html"),
        cv: resolve(__dirname, "CV-Application/index.html"),
        etch: resolve(__dirname, "Etch-a-sketch/index.html"),
        library: resolve(__dirname, "Library/index.html"),
        memory: resolve(__dirname, "Memory-Card/index.html"),
        restaurant: resolve(__dirname, "Restaurant/index.html"),
        rps: resolve(__dirname, "Rock-Paper-Scissor/index.html"),
        rpsPvb: resolve(__dirname, "Rock-Paper-Scissor/pvb.html"),
        rpsPvp: resolve(__dirname, "Rock-Paper-Scissor/pvp.html"),
        ttt: resolve(__dirname, "Tic-Tac-Toe/index.html"),
        todo: resolve(__dirname, "ToDo/index.html"),
        weather: resolve(__dirname, "Weather/index.html"),
      },
    },
  },
});
