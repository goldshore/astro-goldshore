import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  srcDir: "src",
  vite: {
    resolve: {
      alias: {
        "@ui": "@goldshore/ui",
        "@theme": "@goldshore/theme"
      }
    }
  }
});
