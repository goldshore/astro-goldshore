import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  srcDir: './src',
  integrations: [],
  vite: {
    resolve: {
      alias: {
        '@apps': new URL('../../apps', import.meta.url).pathname,
        '@packages': new URL('../../packages', import.meta.url).pathname
      }
    },
    ssr: {
      // ensure monorepo packages are bundled
      noExternal: ['@goldshore/ui', '@goldshore/theme']
    }
  }
});
