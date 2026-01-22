import { useAtom, useSetAtom } from "jotai";
import { useMemo, useRef, useState } from "react";

import {
  importPreferencesAtom,
  preferencesAtom,
  resetQuizAtom,
  updatePreferenceAtom,
} from "../../atoms/preferencesAtom";
import { DashboardPreview } from "../../components/preview/DashboardPreview";
import { PreviewWrapper } from "../../components/preview/PreviewWrapper";
import { questions } from "../../data/questions";
import {
  DEFAULT_THEME_ID,
  getThemeById,
  themePresets,
} from "../../data/themePresets";
import type { PreferencesExport } from "../../types/preferences";

export default function Settings() {
  const [preferences] = useAtom(preferencesAtom);
  const updatePreference = useSetAtom(updatePreferenceAtom);
  const importPreferences = useSetAtom(importPreferencesAtom);
  const resetQuiz = useSetAtom(resetQuizAtom);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      const data = JSON.parse(content) as PreferencesExport;

      if (data.version !== "1.0" || !data.preferences) {
        throw new Error("Invalid file format");
      }

      importPreferences(data.preferences);
      setImportError(null);
      setImportSuccess(true);
      setTimeout(() => setImportSuccess(false), 3000);
    } catch {
      setImportError("Failed to import. Please check the file format.");
      setTimeout(() => setImportError(null), 3000);
    }

    event.target.value = "";
  };

  const handleReset = () => {
    if (
      globalThis.confirm(
        "Are you sure you want to reset all preferences to defaults?",
      )
    ) {
      resetQuiz();
    }
  };

  // Group questions by category
  const groupedQuestions = questions.reduce(
    (acc, question) => {
      if (!acc[question.category]) {
        acc[question.category] = [];
      }
      acc[question.category].push(question);
      return acc;
    },
    {} as Record<string, typeof questions>,
  );

  const categoryOrder = [
    "colors",
    "shapes",
    "spacing",
    "typography",
    "animation",
    "components",
    "layout",
  ];

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      {/* Settings panel */}
      <div
        className="flex w-full flex-col lg:w-1/2"
        style={{
          borderRight: "1px solid var(--preview-border, #334155)",
        }}
      >
        {/* Actions bar */}
        <div
          className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          style={{
            padding: "var(--preview-padding, 0.75rem)",
            borderBottom: "1px solid var(--preview-border, #334155)",
          }}
        >
          <h1
            className="font-semibold"
            style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
          >
            Edit Preferences
          </h1>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 transition-opacity hover:opacity-80 sm:flex-none"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              Import JSON
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 transition-opacity hover:opacity-80 sm:flex-none"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                color: "#ef4444",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              Reset
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
            aria-label="Import preferences file"
          />
        </div>

        {/* Feedback messages */}
        {importError && (
          <div
            className="text-center"
            style={{
              padding: "var(--preview-padding, 0.75rem)",
              backgroundColor: "rgba(239, 68, 68, 0.2)",
              color: "#ef4444",
              fontSize: "var(--preview-text-sm, 0.875rem)",
            }}
          >
            {importError}
          </div>
        )}
        {importSuccess && (
          <div
            className="text-center"
            style={{
              padding: "var(--preview-padding, 0.75rem)",
              backgroundColor: "rgba(34, 197, 94, 0.2)",
              color: "#22c55e",
              fontSize: "var(--preview-text-sm, 0.875rem)",
            }}
          >
            Preferences imported successfully!
          </div>
        )}

        {/* Settings list */}
        <div
          className="flex-1 overflow-auto"
          style={{ padding: "var(--preview-padding-lg, 1rem)" }}
        >
          {categoryOrder.map((category) => {
            const categoryQuestions = groupedQuestions[category];
            if (!categoryQuestions) return null;

            return (
              <div
                key={category}
                style={{ marginBottom: "var(--preview-gap-lg, 1.5rem)" }}
              >
                <h2
                  className="mb-3 font-semibold tracking-wide uppercase"
                  style={{
                    fontSize: "var(--preview-text-sm, 0.875rem)",
                    color: "var(--preview-text-secondary, #94a3b8)",
                  }}
                >
                  {category}
                </h2>
                <div
                  className="flex flex-col"
                  style={{ gap: "var(--preview-gap, 0.5rem)" }}
                >
                  {categoryQuestions.map((question) => {
                    // Handle theme question with custom UI
                    if (question.id === "theme") {
                      return (
                        <ThemeSettingsRow
                          key={question.id}
                          selectedThemeId={
                            preferences.theme || DEFAULT_THEME_ID
                          }
                          customColors={preferences.customColors}
                          onSelectTheme={(themeId) =>
                            updatePreference("theme", themeId)
                          }
                          onChangeCustomColors={(colors) =>
                            updatePreference("customColors", colors)
                          }
                        />
                      );
                    }

                    // Skip questions with no options
                    if (question.options.length === 0) return null;

                    return (
                      <PreferenceSelect
                        key={question.id}
                        label={question.title}
                        value={
                          preferences[question.id] || question.defaultValue
                        }
                        options={question.options.map((o) => ({
                          id: o.id,
                          label: o.label,
                        }))}
                        onChange={(value) =>
                          updatePreference(question.id, value)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live preview */}
      <div className="flex-1 overflow-auto">
        <div
          className="sticky top-0 text-center lg:hidden"
          style={{
            padding: "var(--preview-padding, 0.75rem)",
            borderBottom: "1px solid var(--preview-border, #334155)",
            backgroundColor: "var(--preview-bg-surface, #1e293b)",
            fontSize: "var(--preview-text-xs, 0.75rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          Live Preview
        </div>
        <PreviewWrapper preferences={preferences} className="min-h-full">
          <DashboardPreview preferences={preferences} />
        </PreviewWrapper>
      </div>
    </div>
  );
}

function PreferenceSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{ id: string; label: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        padding: "var(--preview-padding, 0.75rem)",
        backgroundColor: "var(--preview-bg-surface, #1e293b)",
        borderRadius: "var(--preview-radius, 0)",
        gap: "var(--preview-gap, 0.5rem)",
      }}
    >
      <span
        className="font-medium"
        style={{ fontSize: "var(--preview-text-sm, 0.875rem)" }}
      >
        {label}
      </span>
      <div className="flex flex-wrap gap-1">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className="transition-colors"
            style={{
              padding: "0.25rem 0.5rem",
              fontSize: "var(--preview-text-xs, 0.75rem)",
              backgroundColor:
                value === option.id
                  ? "var(--preview-accent, #3b82f6)"
                  : "var(--preview-bg, #0f172a)",
              color:
                value === option.id
                  ? "#ffffff"
                  : "var(--preview-text-secondary, #94a3b8)",
              borderRadius: "var(--preview-radius, 0)",
              transitionDuration: "var(--preview-duration, 150ms)",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Color configuration for settings
const colorConfigSettings = [
  { key: "bg", label: "Background" },
  { key: "bgSurface", label: "Surface" },
  { key: "text", label: "Text" },
  { key: "textSecondary", label: "Secondary" },
  { key: "border", label: "Border" },
  { key: "accent", label: "Accent" },
];

interface CustomColorsSettings {
  bg?: string;
  bgSurface?: string;
  text?: string;
  textSecondary?: string;
  border?: string;
  accent?: string;
}

function ThemeSettingsRow({
  selectedThemeId,
  customColors: customColorsStr,
  onSelectTheme,
  onChangeCustomColors,
}: {
  selectedThemeId: string;
  customColors?: string;
  onSelectTheme: (themeId: string) => void;
  onChangeCustomColors: (colors?: string) => void;
}) {
  const [showColorPickers, setShowColorPickers] = useState(!!customColorsStr);
  const selectedTheme = getThemeById(selectedThemeId);

  // Parse custom colors
  const customColors: CustomColorsSettings = useMemo(() => {
    if (!customColorsStr) return {};
    try {
      return JSON.parse(customColorsStr) as CustomColorsSettings;
    } catch {
      return {};
    }
  }, [customColorsStr]);

  const hasCustomizations = Object.keys(customColors).length > 0;

  const updateColor = (key: string, value?: string) => {
    let newColors: CustomColorsSettings;

    if (value === undefined) {
      // Filter out the key to remove it
      const { [key]: _removed, ...rest } = customColors as Record<
        string,
        string
      >;
      newColors = rest as CustomColorsSettings;
    } else {
      newColors = { ...customColors, [key]: value };
    }

    if (Object.keys(newColors).length === 0) {
      onChangeCustomColors();
    } else {
      onChangeCustomColors(JSON.stringify(newColors));
    }
  };

  const getColorValue = (key: string): string => {
    const customValue = customColors[key as keyof CustomColorsSettings];
    if (customValue) return customValue;
    if (selectedTheme) {
      return selectedTheme.colors[key as keyof typeof selectedTheme.colors];
    }
    return "#000000";
  };

  return (
    <div
      className="flex flex-col"
      style={{
        padding: "var(--preview-padding, 0.75rem)",
        backgroundColor: "var(--preview-bg-surface, #1e293b)",
        borderRadius: "var(--preview-radius, 0)",
        gap: "var(--preview-gap, 0.5rem)",
      }}
    >
      {/* Theme selector */}
      <div
        className="flex items-center justify-between"
        style={{ gap: "var(--preview-gap, 0.5rem)" }}
      >
        <span
          className="font-medium"
          style={{ fontSize: "var(--preview-text-sm, 0.875rem)" }}
        >
          Theme
        </span>
        <select
          value={selectedThemeId}
          onChange={(e) => onSelectTheme(e.target.value)}
          className="cursor-pointer"
          style={{
            padding: "0.25rem 0.5rem",
            fontSize: "var(--preview-text-xs, 0.75rem)",
            backgroundColor: "var(--preview-bg, #0f172a)",
            color: "var(--preview-text, #f8fafc)",
            borderRadius: "var(--preview-radius, 0)",
            border: "none",
          }}
          aria-label="Select theme"
        >
          {themePresets.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
      </div>

      {/* Custom colors toggle */}
      <div className="flex items-center justify-between">
        <label
          className="flex cursor-pointer items-center"
          style={{ gap: "var(--preview-gap, 0.5rem)" }}
        >
          <input
            type="checkbox"
            checked={showColorPickers}
            onChange={(e) => {
              setShowColorPickers(e.target.checked);
              if (!e.target.checked) {
                onChangeCustomColors();
              }
            }}
            className="h-3 w-3 cursor-pointer accent-[var(--preview-accent,#3b82f6)]"
          />
          <span
            style={{
              fontSize: "var(--preview-text-xs, 0.75rem)",
              color: "var(--preview-text-secondary, #94a3b8)",
            }}
          >
            Customize colors
          </span>
        </label>

        {hasCustomizations && (
          <button
            type="button"
            onClick={() => onChangeCustomColors()}
            style={{
              fontSize: "var(--preview-text-xs, 0.75rem)",
              color: "var(--preview-text-secondary, #94a3b8)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Reset all
          </button>
        )}
      </div>

      {/* Color pickers grid */}
      {showColorPickers && (
        <div
          className="grid grid-cols-2 gap-2 sm:grid-cols-3"
          style={{ gap: "var(--preview-gap, 0.5rem)" }}
        >
          {colorConfigSettings.map(({ key, label }) => {
            const isCustomized =
              customColors[key as keyof CustomColorsSettings] !== undefined;
            return (
              <div
                key={key}
                className="flex items-center gap-1"
                style={{ gap: "0.25rem" }}
              >
                <input
                  type="color"
                  value={getColorValue(key)}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="h-6 w-6 cursor-pointer border-0 p-0"
                  aria-label={`Pick ${label} color`}
                />
                <span
                  style={{
                    fontSize: "var(--preview-text-xs, 0.75rem)",
                    color: isCustomized
                      ? "var(--preview-accent, #3b82f6)"
                      : "var(--preview-text-secondary, #94a3b8)",
                  }}
                >
                  {label}
                </span>
                {isCustomized && (
                  <button
                    type="button"
                    onClick={() => updateColor(key)}
                    style={{
                      fontSize: "0.625rem",
                      color: "var(--preview-text-secondary, #94a3b8)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
