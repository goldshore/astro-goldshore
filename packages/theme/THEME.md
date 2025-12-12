⭐ GOLD SHORE LABS — OFFICIAL THEME SPECIFICATION

packages/theme/THEME.md

⸻

GOLD SHORE LABS — BRAND & THEME SPECIFICATION

Version: 1.0
Applies to: Web, Admin Cockpit, Gateway Console, API UI surfaces
Source of Truth: packages/theme/tokens.css

⸻

1. Brand Identity

Gold Shore Labs blends:
	•	Hypercar cockpit UI
	•	Alcantara interior materials
	•	Anodized titanium instrumentation
	•	Neon-orange Cloudflare-grade control indicators
	•	Blueprint / CAD design language
	•	Modern aerospace + DARPA lab aesthetics

The theme must always feel like:

Koenigsegg Jesko × McLaren F1 × F-35 avionics × Cloudflare Zero-Trust UI
distilled into a business cockpit.

Everything — colors, shadows, spacing, animations — reflects precision engineering.

⸻

2. Core Theme Principles

2.1 Precision

There are no random values.
Spacing, radii, and type sizes follow strict tokenized increments.

2.2 Material Depth

Surfaces should imply:
	•	layered panels
	•	honeycomb carbon
	•	brushed titanium
	•	alcantara suede

This is achieved using:
	•	low-opacity borders
	•	soft glow shadows
	•	subtle gradients
	•	glass panels

2.3 Neon Accents

Orange and titanium-green represent “interactive” or “live” elements:
	•	toggles
	•	active buttons
	•	warnings
	•	routing indicators
	•	analytics pulses

But they must never dominate the interface.

2.4 Motion = Purpose

Animations imply machine feedback, not decoration:
	•	friction curves
	•	easing based on physics
	•	no bounce
	•	dial sweeps, HUD fades, gauge loading arcs

2.5 Dark-first, Light-as-Optic Mode

Dark mode = cockpit interior
Light mode = CAD/table/whiteboard
Same geometry, different environment.

⸻

3. Color System (Authoritative)

Defined in tokens.css.

Primary Surface Palette

Name	Purpose	Token
Alcantara Blue	Main background	--gs-blue-alcantara
Soft Alcantara	Panels, cards	--gs-blue-alcantara-soft
Carbon Black	Deep HUD areas	--gs-carbon
Blueprint Black-Blue	Admin grids, CAD overlays	--gs-blueprint

Accent Palette

Accent	Usage
Neon Orange	Button primary, toggles, routing
Titanium Green	Gauge rings, system OK
Golden Ember	Highlights, callouts

Light Variants

Automatically activated under prefers-color-scheme: light.
Do not manually override unless absolutely required.

⸻

4. Typography System

Use Case	Font
Body	Inter
Display	SF Pro Display
Technical HUD	Orbitron

Rules:
	•	Avoid bold text; prefer color to communicate hierarchy.
	•	Orbitron is only for HUD/gauge/tech surfaces.
	•	Body copy must remain highly readable, especially on dark backgrounds.

⸻

5. Spacing Scale

Name	Token	Value
XS	--gs-space-1	4px
SM	--gs-space-2	8px
MD	--gs-space-4	16px
LG	--gs-space-6	28px
XL	--gs-space-8	48px

Spacing is modular & proportional; never use arbitrary values.

⸻

6. Radii System

Level	Token	Shape
4px	--gs-radius-xs	Technical boxes
6px	--gs-radius-sm	Input fields
12px	--gs-radius-md	Cards
18px	--gs-radius-lg	Panels
28px	--gs-radius-xl	Glass containers
999px	--gs-radius-pill	Buttons, tags

Radii provide a soft-machined finish — rounded enough to feel tactile, crisp enough to feel engineered.

⸻

7. Component Design Rules

7.1 Buttons
	•	Primary = neon orange
	•	Secondary = alcantara navy or carbon
	•	No outlines unless paired with glow

7.2 Glass Panels

Used for HUD-style surfaces.

Properties:
	•	blurred background
	•	single-pixel border
	•	radiant glow highlight

7.3 Gauges & Dials

Gold Shore Labs signature component.

Rules:
	•	Background: 4% white
	•	Arc: Titanium green
	•	Secondary arc: Golden ember
	•	Glow: Blue accent

7.4 Cards
	•	Matte alcantara surface
	•	Subtle border
	•	One shadow (never two)

7.5 Interactive Tiles / App Launchers
	•	Blueprint grid background
	•	Thick neon hover line
	•	Slight HUD fade on focus

⸻

8. Motion Design

DO:
	•	Ease: var(--gs-transition-normal)
	•	Gradient sweeps
	•	Gauge rotations
	•	Glow pulsing indicating system status

DO NOT:
	•	Bounce
	•	Pop
	•	Rubber-band effects
	•	Anything “cartoony”

⸻

9. When Designing: Order of Operations

Agents and developers must follow this flow:
	1.	Check THEME.md
	2.	Check tokens.css
	3.	Check packages/ui
	4.	Use only brand-approved values and tokens
	5.	Render layout using grid → components → tokens
	6.	Verify adaptive mode (dark/light)
	7.	Check responsiveness at 3 breakpoints
	8.	Check component constraints in THEME.md

This ensures no divergence.

⸻

10. Do Not Deviate Without a Version Bump

If at any point a change is needed:
	•	bump version to 1.1
	•	update THEME.md first
	•	update tokens.css second
	•	update UI components third
	•	notify via AGENT_GLOBAL_RULES.md

This is to protect:
	•	consistency
	•	future redesigns
	•	AI agent coordination
	•	style identity of Gold Shore Labs

⸻

11. What AI Agents Must Understand

Every AI agent (web, admin, api-ui) must:
	•	treat THEME.md + tokens.css as immutable truth
	•	NEVER generate colors not in tokens.css
	•	NEVER generate spacings/radii not in tokens.css
	•	ALWAYS import tokens.css
	•	ALWAYS use components from packages/ui when applicable

This prevents drift.

⸻

12. Exported Design Objects

AI agents refer to these by name:

Brand Surface Palette
Brand Neon Accents
Glass Panel Layer
HUD/Gauge Layer
Blueprint CAD Layer
Carbon Matte Layer
Hypercar Cockpit Layer
Alcantara Material Layer

These map to tokens.

⸻

13. Theme Inspiration Images (You Provided)

The design is explicitly influenced by your earlier uploads:
	•	Your preferred dashboards (cockpit & premium automotive layouts)
	•	Your blueprint-style hero images
	•	Your carbon fiber textures
	•	Your McLaren F1 aesthetic note
	•	Your neon-orange controls requests
	•	Your Apple iOS-style precision spacing
	•	Your matte-alcantara emphasis

This theme document encodes them permanently.

⸻

🎉 THEME.md Delivered & Ready

This is now:

✔ the official design contract
✔ the rulebook for all current & future AI agents
✔ the source of truth for Gold Shore Labs UI
✔ fully aligned with your tokens file

⸻

If you want next, I can generate:

A. Full UI components documentation (COMPONENTS.md)

B. Example layouts (Admin Dashboard, Web Homepage)

C. GoldShore System UI Kit (Astro + React)

D. Full CSS + markup for Shaping Waves hero

Which one do you want next?
