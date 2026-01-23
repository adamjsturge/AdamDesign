import { useState } from "react";

import type { UserPreferences } from "../../types/preferences";
import { Icon } from "../Icon";
import {
  getBadgeStyles,
  getBorderUsageStyles,
  getCardStyles,
  getDisabledStyles,
  getLineHeight,
  getLinkStyles,
} from "../../utils/styleHelpers";

interface FormPreviewProps {
  preferences: UserPreferences;
}

/**
 * Form preview page - shows various input types and form layouts
 * All styles are driven by CSS variables from preferences
 */
export function FormPreview({ preferences }: FormPreviewProps) {
  const buttonStyle = preferences.buttonStyle || "filled";
  const inputStyle = preferences.inputStyle || "filled";
  const cardStyle = preferences.cardStyle || "filled";
  const badgeStyle = preferences.badgeStyle || "subtle";
  const linkStyle = preferences.linkStyle || "color";
  const lineHeight = preferences.lineHeight || "normal";
  const textAlignment = preferences.textAlignment || "left";
  const fontWeight = preferences.fontWeight || "regular";
  const disabledState = preferences.disabledState || "opacity";
  const borderUsage = preferences.borderUsage || "subtle";
  const [toggleOn, setToggleOn] = useState(true);

  const getFontWeights = () => {
    switch (fontWeight) {
      case "light":
        return { normal: 300, semibold: 500, bold: 600 };
      case "heavy":
        return { normal: 500, semibold: 700, bold: 900 };
      default:
        return { normal: 400, semibold: 600, bold: 700 };
    }
  };
  const weights = getFontWeights();

  return (
    <div
      className="min-h-full"
      style={{
        backgroundColor: "var(--preview-bg)",
        color: "var(--preview-text)",
        lineHeight: getLineHeight(lineHeight),
        textAlign: textAlignment as "left" | "center" | "justify",
        fontWeight: weights.normal,
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "var(--preview-padding)",
          ...getBorderUsageStyles(borderUsage),
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: "var(--preview-container, 80rem)" }}
        >
          <h1
            style={{
              fontSize: "var(--preview-text-xl)",
              fontWeight: weights.bold,
            }}
          >
            Share Feedback
          </h1>
          <span style={getBadgeStyles(badgeStyle, "accent")}>New</span>
        </div>
      </header>

      {/* Main content */}
      <main
        className="mx-auto"
        style={{
          padding: "var(--preview-padding-lg)",
          maxWidth: "var(--preview-container, 48rem)",
        }}
      >
        {/* Contact section */}
        <section
          style={{
            ...getCardStyles(cardStyle),
            ...getBorderUsageStyles(borderUsage),
            padding: "var(--preview-padding-lg)",
            marginBottom: "var(--preview-gap-lg)",
          }}
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--preview-text-lg)",
              fontWeight: weights.semibold,
            }}
          >
            Your Details
          </h2>

          <div className="flex flex-col" style={{ gap: "var(--preview-gap)" }}>
            <div className="grid gap-3 sm:grid-cols-2">
              <FormField
                label="Name"
                inputStyle={inputStyle}
                placeholder="Your name"
              />
              <FormField
                label="Email"
                inputStyle={inputStyle}
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <FormField
              label="Your Feedback"
              inputStyle={inputStyle}
              placeholder="What do you think about Design Discovery? Any suggestions?"
              multiline
            />
          </div>
        </section>

        {/* Feedback options */}
        <section
          style={{
            ...getCardStyles(cardStyle),
            ...getBorderUsageStyles(borderUsage),
            padding: "var(--preview-padding-lg)",
            marginBottom: "var(--preview-gap-lg)",
          }}
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--preview-text-lg)",
              fontWeight: weights.semibold,
            }}
          >
            Feedback Type
          </h2>

          <div className="flex flex-col" style={{ gap: "var(--preview-gap)" }}>
            {/* Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Include my preferences</p>
                <p
                  style={{
                    color: "var(--preview-text-secondary)",
                    fontSize: "var(--preview-text-sm)",
                  }}
                >
                  Share current design preferences with feedback
                </p>
              </div>
              <Toggle checked={toggleOn} onChange={setToggleOn} />
            </div>

            {/* Select */}
            <div>
              <label
                htmlFor="feedback-type"
                className="mb-1 block font-medium"
                style={{ fontSize: "var(--preview-text-sm)" }}
              >
                Category
              </label>
              <SelectInput inputStyle={inputStyle} id="feedback-type">
                <option>General feedback</option>
                <option>Bug report</option>
                <option>Feature request</option>
                <option>Question</option>
              </SelectInput>
            </div>

            {/* Radio group */}
            <div>
              <p
                className="mb-2 font-medium"
                style={{ fontSize: "var(--preview-text-sm)" }}
              >
                How did you find us?
              </p>
              <div className="flex" style={{ gap: "var(--preview-gap-lg)" }}>
                <RadioOption name="source" label="Search" defaultChecked />
                <RadioOption name="source" label="Social" />
                <RadioOption name="source" label="Friend" />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="followup"
                className="mt-1"
                style={{ accentColor: "var(--preview-accent)" }}
              />
              <label
                htmlFor="followup"
                style={{ fontSize: "var(--preview-text-sm)" }}
              >
                I agree to the{" "}
                <span style={getLinkStyles(linkStyle)}>terms of service</span>{" "}
                and <span style={getLinkStyles(linkStyle)}>privacy policy</span>
              </label>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div
          className="flex flex-wrap justify-end"
          style={{ gap: "var(--preview-gap)" }}
        >
          <PreviewButton
            style={buttonStyle}
            disabled
            disabledStyle={disabledState}
          >
            <Icon name="close" context="button" />
            Disabled
          </PreviewButton>
          <PreviewButton style={buttonStyle} secondary>
            <Icon name="close" context="button" />
            Cancel
          </PreviewButton>
          <PreviewButton style={buttonStyle}>
            <Icon name="send" context="button" />
            Send Feedback
          </PreviewButton>
        </div>
      </main>
    </div>
  );
}

