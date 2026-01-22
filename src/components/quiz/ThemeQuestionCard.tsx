import { useMemo, useState } from "react";

import {
  getBaseThemes,
  getPopularThemes,
  getThemeById,
} from "../../data/themePresets";
import { ThemePresetCard } from "./ThemePresetCard";

// Color configuration for the customization panel
const colorConfig = [
  { key: "bg", label: "Background", description: "Main background color" },
  { key: "bgSurface", label: "Surface", description: "Cards and panels" },
  { key: "text", label: "Text", description: "Primary text color" },
  {
    key: "textSecondary",
    label: "Secondary Text",
    description: "Muted text color",
  },
  { key: "border", label: "Border", description: "Border color" },
  { key: "accent", label: "Accent", description: "Primary action color" },
];

interface CustomColors {
  bg?: string;
  bgSurface?: string;
  text?: string;
  textSecondary?: string;
  border?: string;
  accent?: string;
}

interface ThemeQuestionCardProps {
  selectedThemeId: string;
  customColors?: string; // JSON string of CustomColors
  onSelectTheme: (themeId: string) => void;
  onChangeCustomColors: (colors?: string) => void;
}

export function ThemeQuestionCard({
  selectedThemeId,
  customColors: customColorsStr,
  onSelectTheme,
  onChangeCustomColors,
}: ThemeQuestionCardProps) {
  const [showCustomColors, setShowCustomColors] = useState(!!customColorsStr);

  const baseThemes = getBaseThemes();
  const popularThemes = getPopularThemes();
  const selectedTheme = getThemeById(selectedThemeId);

  // Parse custom colors from JSON string
  const customColors: CustomColors = useMemo(() => {
    if (!customColorsStr) return {};
    try {
      return JSON.parse(customColorsStr) as CustomColors;
    } catch {
      return {};
    }
  }, [customColorsStr]);

  // Check if any colors are customized
  const hasCustomizations = Object.keys(customColors).length > 0;

  const handleToggleCustomColors = (enabled: boolean) => {
    setShowCustomColors(enabled);
    if (!enabled) {
      onChangeCustomColors();
    }
  };

  const updateColor = (key: string, value?: string) => {
    let newColors: CustomColors;

    if (value === undefined) {
      // Filter out the key to remove it
      const { [key]: _removed, ...rest } = customColors as Record<
        string,
        string
      >;
      newColors = rest as CustomColors;
    } else {
      newColors = { ...customColors, [key]: value };
    }

    // If all colors removed, clear customColors entirely
    if (Object.keys(newColors).length === 0) {
      onChangeCustomColors();
    } else {
      onChangeCustomColors(JSON.stringify(newColors));
    }
  };

  const resetAllColors = () => {
    onChangeCustomColors();
  };

  const getColorValue = (key: string): string => {
    const customValue = customColors[key as keyof CustomColors];
    if (customValue) return customValue;

    // Get from theme
    if (selectedTheme) {
      return selectedTheme.colors[key as keyof typeof selectedTheme.colors];
    }
    return "#000000";
  };

  return (
    <div
      className="flex flex-col"
      style={{ gap: "var(--preview-gap-lg, 1rem)" }}
    >
      {/* Question header */}
      <div
        className="flex flex-col"
        style={{ gap: "var(--preview-gap, 0.25rem)" }}
      >
        <span
          className="tracking-wide uppercase"
          style={{
            fontSize: "var(--preview-text-sm, 0.875rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          colors
        </span>
        <h2
          className="font-bold"
          style={{ fontSize: "var(--preview-text-2xl, 1.5rem)" }}
        >
          Theme
        </h2>
        <p style={{ color: "var(--preview-text-secondary, #94a3b8)" }}>
          Choose a color theme for your interface
        </p>
      </div>

      {/* Base themes section */}
      <div
        className="flex flex-col"
        style={{ gap: "var(--preview-gap, 0.5rem)" }}
      >
        <h3
          className="font-semibold"
          style={{
            fontSize: "var(--preview-text-base, 1rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          Base Themes
        </h3>
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{ gap: "var(--preview-gap, 0.5rem)" }}
        >
          {baseThemes.map((theme) => (
            <ThemePresetCard
              key={theme.id}
              theme={theme}
              isSelected={selectedThemeId === theme.id}
              onSelect={() => onSelectTheme(theme.id)}
            />
          ))}
        </div>
      </div>

      {/* Popular themes section */}
      <div
        className="flex flex-col"
        style={{ gap: "var(--preview-gap, 0.5rem)" }}
      >
        <h3
          className="font-semibold"
          style={{
            fontSize: "var(--preview-text-base, 1rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          Popular Themes
        </h3>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          style={{ gap: "var(--preview-gap, 0.5rem)" }}
        >
          {popularThemes.map((theme) => (
            <ThemePresetCard
              key={theme.id}
              theme={theme}
              isSelected={selectedThemeId === theme.id}
              onSelect={() => onSelectTheme(theme.id)}
            />
          ))}
        </div>
      </div>

      {/* Customize colors section */}
      <div
        className="flex flex-col"
        style={{
          gap: "var(--preview-gap, 0.5rem)",
          padding: "var(--preview-padding, 0.75rem)",
          backgroundColor: "var(--preview-bg-surface, #1e293b)",
          borderRadius: "var(--preview-radius, 0)",
        }}
      >
        <div className="flex items-center justify-between">
          <label
            className="flex cursor-pointer items-center"
            style={{ gap: "var(--preview-gap, 0.5rem)" }}
          >
            <input
              type="checkbox"
              checked={showCustomColors}
              onChange={(e) => handleToggleCustomColors(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-[var(--preview-accent,#3b82f6)]"
            />
            <span className="font-semibold">Customize colors</span>
          </label>

          {hasCustomizations && (
            <button
              type="button"
              onClick={resetAllColors}
              className="cursor-pointer"
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: "var(--preview-text-xs, 0.75rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                backgroundColor: "var(--preview-bg, #0f172a)",
                borderRadius: "var(--preview-radius, 0)",
                border: "none",
              }}
            >
              Reset All
            </button>
          )}
        </div>

        {showCustomColors && (
          <div
            className="flex flex-col"
            style={{ gap: "var(--preview-gap, 0.5rem)" }}
          >
            <p
              style={{
                fontSize: "var(--preview-text-sm, 0.875rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
              }}
            >
              Override individual theme colors
            </p>

            <div
              className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
              style={{ gap: "var(--preview-gap, 0.5rem)" }}
            >
              {colorConfig.map(({ key, label, description }) => {
                const isCustomized =
                  customColors[key as keyof CustomColors] !== undefined;

                return (
                  <div
                    key={key}
                    className="flex flex-col"
                    style={{
                      gap: "0.25rem",
                      padding: "var(--preview-padding, 0.5rem)",
                      backgroundColor: "var(--preview-bg, #0f172a)",
                      borderRadius: "var(--preview-radius, 0)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-medium"
                        style={{
                          fontSize: "var(--preview-text-sm, 0.875rem)",
                        }}
                      >
                        {label}
                        {isCustomized && (
                          <span
                            style={{
                              marginLeft: "0.25rem",
                              color: "var(--preview-accent, #3b82f6)",
                            }}
                          >
                            *
                          </span>
                        )}
                      </span>
                      {isCustomized && (
                        <button
                          type="button"
                          onClick={() => updateColor(key)}
                          style={{
                            fontSize: "var(--preview-text-xs, 0.75rem)",
                            color: "var(--preview-text-secondary, #94a3b8)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          Reset
                        </button>
                      )}
                    </div>
                    <p
                      style={{
                        fontSize: "var(--preview-text-xs, 0.75rem)",
                        color: "var(--preview-text-secondary, #94a3b8)",
                      }}
                    >
                      {description}
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={getColorValue(key)}
                        onChange={(e) => updateColor(key, e.target.value)}
                        className="h-8 w-8 cursor-pointer border-0 p-0"
                        style={{ borderRadius: "var(--preview-radius, 0)" }}
                        aria-label={`Pick ${label} color`}
                      />
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "var(--preview-text-xs, 0.75rem)",
                          color: "var(--preview-text-secondary, #94a3b8)",
                        }}
                      >
                        {getColorValue(key)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
