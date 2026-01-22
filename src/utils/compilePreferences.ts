import { questions } from "../data/questions";
import { DEFAULT_THEME_ID, getThemeById } from "../data/themePresets";
import type {
  CompiledDesignTokens,
  UserPreferences,
} from "../types/preferences";
import { darkenColor, isValidHex } from "./colorUtils";

/**
 * Convert theme colors to CSS variables
 */
function getThemeCssVars(themeId: string): Record<string, string> {
  const theme = getThemeById(themeId);
  if (!theme) return {};

  return {
    "--preview-bg": theme.colors.bg,
    "--preview-bg-surface": theme.colors.bgSurface,
    "--preview-text": theme.colors.text,
    "--preview-text-secondary": theme.colors.textSecondary,
    "--preview-border": theme.colors.border,
    "--preview-accent": theme.colors.accent,
    "--preview-accent-hover": theme.colors.accentHover,
  };
}

// Map of custom color keys to CSS variable names
const colorKeyToCssVar: Record<string, string> = {
  bg: "--preview-bg",
  bgSurface: "--preview-bg-surface",
  text: "--preview-text",
  textSecondary: "--preview-text-secondary",
  border: "--preview-border",
  accent: "--preview-accent",
  accentHover: "--preview-accent-hover",
};

/**
 * Parse custom colors from preferences (stored as JSON string)
 */
function parseCustomColors(
  customColorsStr: string | undefined,
): Record<string, string> {
  if (!customColorsStr) return {};
  try {
    return JSON.parse(customColorsStr) as Record<string, string>;
  } catch {
    return {};
  }
}

/**
 * Compile user preferences into CSS variables and Tailwind classes
 */
export function compilePreferences(
  preferences: UserPreferences,
): CompiledDesignTokens {
  const cssVariables: Record<string, string> = {};
  const tailwindClasses: Record<string, string> = {};

  // Handle theme preset
  const themeId = preferences.theme || DEFAULT_THEME_ID;
  const themeCssVars = getThemeCssVars(themeId);
  Object.assign(cssVariables, themeCssVars);

  // Handle custom color overrides (stored as JSON string)
  const customColors = parseCustomColors(preferences.customColors);
  for (const [key, value] of Object.entries(customColors)) {
    const cssVar = colorKeyToCssVar[key];
    if (cssVar && value && isValidHex(value)) {
      cssVariables[cssVar] = value;
      // Auto-compute hover for accent
      if (key === "accent") {
        cssVariables["--preview-accent-hover"] = darkenColor(value, 15);
      }
    }
  }

  // Legacy support: handle customAccentColor if customColors not set
  if (
    !customColors.accent &&
    preferences.customAccentColor &&
    isValidHex(preferences.customAccentColor)
  ) {
    cssVariables["--preview-accent"] = preferences.customAccentColor;
    cssVariables["--preview-accent-hover"] = darkenColor(
      preferences.customAccentColor,
      15,
    );
  }

  // Process other questions (skip theme-related since we handled above)
  for (const question of questions) {
    // Skip theme question as we handled it above
    if (question.id === "theme") continue;

    const selectedId = preferences[question.id] || question.defaultValue;
    const option = question.options.find((o) => o.id === selectedId);

    if (option) {
      // Merge CSS variables
      if (option.cssVars) {
        Object.assign(cssVariables, option.cssVars);
      }

      // Store Tailwind classes by question ID
      if (option.tailwindClasses) {
        tailwindClasses[question.id] = option.tailwindClasses;
      }
    }
  }

  return { cssVariables, tailwindClasses };
}

/**
 * Get CSS variables as a style object for React inline styles
 */
export function getPreviewStyle(
  preferences: UserPreferences,
): React.CSSProperties {
  const { cssVariables } = compilePreferences(preferences);
  return cssVariables as React.CSSProperties;
}

/**
 * Get the selected option for a question
 */
export function getSelectedOption(
  preferences: UserPreferences,
  questionId: string,
) {
  const question = questions.find((q) => q.id === questionId);
  if (!question) return null;

  const selectedId = preferences[questionId] || question.defaultValue;
  return question.options.find((o) => o.id === selectedId) || null;
}

/**
 * Get human-readable label for a preference
 */
export function getPreferenceLabel(
  preferences: UserPreferences,
  questionId: string,
): string {
  // Special handling for theme
  if (questionId === "theme") {
    const theme = getThemeById(preferences.theme || DEFAULT_THEME_ID);
    return theme?.name || "Unknown";
  }

  const option = getSelectedOption(preferences, questionId);
  return option?.label || "Unknown";
}
