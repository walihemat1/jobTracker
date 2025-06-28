import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // 👈 this is key
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
