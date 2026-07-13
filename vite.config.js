import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 4173,
    allowedHosts: [
      "next-gen-pharma-alb-189538282.ap-south-1.elb.amazonaws.com",
    ],
  },
});