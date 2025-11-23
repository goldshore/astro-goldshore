import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  srcDir: "src",
  publicDir: "public",
  adapter: cloudflare(),
  output: "server",
});
