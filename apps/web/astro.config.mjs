import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypePrettyCode, { theme: 'github-dark' }]
    ]
  },
  srcDir: "src",
  server: {
    port: 4321
  },
  vite: {
    resolve: {
      alias: {
        '@goldshore/ui': new URL('../../packages/ui/src', import.meta.url).pathname,
        '@goldshore/theme': new URL('../../packages/theme/src', import.meta.url).pathname
      }
    },
    ssr: {
      noExternal: ['@goldshore/ui', '@goldshore/theme']
    }
  }
});
