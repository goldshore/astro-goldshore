/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API: string;
  readonly PUBLIC_GATEWAY: string;
  readonly PUBLIC_APP_ENV: "production" | "preview" | "development";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
