export type ThemeMode = 'dark' | 'light' | 'slate';
export type ThemeVariant = 'a' | 'b';
export type ThemeDensity = 'comfortable' | 'compact';

export type ThemeState = {
  mode: ThemeMode;
  variant: ThemeVariant;
  density: ThemeDensity;
  accent?: string;
};

export type PartialThemeState = Partial<ThemeState>;

const STORAGE_KEY = 'gs-theme';

const DEFAULT_THEME: ThemeState = {
  mode: 'dark',
  variant: 'a',
  density: 'comfortable',
};

function mergeTheme(base: ThemeState, overrides: PartialThemeState = {}): ThemeState {
  return {
    mode: overrides.mode ?? base.mode,
    variant: overrides.variant ?? base.variant,
    density: overrides.density ?? base.density,
    accent: overrides.accent ?? base.accent,
  };
}

export function resolveTheme(
  storedTheme: PartialThemeState = {},
  urlTheme: PartialThemeState = {}
): ThemeState {
  return mergeTheme(mergeTheme(DEFAULT_THEME, storedTheme), urlTheme);
}

export function applyTheme(theme: ThemeState, element: HTMLElement = document.documentElement): void {
  if (!element) return;

  element.dataset.theme = theme.mode;
  element.dataset.variant = theme.variant;
  element.dataset.density = theme.density;

  if (theme.accent) {
    element.style.setProperty('--gs-accent', theme.accent);
    element.style.setProperty('--gs-link', theme.accent);
    element.style.setProperty('--gs-focus-ring', `0 0 0 3px ${theme.accent}50`);
  } else {
    element.style.removeProperty('--gs-accent');
    element.style.removeProperty('--gs-link');
    element.style.removeProperty('--gs-focus-ring');
  }
}

export function loadTheme(storage: Pick<Storage, 'getItem'> = localStorage): PartialThemeState {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PartialThemeState) : {};
  } catch {
    return {};
  }
}

export function saveTheme(
  theme: PartialThemeState,
  storage: Pick<Storage, 'setItem'> = localStorage
): void {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(theme));
  } catch {
    /* ignore storage errors */
  }
}

export function readThemeFromUrl(search: string = typeof window !== 'undefined' ? window.location.search : ''): PartialThemeState {
  if (!search) return {};

  const params = new URLSearchParams(search);
  const theme = params.get('theme') as ThemeMode | null;
  const variant = params.get('variant') as ThemeVariant | null;
  const density = params.get('density') as ThemeDensity | null;
  const accent = params.get('accent');

  const next: PartialThemeState = {};

  if (theme && ['dark', 'light', 'slate'].includes(theme)) {
    next.mode = theme;
  }

  if (variant && ['a', 'b'].includes(variant)) {
    next.variant = variant;
  }

  if (density && ['comfortable', 'compact'].includes(density)) {
    next.density = density;
  }

  if (accent) {
    next.accent = accent;
  }

  return next;
}
