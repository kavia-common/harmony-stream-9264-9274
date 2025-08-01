# Component and Screen Mapping for Harmony Stream React UI

This React project implements the UI exactly as extracted from Figma screens. For Figma screen-to-component mappings, see below.

**Component Mapping Guide**
- `Sidebar` (src/components/Sidebar.js): Navigation and playlists, matches Figma sidebar.
- `TopBar` (src/components/TopBar.js): Top navigation, upgrade, user/status.
- `HomePage` (src/routes/Home.js): "Browse all" and main grid for cards, based on `screen_0-3.html`, `screen_0-200.html` (Home).
- All cards, layouts, and tokens (spacing, colors) are from `assets/design-system.css`.
- Screen containers, CSS classes, background layouts, and pop color tokens match Figma design system.

**Static HTML References**
See `/public/` or `/assets/` for full HTML screen references for fidelity during rebuild.

**How to extend**
- New screens: Add to `/routes/` and reference the HTML and design system.
- Use only tokens/utility classes from design-system.css.

**DO NOT** edit HTMLs—style and structure only in React JSX files.
