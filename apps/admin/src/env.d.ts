/// <reference types="astro/client" />

<<<<<<< HEAD
// Type definitions for environment variables
=======
>>>>>>> origin/main
interface ImportMetaEnv {
  readonly PUBLIC_API: string;
  readonly PUBLIC_GATEWAY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
