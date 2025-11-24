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

## Workers Integration Rules

When the user asks for changes to:

- `gs-api` → edit only `apps/api-worker/**`
- `gs-gateway` → edit only `apps/gateway/**`
- `gs-control` → edit only `apps/control-worker/**`

Do NOT:
- Modify `apps/web` or `apps/admin` when working on Workers.
- Create new Workers or Pages projects unless explicitly asked.
- Add `wrangler.toml` at repo root.
- Change build commands for existing Cloudflare Pages projects.

Deploy rules:
- For `gs-api`, run from repo root: `cd apps/api-worker && pnpm deploy`
- For `gs-gateway`, run: `cd apps/gateway && pnpm deploy`
- For `gs-control`, run: `cd apps/control-worker && pnpm deploy`

Config rules:
- Keep `wrangler.toml` inside each worker folder only.
- Use `name` = `gs-api`, `gs-gateway`, `gs-control` to match existing Cloudflare services.
- Bindings: `KV`, `DB`, `ASSETS`, `CONTROL_LOGS`, `STATE`, `API`, `GATEWAY`, `AI` must be defined in `wrangler.toml` before use.