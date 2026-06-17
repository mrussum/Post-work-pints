import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages at https://<user>.github.io/Post-work-pints/
// set base to "/Post-work-pints/". For local dev / Netlify / Vercel, "/" is fine.
export default defineConfig({
  base: process.env.GH_PAGES ? "/Post-work-pints/" : "/",
  plugins: [react()],
});
