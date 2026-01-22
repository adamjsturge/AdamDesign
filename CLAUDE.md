# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Live design finder. Quiz with different design questions. Each question should have an example in it. Once you click it, the whole site will change to reflect your "preference". All pages should be follow this rules and they should all feel apart of the changing website.

### New questions

All new questions should have an example, make sure we change all parts of the code to match, and export correctly.

## Commands

```bash
npm run dev          # Start dev server at localhost:5173
npm run build        # TypeScript check + Vite build
npm run lint         # ESLint with auto-fix
npm run lint:check   # ESLint without auto-fix
npm run format       # Prettier with auto-fix
npm run format:check # Prettier without auto-fix
```

E2E tests (requires e2e/ directory setup):

```bash
npm run test:e2e     # Run Playwright tests
npm run test:e2e:ui  # Run Playwright with UI
```

## Architecture

**Stack**: React 19 + TypeScript (strict) + Vite + Tailwind CSS v4 + wouter

**Routing**: wouter's `<Switch>`, `<Route>`, `<Link>`, `<Redirect>` in `src/App.tsx`

**Styling**: Tailwind v4 with CSS-first configuration. Brand tokens defined in `src/app.css` using `@theme` directive (e.g., `--color-brand-primary`, `--color-brand-background`). Use as `bg-brand-primary`, `text-brand-gray`, etc.

**Utility Hooks**:

- `useReactPersist(key, default)` - localStorage with expiry support (`src/utils/Storage.ts`)
- `useUrlState(key, default)` - sync state to URL query params (`src/utils/useUrlState.ts`)
- `useInternetConnected(callback, deps)` - run callback when online (`src/utils/Internet.ts`)

## Code Style

4-space indentation, double quotes, always semicolons, trailing commas (ES5). Prettier handles formatting via `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss`.

ESLint uses strict TypeScript config with jsx-a11y, react-hooks, unicorn, and de-morgan plugins. Unused vars prefixed with `_` are allowed.