function FormField({
  label,
  inputStyle,
  placeholder,
  type = "text",
  multiline = false,
}: {
  label: string;
  inputStyle: string;
  placeholder: string;
  type?: string;
  multiline?: boolean;
}) {
  const baseStyle: React.CSSProperties = {
    width: "100%",
    padding: "var(--preview-padding)",
    borderRadius: "var(--preview-radius)",
    fontSize: "var(--preview-text-sm)",
    outline: "none",
    transitionDuration: "var(--preview-duration)",
    color: "var(--preview-text)",
  };

  const getInputStyle = (): React.CSSProperties => {
    switch (inputStyle) {
      case "outlined":
        return {
          ...baseStyle,
          border: "1px solid var(--preview-border)",
          backgroundColor: "transparent",
        };
      case "underlined":
        return {
          ...baseStyle,
          border: "none",
          borderBottom: "1px solid var(--preview-border)",
          borderRadius: 0,
          backgroundColor: "transparent",
        };
      default: // filled
        return {
          ...baseStyle,
          border: "none",
          backgroundColor: "var(--preview-bg)",
        };
    }
  };

  return (
    <div>
      <label
        className="mb-1 block font-medium"
        style={{ fontSize: "var(--preview-text-sm)" }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea placeholder={placeholder} rows={3} style={getInputStyle()} />
      ) : (
        <input type={type} placeholder={placeholder} style={getInputStyle()} />
      )}
    </div>
  );
}

function SelectInput({
  children,
  inputStyle,
  id,
}: {
  children: React.ReactNode;
  inputStyle: string;
  id?: string;
}) {
  const baseStyle: React.CSSProperties = {
    width: "100%",
    padding: "var(--preview-padding)",
    borderRadius: "var(--preview-radius)",
    fontSize: "var(--preview-text-sm)",
    outline: "none",
    transitionDuration: "var(--preview-duration)",
    color: "var(--preview-text)",
    cursor: "pointer",
  };

  const getStyle = (): React.CSSProperties => {
    switch (inputStyle) {
      case "outlined":
        return {
          ...baseStyle,
          border: "1px solid var(--preview-border)",
          backgroundColor: "transparent",
        };
      case "underlined":
        return {
          ...baseStyle,
          border: "none",
          borderBottom: "1px solid var(--preview-border)",
          borderRadius: 0,
          backgroundColor: "transparent",
        };
      default:
        return {
          ...baseStyle,
          border: "none",
          backgroundColor: "var(--preview-bg)",
        };
    }
  };

  return (
    <select id={id} style={getStyle()}>
      {children}
    </select>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative h-6 w-11 cursor-pointer"
      style={{
        backgroundColor: checked
          ? "var(--preview-accent)"
          : "var(--preview-border)",
        borderRadius: "9999px",
        transitionDuration: "var(--preview-duration)",
      }}
    >
      <span
        className="absolute top-0.5 block h-5 w-5 bg-white"
        style={{
          borderRadius: "9999px",
          left: checked ? "calc(100% - 1.375rem)" : "0.125rem",
          transitionDuration: "var(--preview-duration)",
        }}
      />
    </button>
  );
}

function RadioOption({
  name,
  label,
  defaultChecked = false,
}: {
  name: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        style={{ accentColor: "var(--preview-accent)" }}
      />
      <span style={{ fontSize: "var(--preview-text-sm)" }}>{label}</span>
    </label>
  );
}

function PreviewButton({
  children,
  style,
  secondary = false,
  disabled = false,
  disabledStyle = "opacity",
}: {
  children: React.ReactNode;
  style: string;
  secondary?: boolean;
  disabled?: boolean;
  disabledStyle?: string;
}) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--preview-padding)",
    borderRadius: "var(--preview-button-radius)",
    fontSize: "var(--preview-text-sm)",
    fontWeight: 600,
    transitionDuration: "var(--preview-duration)",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const disabledStyles = disabled ? getDisabledStyles(disabledStyle) : {};

  if (secondary) {
    return (
      <button
        type="button"
        disabled={disabled}
        style={{
          ...baseStyle,
          border: "1px solid var(--preview-border)",
          backgroundColor: "transparent",
          color: "var(--preview-text)",
          ...disabledStyles,
        }}
      >
        {children}
      </button>
    );
  }

  switch (style) {
    case "outline":
      return (
        <button
          type="button"
          disabled={disabled}
          style={{
            ...baseStyle,
            border: "2px solid var(--preview-accent)",
            backgroundColor: "transparent",
            color: "var(--preview-accent)",
            ...disabledStyles,
          }}
        >
          {children}
        </button>
      );
    case "ghost":
      return (
        <button
          type="button"
          disabled={disabled}
          style={{
            ...baseStyle,
            backgroundColor: "transparent",
            color: "var(--preview-accent)",
            ...disabledStyles,
          }}
        >
          {children}
        </button>
      );
    case "gradient":
      return (
        <button
          type="button"
          disabled={disabled}
          style={{
            ...baseStyle,
            background:
              "linear-gradient(135deg, var(--preview-accent), #8b5cf6)",
            color: "white",
            ...disabledStyles,
          }}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="button"
          disabled={disabled}
          style={{
            ...baseStyle,
            backgroundColor: "var(--preview-accent)",
            color: "white",
            ...disabledStyles,
          }}
        >
          {children}
        </button>
      );
  }
}
