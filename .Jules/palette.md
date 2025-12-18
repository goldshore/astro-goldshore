# Palette's Journal

## 2025-12-14 - Polymorphic Button Accessibility
**Learning:** Found usage of `<a>` tags with `href="#"` for button-like actions in Admin UI, which breaks accessibility and semantics (no native `disabled` support).
**Action:** Refactored `GSButton` to be polymorphic (renders `<button>` when no `href`), enabling native `disabled` state and keyboard interaction.

## 2025-12-15 - Interactive API Console Fix
**Learning:** Found the "Try It" console in API docs was attempting to use server-side variables in client-side handlers (`onclick="send()"`), making it completely non-functional. Astro components separate server-frontmatter from client-scripts.
**Action:** Rewrote `TryItConsole.astro` using standard DOM manipulation in a `<script>` tag, enabling functional API testing. Added loading states, status badges, and response timing for a better developer experience.
