import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  srcDir: './src',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: "../../tailwind.config.mjs"
    })
  ],
});
