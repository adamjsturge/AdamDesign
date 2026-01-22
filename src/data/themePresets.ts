import type { ThemePreset } from "../types/theme";

export const themePresets: ThemePreset[] = [
  // === BASE THEMES (with blue accent) ===
  {
    id: "true-dark",
    name: "True Dark",
    description: "OLED black with blue accent",
    category: "base",
    colors: {
      bg: "#000000",
      bgSurface: "#0a0a0a",
      text: "#ffffff",
      textSecondary: "#a0a0a0",
      border: "#1a1a1a",
      accent: "#3b82f6",
      accentHover: "#2563eb",
    },
  },
  {
    id: "dark",
    name: "Dark",
    description: "Classic dark theme",
    category: "base",
    colors: {
      bg: "#0f172a",
      bgSurface: "#1e293b",
      text: "#f8fafc",
      textSecondary: "#94a3b8",
      border: "#334155",
      accent: "#3b82f6",
      accentHover: "#2563eb",
    },
  },
  {
    id: "dim",
    name: "Dim",
    description: "Muted contrast, easier on eyes",
    category: "base",
    colors: {
      bg: "#1e293b",
      bgSurface: "#334155",
      text: "#cbd5e1",
      textSecondary: "#94a3b8",
      border: "#475569",
      accent: "#3b82f6",
      accentHover: "#2563eb",
    },
  },
  {
    id: "light",
    name: "Light",
    description: "Clean light theme",
    category: "base",
    colors: {
      bg: "#ffffff",
      bgSurface: "#f1f5f9",
      text: "#0f172a",
      textSecondary: "#64748b",
      border: "#e2e8f0",
      accent: "#3b82f6",
      accentHover: "#2563eb",
    },
  },

  // === POPULAR OPEN SOURCE THEMES ===
  {
    id: "dracula",
    name: "Dracula",
    description: "Dark theme with purple tones",
    source: "draculatheme.com",
    category: "popular",
    colors: {
      bg: "#282a36",
      bgSurface: "#44475a",
      text: "#f8f8f2",
      textSecondary: "#6272a4",
      border: "#44475a",
      accent: "#bd93f9",
      accentHover: "#ff79c6",
    },
  },
  {
    id: "nord",
    name: "Nord",
    description: "Arctic, north-bluish palette",
    source: "nordtheme.com",
    category: "popular",
    colors: {
      bg: "#2e3440",
      bgSurface: "#3b4252",
      text: "#eceff4",
      textSecondary: "#d8dee9",
      border: "#4c566a",
      accent: "#88c0d0",
      accentHover: "#81a1c1",
    },
  },
  {
    id: "solarized-dark",
    name: "Solarized Dark",
    description: "Precision colors for readability",
    source: "ethanschoonover.com/solarized",
    category: "popular",
    colors: {
      bg: "#002b36",
      bgSurface: "#073642",
      text: "#839496",
      textSecondary: "#586e75",
      border: "#073642",
      accent: "#268bd2",
      accentHover: "#2aa198",
    },
  },
  {
    id: "solarized-light",
    name: "Solarized Light",
    description: "Light variant of Solarized",
    source: "ethanschoonover.com/solarized",
    category: "popular",
    colors: {
      bg: "#fdf6e3",
      bgSurface: "#eee8d5",
      text: "#657b83",
      textSecondary: "#93a1a1",
      border: "#eee8d5",
      accent: "#268bd2",
      accentHover: "#2aa198",
    },
  },
  {
    id: "one-dark",
    name: "One Dark",
    description: "Atom's iconic dark theme",
    source: "atom.io",
    category: "popular",
    colors: {
      bg: "#282c34",
      bgSurface: "#21252b",
      text: "#abb2bf",
      textSecondary: "#5c6370",
      border: "#3e4451",
      accent: "#61afef",
      accentHover: "#528bff",
    },
  },
  {
    id: "catppuccin-mocha",
    name: "Catppuccin",
    description: "Soothing pastel theme",
    source: "catppuccin.com",
    category: "popular",
    colors: {
      bg: "#1e1e2e",
      bgSurface: "#313244",
      text: "#cdd6f4",
      textSecondary: "#a6adc8",
      border: "#45475a",
      accent: "#cba6f7",
      accentHover: "#f5c2e7",
    },
  },
  {
    id: "github-dark",
    name: "GitHub Dark",
    description: "GitHub's default dark theme",
    source: "github.com",
    category: "popular",
    colors: {
      bg: "#0d1117",
      bgSurface: "#161b22",
      text: "#c9d1d9",
      textSecondary: "#8b949e",
      border: "#30363d",
      accent: "#58a6ff",
      accentHover: "#1f6feb",
    },
  },
  {
    id: "github-light",
    name: "GitHub Light",
    description: "GitHub's default light theme",
    source: "github.com",
    category: "popular",
    colors: {
      bg: "#ffffff",
      bgSurface: "#f6f8fa",
      text: "#24292f",
      textSecondary: "#57606a",
      border: "#d0d7de",
      accent: "#0969da",
      accentHover: "#0550ae",
    },
  },
  {
    id: "gruvbox-dark",
    name: "Gruvbox",
    description: "Retro groove color scheme",
    source: "github.com/morhetz/gruvbox",
    category: "popular",
    colors: {
      bg: "#282828",
      bgSurface: "#3c3836",
      text: "#ebdbb2",
      textSecondary: "#a89984",
      border: "#504945",
      accent: "#fe8019",
      accentHover: "#fabd2f",
    },
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    description: "Clean dark theme inspired by Tokyo",
    source: "github.com/enkia/tokyo-night-vscode-theme",
    category: "popular",
    colors: {
      bg: "#1a1b26",
      bgSurface: "#24283b",
      text: "#c0caf5",
      textSecondary: "#565f89",
      border: "#3b4261",
      accent: "#7aa2f7",
      accentHover: "#bb9af7",
    },
  },
  {
    id: "rose-pine",
    name: "Rose Pine",
    description: "Soho vibes for coders",
    source: "rosepinetheme.com",
    category: "popular",
    colors: {
      bg: "#191724",
      bgSurface: "#1f1d2e",
      text: "#e0def4",
      textSecondary: "#908caa",
      border: "#26233a",
      accent: "#ebbcba",
      accentHover: "#eb6f92",
    },
  },
  {
    id: "monokai",
    name: "Monokai",
    description: "Sublime Text's classic theme",
    source: "monokai.pro",
    category: "popular",
    colors: {
      bg: "#272822",
      bgSurface: "#3e3d32",
      text: "#f8f8f2",
      textSecondary: "#75715e",
      border: "#49483e",
      accent: "#a6e22e",
      accentHover: "#f92672",
    },
  },
];

// Helper to get a theme by ID
export function getThemeById(id: string): ThemePreset | undefined {
  return themePresets.find((t) => t.id === id);
}

// Helper to get base themes
export function getBaseThemes(): ThemePreset[] {
  return themePresets.filter((t) => t.category === "base");
}

// Helper to get popular themes
export function getPopularThemes(): ThemePreset[] {
  return themePresets.filter((t) => t.category === "popular");
}

// Default theme ID
export const DEFAULT_THEME_ID = "dim";
