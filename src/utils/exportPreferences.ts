/**
 * Export utilities for design preferences
 * Generates AI-friendly documentation with Tailwind classes and clear descriptions
 */

// ============================================================================
// Color Scheme
// ============================================================================

export const colorSchemes = {
  dark: {
    name: "Dark",
    description: "High contrast dark theme with light text on dark backgrounds",
    background: "#0f172a",
    surface: "#1e293b",
    text: "#f8fafc",
    textSecondary: "#94a3b8",
    tailwind: {
      background: "bg-slate-900",
      surface: "bg-slate-800",
      text: "text-slate-50",
      textSecondary: "text-slate-400",
    },
  },
  light: {
    name: "Light",
    description: "Clean light theme with dark text on white backgrounds",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#0f172a",
    textSecondary: "#64748b",
    tailwind: {
      background: "bg-white",
      surface: "bg-slate-50",
      text: "text-slate-900",
      textSecondary: "text-slate-500",
    },
  },
  dimmed: {
    name: "Dimmed",
    description: "Softer dark theme, easier on the eyes for extended use",
    background: "#1e293b",
    surface: "#334155",
    text: "#cbd5e1",
    textSecondary: "#94a3b8",
    tailwind: {
      background: "bg-slate-800",
      surface: "bg-slate-700",
      text: "text-slate-300",
      textSecondary: "text-slate-400",
    },
  },
} as const;

// ============================================================================
// Accent Colors
// ============================================================================

export const accentColors = {
  blue: {
    name: "Blue",
    hex: "#3b82f6",
    tailwind: "blue-500",
    usage: "Primary buttons, links, active states, focus rings",
  },
  purple: {
    name: "Purple",
    hex: "#8b5cf6",
    tailwind: "violet-500",
    usage: "Primary buttons, links, active states, focus rings",
  },
  green: {
    name: "Green",
    hex: "#22c55e",
    tailwind: "green-500",
    usage: "Primary buttons, links, active states, focus rings",
  },
  orange: {
    name: "Orange",
    hex: "#f97316",
    tailwind: "orange-500",
    usage: "Primary buttons, links, active states, focus rings",
  },
  red: {
    name: "Red",
    hex: "#ef4444",
    tailwind: "red-500",
    usage: "Primary buttons, links, active states, focus rings",
  },
} as const;

// ============================================================================
// Typography
// ============================================================================

