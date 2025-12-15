# @goldshore/theme

This package contains the design tokens, baseline styles, and shared assets for the GoldShore UI System.

## Usage

Import the theme in your application entry point to register tokens, resets, and base typography:

```astro
import '@goldshore/theme';
```

If you only need the variables without the base typography, import the tokens file directly:

```css
import '@goldshore/theme/tokens';
```

To reuse the Penrose logo asset, import it from the assets entry:

```js
import { penroseLogo } from '@goldshore/theme/assets';
```

To coordinate runtime theme selection in your app shell, use the theme manager helpers:

```js
import {
  applyTheme,
  resolveTheme,
  loadTheme,
  saveTheme,
  readThemeFromUrl,
} from '@goldshore/theme/manager';

const stored = loadTheme();
const fromUrl = readThemeFromUrl();
const theme = resolveTheme(stored, fromUrl);

applyTheme(theme);
saveTheme(theme);
```

## Structure

- `src/styles/tokens.css`: Color, typography, spacing, and radius tokens with light/dark/slate modes.
- `src/styles/base.css`: Base typography, interactive states, and element defaults.
- `reset.css`: Minimal CSS reset that respects the tokenized fonts and colors.
- `index.css`: Main entry point that wires tokens, reset, and base styles together.
- `assets/penrose-logo.svg`: Penrose mark exported via `@goldshore/theme/assets`.
