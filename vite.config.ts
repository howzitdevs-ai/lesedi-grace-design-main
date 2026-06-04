import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  server: {
    allowedHosts: true,
    host: "0.0.0.0",
  },
  plugins: [
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
    mode === "production" ? cloudflare() : null,
  ].filter(Boolean),
}));