export const fontFamilies = {
  system: {
    name: "System",
    description:
      "Native system fonts for fastest loading and platform consistency",
    family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    tailwind: "font-sans",
    import: null,
  },
  inter: {
    name: "Inter",
    description: "Modern, highly legible sans-serif optimized for screens",
    family: "'Inter', sans-serif",
    tailwind: "font-['Inter']",
    import:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
  opensans: {
    name: "Open Sans",
    description: "Friendly and readable, works well for body text",
    family: "'Open Sans', sans-serif",
    tailwind: "font-['Open_Sans']",
    import:
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap",
  },
  roboto: {
    name: "Roboto",
    description: "Google's signature font, clean and mechanical",
    family: "'Roboto', sans-serif",
    tailwind: "font-['Roboto']",
    import:
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  },
  lato: {
    name: "Lato",
    description: "Warm and professional, subtle rounded details",
    family: "'Lato', sans-serif",
    tailwind: "font-['Lato']",
    import:
      "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
  },
  opendyslexic: {
    name: "OpenDyslexic",
    description:
      "Accessibility-focused font designed for readers with dyslexia",
    family: "'OpenDyslexic', sans-serif",
    tailwind: "font-['OpenDyslexic']",
    import: "https://fonts.cdnfonts.com/css/opendyslexic",
  },
} as const;

export const typographyScales = {
  tight: {
    name: "Tight",
    description:
      "Minimal size differences between heading levels, information-dense",
    sizes: { h1: "text-xl", h2: "text-lg", h3: "text-base", body: "text-sm" },
  },
  moderate: {
    name: "Moderate",
    description: "Balanced hierarchy, good for most applications",
    sizes: { h1: "text-2xl", h2: "text-xl", h3: "text-lg", body: "text-base" },
  },
  expressive: {
    name: "Expressive",
    description: "Strong visual hierarchy, larger headings for impact",
    sizes: { h1: "text-3xl", h2: "text-2xl", h3: "text-xl", body: "text-base" },
  },
} as const;

// ============================================================================
// Spacing
// ============================================================================

export const spacingDensities = {
  compact: {
    name: "Compact",
    description: "Tight spacing for information-dense interfaces",
    gap: "0.5rem",
    padding: "0.75rem",
    tailwind: { gap: "gap-2", padding: "p-3", paddingLg: "p-4" },
  },
  comfortable: {
    name: "Comfortable",
    description: "Balanced spacing for general-purpose interfaces",
    gap: "0.75rem",
    padding: "1rem",
    tailwind: { gap: "gap-3", padding: "p-4", paddingLg: "p-6" },
  },
  spacious: {
    name: "Spacious",
    description: "Generous spacing for relaxed, editorial layouts",
    gap: "1rem",
    padding: "1.5rem",
    tailwind: { gap: "gap-4", padding: "p-6", paddingLg: "p-8" },
  },
} as const;

// ============================================================================
// Border Radius
// ============================================================================

export const borderRadii = {
  none: {
    name: "None",
    description: "Sharp, angular corners for a technical/brutalist aesthetic",
    value: "0px",
    tailwind: "rounded-none",
  },
  sm: {
    name: "Small",
    description: "Subtle rounding, still maintains sharp feel",
    value: "0.125rem",
    tailwind: "rounded-sm",
  },
  md: {
    name: "Medium",
    description: "Moderate rounding, balanced and approachable",
    value: "0.375rem",
    tailwind: "rounded-md",
  },
  lg: {
    name: "Large",
    description: "Soft, friendly corners",
    value: "0.5rem",
    tailwind: "rounded-lg",
  },
  full: {
    name: "Full",
    description: "Pill-shaped elements, very soft and playful",
    value: "9999px",
    tailwind: "rounded-full",
  },
} as const;

// ============================================================================
// Shadows
// ============================================================================

export const shadowStyles = {
  none: {
    name: "None",
    description:
      "No shadows - use background color contrast for visual hierarchy",
    value: "none",
    tailwind: "shadow-none",
  },
  subtle: {
    name: "Subtle",
    description: "Light shadows for minimal depth indication",
    value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    tailwind: "shadow-sm",
  },
  moderate: {
    name: "Moderate",
    description: "Medium shadows for clear elevation",
    value: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    tailwind: "shadow-md",
  },
  strong: {
    name: "Strong",
    description: "Prominent shadows for high elevation and focus",
    value: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    tailwind: "shadow-lg",
  },
} as const;

// ============================================================================
// Animation
// ============================================================================

export const animationStyles = {
  none: {
    name: "None",
    description: "No animations - instant state changes",
    duration: "0ms",
    tailwind: "duration-0",
  },
  minimal: {
    name: "Minimal",
    description:
      "Quick, subtle transitions (recommended for productivity apps)",
    duration: "100ms",
    tailwind: "duration-100",
  },
  smooth: {
    name: "Smooth",
    description: "Balanced transitions, noticeable but not slow",
    duration: "200ms",
    tailwind: "duration-200",
  },
  expressive: {
    name: "Expressive",
    description: "Longer transitions for a polished, premium feel",
    duration: "300ms",
    tailwind: "duration-300",
  },
} as const;

// ============================================================================
// Component Styles
// ============================================================================

export const buttonStyles = {
  filled: {
    name: "Filled",
    description: "Solid background color, high visual weight",
    tailwind: "bg-{accent} text-white hover:bg-{accent}/90",
  },
  outline: {
    name: "Outline",
    description: "Transparent with border, lower visual weight",
    tailwind: "border border-{accent} text-{accent} hover:bg-{accent}/10",
  },
  ghost: {
    name: "Ghost",
    description: "No background or border, minimal visual presence",
    tailwind: "text-{accent} hover:bg-{accent}/10",
  },
} as const;

export const inputStyles = {
  filled: {
    name: "Filled",
    description: "Solid background, no border (cleaner look)",
    tailwind: "bg-{surface} focus:ring-2 focus:ring-{accent}",
  },
  outline: {
    name: "Outline",
    description: "Transparent with border (traditional form style)",
    tailwind: "border border-{border} focus:border-{accent} focus:ring-1",
  },
  underline: {
    name: "Underline",
    description: "Bottom border only (minimal, material-style)",
    tailwind: "border-b border-{border} focus:border-{accent}",
  },
} as const;

// ============================================================================
// Container Widths
// ============================================================================

export const containerWidths = {
  narrow: {
    name: "Narrow",
    description: "Focused content area, good for reading (max-w-3xl = 48rem)",
    value: "48rem",
    tailwind: "max-w-3xl",
  },
  medium: {
    name: "Medium",
    description: "Balanced width for mixed content (max-w-5xl = 64rem)",
    value: "64rem",
    tailwind: "max-w-5xl",
  },
  wide: {
    name: "Wide",
    description: "Spacious layout for complex interfaces (max-w-7xl = 80rem)",
    value: "80rem",
    tailwind: "max-w-7xl",
  },
} as const;

// ============================================================================
// Markdown Generator
// ============================================================================

export function generateMarkdown(preferences: Record<string, string>): string {
  const colorScheme =
    colorSchemes[preferences.colorScheme as keyof typeof colorSchemes] ??
    colorSchemes.dark;
  const accent =
    accentColors[preferences.accentColor as keyof typeof accentColors] ??
    accentColors.blue;
  const font =
    fontFamilies[preferences.fontFamily as keyof typeof fontFamilies] ??
    fontFamilies.system;
  const typography =
    typographyScales[
      preferences.typographyScale as keyof typeof typographyScales
    ] ?? typographyScales.tight;
  const spacing =
    spacingDensities[
      preferences.spacingDensity as keyof typeof spacingDensities
    ] ?? spacingDensities.compact;
  const radius =
    borderRadii[preferences.borderRadius as keyof typeof borderRadii] ??
    borderRadii.sm;
  const shadow =
    shadowStyles[preferences.shadowStyle as keyof typeof shadowStyles] ??
    shadowStyles.none;
  const animation =
    animationStyles[
      preferences.animationStyle as keyof typeof animationStyles
    ] ?? animationStyles.minimal;
  const button =
    buttonStyles[preferences.buttonStyle as keyof typeof buttonStyles] ??
    buttonStyles.filled;
  const input =
    inputStyles[preferences.inputStyle as keyof typeof inputStyles] ??
    inputStyles.filled;
  const container =
    containerWidths[
      preferences.containerWidth as keyof typeof containerWidths
    ] ?? containerWidths.wide;

  const sections = [
    `# Design System Specification`,
    ``,
    `> Generated by Design Preference Discovery Tool`,
    `> Date: ${new Date().toLocaleDateString()}`,
    ``,
    `---`,
    ``,
    `## Quick Reference`,
    ``,
    `| Category | Choice | Tailwind |`,
    `|----------|--------|----------|`,
    `| Theme | ${colorScheme.name} | ${colorScheme.tailwind.background} |`,
    `| Accent | ${accent.name} | ${accent.tailwind} |`,
    `| Font | ${font.name} | ${font.tailwind} |`,
    `| Spacing | ${spacing.name} | ${spacing.tailwind.gap}, ${spacing.tailwind.padding} |`,
    `| Corners | ${radius.name} | ${radius.tailwind} |`,
    `| Shadows | ${shadow.name} | ${shadow.tailwind} |`,
    `| Animation | ${animation.name} | ${animation.tailwind} |`,
    `| Container | ${container.name} | ${container.tailwind} |`,
    ``,
    `---`,
    ``,
    `## Color Scheme: ${colorScheme.name}`,
    ``,
    `${colorScheme.description}`,
    ``,
    `| Role | Hex | Tailwind Class |`,
    `|------|-----|----------------|`,
    `| Background | \`${colorScheme.background}\` | \`${colorScheme.tailwind.background}\` |`,
    `| Surface | \`${colorScheme.surface}\` | \`${colorScheme.tailwind.surface}\` |`,
    `| Text | \`${colorScheme.text}\` | \`${colorScheme.tailwind.text}\` |`,
    `| Text Secondary | \`${colorScheme.textSecondary}\` | \`${colorScheme.tailwind.textSecondary}\` |`,
    ``,
    `### Accent Color: ${accent.name}`,
    ``,
    `- **Hex**: \`${accent.hex}\``,
    `- **Tailwind**: \`bg-${accent.tailwind}\`, \`text-${accent.tailwind}\`, \`border-${accent.tailwind}\``,
    `- **Usage**: ${accent.usage}`,
    ``,
    `---`,
    ``,
    `## Typography`,
    ``,
    `### Font: ${font.name}`,
    ``,
    `${font.description}`,
    ``,
    `- **CSS**: \`font-family: ${font.family};\``,
    `- **Tailwind**: \`${font.tailwind}\``,
    font.import
      ? `- **Import**: \`<link href="${font.import}" rel="stylesheet">\``
      : `- **Import**: None required (system fonts)`,
    ``,
    `### Scale: ${typography.name}`,
    ``,
    `${typography.description}`,
    ``,
    `| Element | Tailwind Class |`,
    `|---------|----------------|`,
    `| H1 | \`${typography.sizes.h1}\` |`,
    `| H2 | \`${typography.sizes.h2}\` |`,
    `| H3 | \`${typography.sizes.h3}\` |`,
    `| Body | \`${typography.sizes.body}\` |`,
    ``,
    `---`,
    ``,
    `## Spacing: ${spacing.name}`,
    ``,
    `${spacing.description}`,
    ``,
    `| Property | Value | Tailwind |`,
    `|----------|-------|----------|`,
    `| Gap | \`${spacing.gap}\` | \`${spacing.tailwind.gap}\` |`,
    `| Padding | \`${spacing.padding}\` | \`${spacing.tailwind.padding}\` |`,
    `| Padding (large) | - | \`${spacing.tailwind.paddingLg}\` |`,
    ``,
    `---`,
    ``,
    `## Visual Style`,
    ``,
    `### Border Radius: ${radius.name}`,
    ``,
    `${radius.description}`,
    ``,
    `- **Value**: \`${radius.value}\``,
    `- **Tailwind**: \`${radius.tailwind}\``,
    `- **Apply to**: buttons, inputs, cards, modals`,
    ``,
    `### Shadows: ${shadow.name}`,
    ``,
    `${shadow.description}`,
    ``,
    `- **Tailwind**: \`${shadow.tailwind}\``,
    shadow.name === "None"
      ? `- **Alternative**: Use background color differences for hierarchy`
      : ``,
    ``,
    `### Animation: ${animation.name}`,
    ``,
    `${animation.description}`,
    ``,
    `- **Duration**: \`${animation.duration}\``,
    `- **Tailwind**: \`${animation.tailwind}\` with \`transition-colors\` or \`transition-all\``,
    `- **Easing**: \`ease-in-out\``,
    ``,
    `---`,
    ``,
    `## Components`,
    ``,
    `### Buttons: ${button.name}`,
    ``,
    `${button.description}`,
    ``,
    `\`\`\`html`,
    `<button class="${button.tailwind.replaceAll("{accent}", accent.tailwind)} ${radius.tailwind} ${spacing.tailwind.padding} ${animation.tailwind} transition-colors">`,
    `  Button Text`,
    `</button>`,
    `\`\`\``,
    ``,
    `### Inputs: ${input.name}`,
    ``,
    `${input.description}`,
    ``,
    `\`\`\`html`,
    `<input class="${input.tailwind.replaceAll("{surface}", colorScheme.tailwind.surface).replaceAll("{accent}", accent.tailwind).replaceAll("{border}", "slate-600")} ${radius.tailwind} ${spacing.tailwind.padding}" />`,
    `\`\`\``,
    ``,
    `---`,
    ``,
    `## Layout`,
    ``,
    `### Container: ${container.name}`,
    ``,
    `${container.description}`,
    ``,
    `\`\`\`html`,
    `<div class="${container.tailwind} mx-auto px-4">`,
    `  <!-- Content -->`,
    `</div>`,
    `\`\`\``,
    ``,
    `---`,
    ``,
    `## CSS Custom Properties`,
    ``,
    `\`\`\`css`,
    `:root {`,
    `  /* Colors */`,
    `  --color-background: ${colorScheme.background};`,
    `  --color-surface: ${colorScheme.surface};`,
    `  --color-text: ${colorScheme.text};`,
    `  --color-text-secondary: ${colorScheme.textSecondary};`,
    `  --color-accent: ${accent.hex};`,
    ``,
    `  /* Spacing */`,
    `  --spacing-gap: ${spacing.gap};`,
    `  --spacing-padding: ${spacing.padding};`,
    ``,
    `  /* Border Radius */`,
    `  --radius: ${radius.value};`,
    ``,
    `  /* Animation */`,
    `  --duration: ${animation.duration};`,
    ``,
    `  /* Typography */`,
    `  --font-family: ${font.family};`,
    `}`,
    `\`\`\``,
    ``,
    `---`,
    ``,
    `## Tailwind Config Extension`,
    ``,
    `\`\`\`js`,
    `// tailwind.config.js`,
    `module.exports = {`,
    `  theme: {`,
    `    extend: {`,
    `      colors: {`,
    `        brand: {`,
    `          background: '${colorScheme.background}',`,
    `          surface: '${colorScheme.surface}',`,
    `          text: '${colorScheme.text}',`,
    `          'text-secondary': '${colorScheme.textSecondary}',`,
    `          accent: '${accent.hex}',`,
    `        },`,
    `      },`,
    `      borderRadius: {`,
    `        DEFAULT: '${radius.value}',`,
    `      },`,
    `      transitionDuration: {`,
    `        DEFAULT: '${animation.duration}',`,
    `      },`,
    `    },`,
    `  },`,
    `};`,
    `\`\`\``,
  ];

  return sections.filter((line) => line !== undefined).join("\n");
}

// ============================================================================
// JSON Export
// ============================================================================

export function generateExportJSON(preferences: Record<string, string>) {
  const colorScheme =
    colorSchemes[preferences.colorScheme as keyof typeof colorSchemes] ??
    colorSchemes.dark;
  const accent =
    accentColors[preferences.accentColor as keyof typeof accentColors] ??
    accentColors.blue;
  const font =
    fontFamilies[preferences.fontFamily as keyof typeof fontFamilies] ??
    fontFamilies.system;
  const typography =
    typographyScales[
      preferences.typographyScale as keyof typeof typographyScales
    ] ?? typographyScales.tight;
  const spacing =
    spacingDensities[
      preferences.spacingDensity as keyof typeof spacingDensities
    ] ?? spacingDensities.compact;
  const radius =
    borderRadii[preferences.borderRadius as keyof typeof borderRadii] ??
    borderRadii.sm;
  const shadow =
    shadowStyles[preferences.shadowStyle as keyof typeof shadowStyles] ??
    shadowStyles.none;
  const animation =
    animationStyles[
      preferences.animationStyle as keyof typeof animationStyles
    ] ?? animationStyles.minimal;
  const button =
    buttonStyles[preferences.buttonStyle as keyof typeof buttonStyles] ??
    buttonStyles.filled;
  const input =
    inputStyles[preferences.inputStyle as keyof typeof inputStyles] ??
    inputStyles.filled;
  const container =
    containerWidths[
      preferences.containerWidth as keyof typeof containerWidths
    ] ?? containerWidths.wide;

  return {
    version: "2.0",
    exportedAt: new Date().toISOString(),
    preferences,
    resolved: {
      colorScheme,
      accent,
      font,
      typography,
      spacing,
      radius,
      shadow,
      animation,
      button,
      input,
      container,
    },
  };
}
