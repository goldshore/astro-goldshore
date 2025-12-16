# Palette's Journal

## 2025-12-14 - Polymorphic Button Accessibility
**Learning:** Found usage of `<a>` tags with `href="#"` for button-like actions in Admin UI, which breaks accessibility and semantics (no native `disabled` support).
**Action:** Refactored `GSButton` to be polymorphic (renders `<button>` when no `href`), enabling native `disabled` state and keyboard interaction.

## 2024-05-22 - Astro Client-Side State
**Learning:** Found broken interactive components attempting to use server-side variables in client-side handlers. This breaks the "Try It" experience entirely.
**Action:** Use client-side `<script>` tags with `define:vars` for interactivity, enabling proper loading states and error handling without full framework overhead.
