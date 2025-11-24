import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",                // for Cloudflare Pages SSR
  adapter: cloudflare(),
  srcDir: "src",
  server: {
    port: 4321
  },
  vite: {
    resolve: {
      alias: {
        "@ui": "@goldshore/ui",
        "@theme": "@goldshore/theme"
      }
    }
  }
});
