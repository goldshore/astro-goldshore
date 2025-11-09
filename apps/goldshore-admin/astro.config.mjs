// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            // Include shared packages in the SSR build
            noExternal: ['@goldshore/auth', '@goldshore/ui', '@goldshore/utils'],
        },
    },
});
