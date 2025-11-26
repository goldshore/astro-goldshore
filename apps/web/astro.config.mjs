import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  srcDir: './src',
  output: 'server',
  adapter: cloudflare(),
  integrations: [],
  vite: {
    publicDir: './openapi',
    resolve: {
      alias: {
        '@goldshore/ui': new URL('../../packages/ui/src', import.meta.url).pathname,
        '@goldshore/theme': new URL('../../packages/theme', import.meta.url).pathname
      }
    },
    ssr: {
      noExternal: ['@goldshore/ui', '@goldshore/theme']
    }
  }
});
