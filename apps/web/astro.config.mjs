import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  srcDir: './src',
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind({
    applyBaseStyles: false
  })],
  vite: {
    publicDir: './openapi',
    resolve: {
      alias: {
        '@goldshore/ui': new URL('../../packages/ui', import.meta.url).pathname,
        '@goldshore/theme': new URL('../../packages/theme', import.meta.url).pathname,
        '@packages': new URL('../../packages', import.meta.url).pathname,
        '@apps': new URL('../../apps', import.meta.url).pathname
      }
    },
    ssr: {
      noExternal: ['@goldshore/ui', '@goldshore/theme']
    }
  }
});
