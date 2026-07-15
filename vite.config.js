import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  preview: {
    host: true,
    port: 4173,
    allowedHosts: [
      "next-gen-pharma-alb-189538282.ap-south-1.elb.amazonaws.com",
    ],
  },
});