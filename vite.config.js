import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

// Obtener el nombre del archivo actual
const __filename = fileURLToPath(import.meta.url);

// Obtener el directorio del archivo actual
const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
