# Repository Content Audit Plan

This plan outlines how to review all repository files for inaccurate information or inaccessible content.

## 1. Preparation
- Ensure `pnpm` and project dependencies are installed so docs and apps can be built locally for validation.
- Confirm Node.js 20.x is available; if not, install or use a compatible runtime.

## 2. Automated scanning
- Run linting/formatting checks where available to surface broken imports, missing files, or unreachable assets.
- Use `pnpm lint` at the workspace root to catch Markdown, TypeScript, and ESLint issues.
- Search for broken relative links in Markdown using a link checker (e.g., `pnpm dlx markdown-link-check "**/*.md"`).
- Identify references to removed or moved packages by searching for `TODO` or `FIXME` markers and verifying the linked paths exist.

## 3. Application accessibility checks
- Build the apps to ensure assets resolve and routes compile (`pnpm build`).
- Start each app locally (`pnpm dev` or app-specific start scripts) and verify:
  - Key pages load without console errors.
  - Images, fonts, and other static assets are present.
  - External calls gracefully handle failure states (e.g., network errors) with user-visible feedback.

## 4. Content accuracy review
- For documentation and UI copy, validate that:
  - Commands match actual package scripts and configuration (e.g., compare README instructions to `package.json`).
  - API references correspond to current endpoints or component props.
  - Dates, version numbers, and feature flags reflect current behavior.
- Cross-check configuration examples against files in `infra/` and `packages/` to ensure they describe existing resources.

## 5. Dependency and config validation
- Inspect `pnpm-workspace.yaml`, `tsconfig.json`, and `apps/*/` configs for unused or missing packages.
- Confirm aliases and paths resolve by running TypeScript type checks (`pnpm test` or `pnpm check` if available).

## 6. Reporting and remediation
- Record any inaccurate or inaccessible content with file paths and specific corrections.
- Prioritize fixes by impact (broken builds and dead links first, outdated copy next).
- Open follow-up issues or PRs for each correction, keeping changes scoped per area (docs, app UI, infra config).
