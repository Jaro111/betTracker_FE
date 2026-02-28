import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Expose to external connections
    port: 8080, // Zmiana portu na 3000, jeśli masz konflikt z innymi aplikacjami
  },
  preview: {
    port: 4173, // Możesz ustawić inny port dla wersji produkcyjnej, jeśli jest konflikt
  },
});
