import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

export default defineConfig({
  output: "server",                // for Cloudflare Pages SSR
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
        "@ui": "@goldshore/ui",
        "@theme": "@goldshore/theme"
      }
    }
  }
});
