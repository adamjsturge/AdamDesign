import type { ThemePreset } from "../../types/theme";

interface ThemePresetCardProps {
  theme: ThemePreset;
  isSelected: boolean;
  onSelect: () => void;
}

export function ThemePresetCard({
  theme,
  isSelected,
  onSelect,
}: ThemePresetCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className="flex flex-col text-left"
      style={{
        gap: "var(--preview-gap, 0.5rem)",
        padding: "var(--preview-padding, 0.75rem)",
        borderRadius: "var(--preview-radius, 0)",
        backgroundColor: isSelected
          ? "var(--preview-accent, #3b82f6)"
          : "var(--preview-bg-surface, #1e293b)",
        color: isSelected ? "#ffffff" : "var(--preview-text, #f8fafc)",
        transitionProperty: "background-color, color",
        transitionDuration: "var(--preview-duration, 150ms)",
        cursor: "pointer",
      }}
    >
      {/* Color swatch preview */}
      <div
        className="flex w-full overflow-hidden"
        style={{
          height: "3rem",
          borderRadius: "var(--preview-radius, 0)",
        }}
      >
        {/* Background + text preview */}
        <div
          className="flex flex-2 flex-col justify-center px-2"
          style={{ backgroundColor: theme.colors.bg }}
        >
          <span
            className="text-xs font-semibold"
            style={{ color: theme.colors.text }}
          >
            Aa
          </span>
          <span
            style={{
              color: theme.colors.textSecondary,
              fontSize: "0.625rem",
            }}
          >
            Text
          </span>
        </div>
        {/* Surface color */}
        <div
          className="flex-1"
          style={{ backgroundColor: theme.colors.bgSurface }}
        />
        {/* Accent color */}
        <div
          className="flex-1"
          style={{ backgroundColor: theme.colors.accent }}
        />
      </div>

      {/* Label and description */}
      <div>
        <span className="font-semibold">{theme.name}</span>
        <p
          style={{
            fontSize: "var(--preview-text-sm, 0.875rem)",
            color: isSelected
              ? "rgba(255, 255, 255, 0.8)"
              : "var(--preview-text-secondary, #94a3b8)",
            marginTop: "0.25rem",
          }}
        >
          {theme.description}
        </p>
      </div>
    </button>
  );
}
