# GoldShore Monorepo Instructions

## Environment Variables
The following environment variables must be set in Cloudflare Pages settings for the respective projects.

### gs-web (apps/web)
- `PUBLIC_GATEWAY`: `https://gw.goldshore.ai`
- `PUBLIC_API`: `https://api.goldshore.ai`

### gs-admin (apps/admin)
- `PUBLIC_API`: `https://api.goldshore.ai`
- `INTERNAL_API`: `https://control.goldshore.ai`

## Directory Structure
The monorepo is organized as follows:
- `apps/web`: Public marketing and documentation site (Astro).
- `apps/admin`: Protected admin dashboard (Astro).
- `apps/api-worker`: Core API logic (Cloudflare Worker).
- `apps/gateway`: Request routing and auth (Cloudflare Worker).
- `apps/control-worker`: Internal maintenance (Cloudflare Worker).
- `packages/ui`: Shared UI components.
- `packages/theme`: Shared design tokens and styles.

## Development
- Run `pnpm install` to setup dependencies.
- Use `pnpm dev` in app directories to start local servers.
