// Theme preset colors
export interface ThemeColors {
  bg: string; // --preview-bg
  bgSurface: string; // --preview-bg-surface
  text: string; // --preview-text
  textSecondary: string; // --preview-text-secondary
  border: string; // --preview-border
  accent: string; // --preview-accent
  accentHover: string; // --preview-accent-hover
}

// Complete theme preset definition
export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  source?: string; // e.g., "draculatheme.com"
  category: "base" | "popular";
  colors: ThemeColors;
}
