import { useState } from "react";

import { isValidHex, normalizeHex } from "../../utils/colorUtils";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  onReset?: () => void;
}

export function ColorPicker({ value, onChange, onReset }: ColorPickerProps) {
  const [hexInput, setHexInput] = useState(value);

  const handleHexChange = (input: string) => {
    setHexInput(input);
    const normalized = normalizeHex(input);
    if (isValidHex(normalized)) {
      onChange(normalized);
    }
  };

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setHexInput(color);
    onChange(color);
  };

  return (
    <div
      className="flex items-center"
      style={{ gap: "var(--preview-gap, 0.5rem)" }}
    >
      {/* Native color input */}
      <input
        type="color"
        value={value}
        onChange={handleColorPickerChange}
        className="h-10 w-10 cursor-pointer border-0 p-0"
        style={{ borderRadius: "var(--preview-radius, 0)" }}
        aria-label="Pick accent color"
      />

      {/* Hex value input */}
      <input
        type="text"
        value={hexInput}
        onChange={(e) => handleHexChange(e.target.value)}
        className="w-24 font-mono"
        style={{
          padding: "var(--preview-padding, 0.5rem)",
          backgroundColor: "var(--preview-bg-surface, #1e293b)",
          color: "var(--preview-text, #f8fafc)",
          borderRadius: "var(--preview-radius, 0)",
          border: "none",
          fontSize: "var(--preview-text-sm, 0.875rem)",
        }}
        placeholder="#000000"
        aria-label="Hex color value"
      />

      {/* Reset button */}
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="cursor-pointer"
          style={{
            padding: "var(--preview-padding, 0.5rem)",
            backgroundColor: "var(--preview-bg-surface, #1e293b)",
            color: "var(--preview-text-secondary, #94a3b8)",
            borderRadius: "var(--preview-radius, 0)",
            border: "none",
            fontSize: "var(--preview-text-sm, 0.875rem)",
            transitionProperty: "background-color, color",
            transitionDuration: "var(--preview-duration, 150ms)",
          }}
          aria-label="Reset to theme default"
        >
          Reset
        </button>
      )}
    </div>
  );
}
