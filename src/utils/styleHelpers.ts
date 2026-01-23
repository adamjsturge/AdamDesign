/**
 * Style helper functions for dynamic preferences
 * These return CSS style objects based on preference values
 */

/**
 * Get card styles based on cardStyle preference
 */
export function getCardStyles(
  style: string,
  shadow: string = "none",
): React.CSSProperties {
  const base: React.CSSProperties = {
    padding: "var(--preview-padding)",
    borderRadius: "var(--preview-radius)",
    transitionDuration: "var(--preview-duration)",
  };

  switch (style) {
    case "bordered":
      return {
        ...base,
        border: "1px solid var(--preview-border)",
        backgroundColor: "transparent",
      };
    case "filled":
      return {
        ...base,
        backgroundColor: "var(--preview-bg-surface)",
        border: "none",
      };
    case "elevated":
      return {
        ...base,
        backgroundColor: "var(--preview-bg-surface)",
        boxShadow:
          shadow === "none"
            ? "0 4px 6px -1px rgb(0 0 0 / 0.1)"
            : "var(--preview-shadow)",
      };
    case "transparent":
      return {
        ...base,
        backgroundColor: "transparent",
        borderBottom: "1px solid var(--preview-border)",
        borderRadius: 0,
      };
    default:
      return {
        ...base,
        backgroundColor: "var(--preview-bg-surface)",
      };
  }
}

/**
 * Get badge styles based on badgeStyle preference
 */
export function getBadgeStyles(
  style: string,
  color: "accent" | "success" | "warning" | "error" | "neutral" = "accent",
): React.CSSProperties {
  const colors = {
    accent: {
      bg: "var(--preview-accent)",
      text: "var(--preview-accent)",
      subtle: "color-mix(in srgb, var(--preview-accent) 15%, transparent)",
    },
    success: {
      bg: "#22c55e",
      text: "#22c55e",
      subtle: "rgba(34, 197, 94, 0.15)",
    },
    warning: {
      bg: "#f59e0b",
      text: "#f59e0b",
      subtle: "rgba(245, 158, 11, 0.15)",
    },
    error: {
      bg: "#ef4444",
      text: "#ef4444",
      subtle: "rgba(239, 68, 68, 0.15)",
    },
    neutral: {
      bg: "var(--preview-text-secondary)",
      text: "var(--preview-text-secondary)",
      subtle:
        "color-mix(in srgb, var(--preview-text-secondary) 15%, transparent)",
    },
  };
  const c = colors[color];

  const base: React.CSSProperties = {
    padding: "0.125rem 0.5rem",
    fontSize: "var(--preview-text-xs)",
    fontWeight: 500,
    display: "inline-block",
    borderRadius: style === "pill" ? "9999px" : "var(--preview-radius)",
  };

  switch (style) {
    case "subtle":
      return {
        ...base,
        backgroundColor: c.subtle,
        color: c.text,
      };
    case "outlined":
      return {
        ...base,
        border: `1px solid ${c.text}`,
        color: c.text,
        backgroundColor: "transparent",
      };
    case "solid":
      return {
        ...base,
        backgroundColor: c.bg,
        color: "#ffffff",
      };
    case "pill":
      return {
        ...base,
        backgroundColor: c.subtle,
        color: c.text,
      };
    default:
      return base;
  }
}

/**
 * Get link styles based on linkStyle preference
 */
export function getLinkStyles(style: string): React.CSSProperties {
  const base: React.CSSProperties = {
    color: "var(--preview-accent)",
    cursor: "pointer",
    transitionDuration: "var(--preview-duration)",
  };

  switch (style) {
    case "underline":
      return {
        ...base,
        textDecoration: "underline",
      };
    case "color":
      return {
        ...base,
        textDecoration: "none",
      };
    case "underline-hover":
      return {
        ...base,
        textDecoration: "none",
      };
    case "bold":
      return {
        ...base,
        textDecoration: "none",
        fontWeight: 600,
      };
    default:
      return base;
  }
}

/**
 * Get focus styles based on focusStyle preference
 * Returns CSS for the :focus state
 */
export function getFocusStyles(style: string): React.CSSProperties {
  switch (style) {
    case "ring":
      return {
        outline: "2px solid var(--preview-accent)",
        outlineOffset: "2px",
      };
    case "outline":
      return {
        outline: "2px solid var(--preview-accent)",
        outlineOffset: "0px",
      };
    case "glow":
      return {
        outline: "none",
        boxShadow:
          "0 0 0 3px color-mix(in srgb, var(--preview-accent) 50%, transparent)",
      };
    case "border":
      return {
        outline: "none",
        border: "2px solid var(--preview-accent)",
      };
    default:
      return {
        outline: "2px solid var(--preview-accent)",
        outlineOffset: "2px",
      };
  }
}

