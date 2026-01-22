# Adam's Design & Brand Guide

## Tech Stack

| Category        | Choice                             |
| --------------- | ---------------------------------- |
| Framework       | React + TypeScript (strict mode)   |
| Styling         | Tailwind CSS v4                    |
| Build           | Vite                               |
| Routing         | wouter                             |
| State (simple)  | React hooks (useState, useContext) |
| State (complex) | Jotai atoms                        |
| Icons           | react-icons library                |

---

## Design

### Core Principles

- **Minimal, functional design** - every element earns its place
- **No shadows** - rely on background contrast for depth
- **Sharp corners** - minimal to no border radius (`rounded-none` or `rounded-sm` max)
- **Avoid modals** - they often indicate design problems; when necessary, center on desktop, fullscreen on mobile
- **High contrast dark themes** - light text on dark backgrounds
- **Mobile-first, responsive** - works on all screen sizes
- **Tight spacing** - information dense layouts (`gap-2`, `p-3`)
- **Left-aligned text** - always

### Visual Rules

| Rule    | Guideline                                                       |
| ------- | --------------------------------------------------------------- |
| Shadows | Never. Use background contrast for hierarchy                    |
| Corners | `rounded-none` or `rounded-sm` max                              |
| Borders | Avoid unless necessary. Use background color differences        |
| Spacing | Tight - `gap-2`, `p-3` baseline                                 |
| Layout  | Wide containers (`max-w-7xl`), responsive padding, mobile-first |

### Typography

- **Font**: System fonts (`-apple-system, BlinkMacSystemFont, ...`)
- **Alignment**: Left-aligned always
- **Hierarchy**: Subtle size differences between levels
- **Emphasis**: Use font weight (semibold, bold) over size

### Interactive States

| State    | Treatment                                                         |
| -------- | ----------------------------------------------------------------- |
| Hover    | Subtle color change only, `cursor-pointer`, no scale/grow effects |
| Disabled | Grayed out colors (not opacity), `cursor-not-allowed`             |
| Focus    | Visible focus rings, high contrast outline (required)             |

### Components

| Component    | Guidelines                                                            |
| ------------ | --------------------------------------------------------------------- |
| Buttons      | Filled primary style, solid background, no shadows, minimal/no radius |
| Inputs       | Filled background, minimal/no border, clear focus state               |
| Loading      | Skeleton placeholders (pulsing shapes)                                |
| Empty States | Minimal - simple text or nothing                                      |
| Navigation   | Desktop: top navbar. Mobile: hamburger with collapsible drawer        |
| Modals       | Avoid. When unavoidable: center on desktop, fullscreen on mobile      |

### Feedback

| Type            | Pattern                      |
| --------------- | ---------------------------- |
| Success         | Toast notification, green    |
| Error (field)   | Inline text below input, red |
| Error (general) | Toast notification, red      |
| Warning         | Yellow/orange                |

### Theme Tokens

Each project defines these CSS custom properties:

```css
--color-brand-primary
--color-brand-background
--color-brand-surface
--color-brand-text
--color-brand-text-secondary
--color-brand-accent
--color-brand-error
--color-brand-success
--color-brand-warning
```

Dark themes: high contrast, visual hierarchy through background differences (not shadows).

### Animation

- **Duration**: 150ms (subtle and snappy)
- **Easing**: ease-in-out
- No bouncy or playful animations

### Accessibility

- Semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- ARIA labels on all interactive elements
- Full keyboard navigation
- Visible focus states
- Color contrast meeting WCAG AA
- Screen reader friendly structure

---

## Code

### Style

- **Indentation**: 4 spaces
- **Semicolons**: Always
- **Quotes**: Double quotes
- **Trailing commas**: ES5 style
- **Line width**: 80 characters
- **Formatting**: Prettier + prettier-plugin-tailwindcss

### Naming Conventions

| Type             | Convention        | Example                 |
| ---------------- | ----------------- | ----------------------- |
| Components       | PascalCase        | `CardImage.tsx`         |
| Functions        | camelCase         | `handleClick()`         |
| Variables        | camelCase         | `inputValue`            |
| Booleans         | is/has prefix     | `isLoading`, `hasError` |
| Types/Interfaces | PascalCase        | `CardImageProps`        |
| Files            | Match export name | `SearchBar.tsx`         |

### File Structure

```
src/
├── pages/          # Route pages
├── components/     # Reusable components
├── utils/          # Helper functions
├── types/          # TypeScript types
├── contexts/       # React contexts (if needed)
├── atoms/          # Jotai atoms (if complex state)
├── App.tsx
├── main.tsx
└── app.css
```
