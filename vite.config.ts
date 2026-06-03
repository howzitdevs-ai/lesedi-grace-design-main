import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => ({
  server: {
    allowedHosts: true,
    host: "0.0.0.0",
  },
  plugins: [
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
    tsconfigPaths(),
    tailwindcss(),
    mode === "production" ? cloudflare() : null,
  ].filter(Boolean),
}));