/**
 * Get hover styles based on hoverStyle preference
 */
export function getHoverStyles(
  style: string,
  isHovered: boolean,
): React.CSSProperties {
  if (!isHovered) {
    return {
      transitionDuration: "var(--preview-duration)",
    };
  }

  switch (style) {
    case "background":
      return {
        backgroundColor: "var(--preview-bg-surface)",
        transitionDuration: "var(--preview-duration)",
      };
    case "border":
      return {
        border: "1px solid var(--preview-border)",
        transitionDuration: "var(--preview-duration)",
      };
    case "opacity":
      return {
        opacity: 0.7,
        transitionDuration: "var(--preview-duration)",
      };
    case "accent":
      return {
        color: "var(--preview-accent)",
        transitionDuration: "var(--preview-duration)",
      };
    default:
      return {
        backgroundColor: "var(--preview-bg-surface)",
        transitionDuration: "var(--preview-duration)",
      };
  }
}

/**
 * Get line height value based on lineHeight preference
 */
export function getLineHeight(style: string): string {
  switch (style) {
    case "tight":
      return "1.25";
    case "normal":
      return "1.5";
    case "relaxed":
      return "1.75";
    default:
      return "1.5";
  }
}

/**
 * Get disabled styles based on disabledState preference
 */
export function getDisabledStyles(style: string): React.CSSProperties {
  switch (style) {
    case "opacity":
      return { opacity: 0.5, cursor: "not-allowed" };
    case "grayscale":
      return { filter: "grayscale(100%)", cursor: "not-allowed" };
    case "muted":
      return {
        color: "var(--preview-text-secondary)",
        backgroundColor: "var(--preview-bg-surface)",
        cursor: "not-allowed",
      };
    default:
      return { opacity: 0.5, cursor: "not-allowed" };
  }
}

/**
 * Get loading style type for rendering different loading indicators
 */
export function getLoadingType(
  style: string,
): "skeleton" | "spinner" | "progress" | "dots" {
  if (
    style === "skeleton" ||
    style === "spinner" ||
    style === "progress" ||
    style === "dots"
  ) {
    return style;
  }
  return "skeleton";
}

/**
 * Get border styles based on borderUsage preference
 */
export function getBorderUsageStyles(style: string): React.CSSProperties {
  switch (style) {
    case "none":
      return { border: "none" };
    case "subtle":
      return { border: "1px solid var(--preview-border)" };
    case "prominent":
      return { border: "2px solid var(--preview-border)" };
    case "accent":
      return { border: "2px solid var(--preview-accent)" };
    default:
      return { border: "1px solid var(--preview-border)" };
  }
}

/**
 * Get button styles based on buttonStyle preference
 */
export function getButtonStyles(
  style: string,
  variant: "primary" | "secondary" = "primary",
): React.CSSProperties {
  const base: React.CSSProperties = {
    borderRadius: "var(--preview-radius, 0)",
    transitionDuration: "var(--preview-duration, 150ms)",
  };

  switch (style) {
    case "filled":
      return {
        ...base,
        backgroundColor:
          variant === "primary"
            ? "var(--preview-accent, #3b82f6)"
            : "var(--preview-bg-surface, #475569)",
        color: "#ffffff",
        border: "none",
      };
    case "outline":
      return {
        ...base,
        border:
          variant === "primary"
            ? "2px solid var(--preview-accent, #3b82f6)"
            : "2px solid var(--preview-border, #475569)",
        color:
          variant === "primary"
            ? "var(--preview-accent, #3b82f6)"
            : "var(--preview-text-secondary, #94a3b8)",
        backgroundColor: "transparent",
      };
    case "ghost":
      return {
        ...base,
        color:
          variant === "primary"
            ? "var(--preview-accent, #3b82f6)"
            : "var(--preview-text-secondary, #94a3b8)",
        backgroundColor: "transparent",
        border: "none",
      };
    case "gradient":
      return {
        ...base,
        background:
          variant === "primary"
            ? "linear-gradient(135deg, var(--preview-accent, #3b82f6), #8b5cf6)"
            : "var(--preview-bg-surface, #475569)",
        color: "#ffffff",
        border: "none",
      };
    default:
      return {
        ...base,
        backgroundColor:
          variant === "primary"
            ? "var(--preview-accent, #3b82f6)"
            : "var(--preview-bg-surface, #475569)",
        color: "#ffffff",
        border: "none",
      };
  }
}
