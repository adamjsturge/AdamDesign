import { useEffect, useState } from "react";

import type {
  PreferenceQuestion,
  QuestionOption,
} from "../../types/preferences";
import { loadFont } from "../../utils/fontLoader";

interface OptionCardProps {
  option: QuestionOption;
  question: PreferenceQuestion;
  isSelected: boolean;
  onSelect: () => void;
}

export function OptionCard({
  option,
  question,
  isSelected,
  onSelect,
}: OptionCardProps) {
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
      {/* Preview based on question type */}
      <OptionPreview option={option} question={question} />

      {/* Label and description */}
      <div>
        <span className="font-semibold">{option.label}</span>
        <p
          style={{
            fontSize: "var(--preview-text-sm, 0.875rem)",
            color: isSelected
              ? "rgba(255, 255, 255, 0.8)"
              : "var(--preview-text-secondary, #94a3b8)",
            marginTop: "0.25rem",
          }}
        >
          {option.description}
        </p>
      </div>
    </button>
  );
}

// Renders a visual preview based on the question type
function OptionPreview({
  option,
  question,
}: {
  option: QuestionOption;
  question: PreferenceQuestion;
}) {
  switch (question.id) {
    case "borderRadius":
      return <BorderRadiusPreview option={option} />;

    case "spacingDensity":
      return <SpacingPreview option={option} />;

    case "shadowStyle":
      return <ShadowPreview option={option} />;

    case "animationStyle":
      return (
        <AnimationPreview
          duration={option.cssVars?.["--preview-duration"] || "0ms"}
        />
      );

    case "typographyScale":
      return <TypographyPreview option={option} />;

    case "fontFamily":
      return (
        <FontPreview
          fontFamily={option.cssVars?.["--preview-font"] || "sans-serif"}
          fontUrl={option.cssVars?.["--preview-font-url"] || ""}
        />
      );

    case "buttonStyle":
      return <ButtonStylePreview style={option.id} />;

    case "inputStyle":
      return <InputStylePreview style={option.id} />;

    case "containerWidth":
      return <ContainerWidthPreview option={option} />;

    case "cardStyle":
      return <CardStylePreview style={option.id} />;

    case "badgeStyle":
      return <BadgeStylePreview style={option.id} />;

    case "linkStyle":
      return <LinkStylePreview style={option.id} />;

    case "focusStyle":
      return <FocusStylePreview style={option.id} />;

    case "hoverStyle":
      return <HoverStylePreview style={option.id} />;

    case "lineHeight":
      return <LineHeightPreview option={option} />;

    case "textAlignment":
      return <TextAlignmentPreview style={option.id} />;

    case "disabledState":
      return <DisabledStatePreview style={option.id} />;

    default:
      return <div className="bg-brand-grayDark h-16 w-full" />;
  }
}

// Preview showing button, input, and card corner
function BorderRadiusPreview({ option }: { option: QuestionOption }) {
  const radius = option.cssVars?.["--preview-radius"] || "0";

  return (
    <div
      className="flex w-full items-center gap-2"
      style={{ height: "4rem", padding: "0.5rem" }}
    >
      {/* Button */}
      <div
        className="flex items-center justify-center bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white"
        style={{ borderRadius: radius }}
      >
        Save
      </div>
      {/* Input */}
      <div
        className="bg-brand-grayDark text-brand-gray flex-1 px-2 py-1.5 text-xs"
        style={{ borderRadius: radius }}
      >
        Search...
      </div>
      {/* Card corner */}
      <div
        className="bg-brand-grayDark h-8 w-8"
        style={{ borderRadius: radius }}
      />
    </div>
  );
}

// Preview showing a list with items demonstrating the gap
function SpacingPreview({ option }: { option: QuestionOption }) {
  const gap = option.cssVars?.["--preview-gap"] || "0.5rem";
  const padding = option.cssVars?.["--preview-padding"] || "0.75rem";

  return (
    <div
      className="bg-brand-black flex w-full flex-col"
      style={{ gap, padding, height: "5rem" }}
    >
      <div className="bg-brand-grayDark flex h-4 items-center gap-2 px-2">
        <div className="h-2 w-2 bg-blue-500" />
        <div className="bg-brand-gray h-2 flex-1 opacity-50" />
      </div>
      <div className="bg-brand-grayDark flex h-4 items-center gap-2 px-2">
        <div className="h-2 w-2 bg-blue-500" />
        <div className="bg-brand-gray h-2 flex-1 opacity-50" />
      </div>
      <div className="bg-brand-grayDark flex h-4 items-center gap-2 px-2">
        <div className="h-2 w-2 bg-blue-500" />
        <div className="bg-brand-gray h-2 flex-1 opacity-50" />
      </div>
    </div>
  );
}

// Preview showing a card floating with shadow
function ShadowPreview({ option }: { option: QuestionOption }) {
  const shadow = option.cssVars?.["--preview-shadow"] || "none";

  return (
    <div
      className="bg-brand-black flex w-full items-center justify-center"
      style={{ height: "5rem", padding: "0.75rem" }}
    >
      <div
        className="bg-brand-grayDark flex h-full w-3/4 flex-col justify-between p-2"
        style={{ boxShadow: shadow }}
      >
        <div className="bg-brand-gray h-2 w-1/2 opacity-70" />
        <div className="bg-brand-gray h-2 w-3/4 opacity-40" />
        <div className="h-2 w-1/3 bg-blue-500" />
      </div>
    </div>
  );
}

// Interactive animation preview - hover/tap to trigger
function AnimationPreview({ duration }: { duration: string }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="bg-brand-black relative flex w-full cursor-pointer items-center justify-center overflow-hidden"
      style={{ height: "5rem" }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsActive((prev) => !prev);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.stopPropagation();
          setIsActive((prev) => !prev);
        }
      }}
      aria-label="Hover or tap to preview animation speed"
    >
      <span
        className="text-brand-gray absolute top-1 left-2"
        style={{ fontSize: "0.625rem" }}
      >
        Hover to feel
      </span>
      <div className="flex items-center gap-4">
        {/* Animated square */}
        <div
          className="h-10 w-10"
          style={{
            transitionProperty: "transform, background-color, border-radius",
            transitionDuration: duration,
            transitionTimingFunction: "ease-in-out",
            transform: isActive ? "scale(1.2) rotate(45deg)" : "scale(1)",
            backgroundColor: isActive ? "#8b5cf6" : "#3b82f6",
            borderRadius: isActive ? "50%" : "0",
          }}
        />
        {/* Duration label */}
        <span className="text-brand-gray text-xs">{duration}</span>
      </div>
    </div>
  );
}

// Preview showing headline, body, and caption together
function TypographyPreview({ option }: { option: QuestionOption }) {
  const textLg = option.cssVars?.["--preview-text-lg"] || "1.125rem";
  const textBase = option.cssVars?.["--preview-text-base"] || "1rem";
  const textSm = option.cssVars?.["--preview-text-sm"] || "0.875rem";

  return (
    <div
      className="bg-brand-black flex w-full flex-col justify-center"
      style={{ height: "5rem", padding: "0.75rem", gap: "0.25rem" }}
    >
      <span
        className="font-bold text-white"
        style={{ fontSize: textLg, lineHeight: 1.2 }}
      >
        Heading
      </span>
      <span
        className="text-brand-gray"
        style={{ fontSize: textBase, lineHeight: 1.3 }}
      >
        Body text here
      </span>
      <span
        className="text-brand-gray opacity-60"
        style={{ fontSize: textSm, lineHeight: 1.3 }}
      >
        Caption text
      </span>
    </div>
  );
}

// Preview showing a sentence with the font
function FontPreview({
  fontFamily,
  fontUrl,
}: {
  fontFamily: string;
  fontUrl: string;
}) {
  useEffect(() => {
    if (fontUrl) {
      loadFont(fontUrl);
    }
  }, [fontUrl]);

  return (
    <div
      className="bg-brand-black flex w-full flex-col justify-center"
      style={{ height: "5rem", padding: "0.75rem", fontFamily }}
    >
      <span className="text-lg font-bold text-white">The quick brown</span>
      <span className="text-brand-gray text-sm">
        fox jumps over the lazy dog
      </span>
    </div>
  );
}

// Preview showing primary, secondary, and disabled button states
function ButtonStylePreview({ style }: { style: string }) {
  const getButtonStyles = (variant: "primary" | "secondary" | "disabled") => {
    const base: React.CSSProperties = {
      padding: "0.25rem 0.5rem",
      fontSize: "0.625rem",
      fontWeight: 600,
    };

    if (variant === "disabled") {
      return { ...base, opacity: 0.5, cursor: "not-allowed" };
    }

    switch (style) {
      case "filled":
        return {
          ...base,
          backgroundColor: variant === "primary" ? "#3b82f6" : "#475569",
          color: "#ffffff",
        };
      case "outline":
        return {
          ...base,
          border: `1px solid ${variant === "primary" ? "#3b82f6" : "#475569"}`,
          color: variant === "primary" ? "#3b82f6" : "#94a3b8",
          backgroundColor: "transparent",
        };
      case "ghost":
        return {
          ...base,
          color: variant === "primary" ? "#3b82f6" : "#94a3b8",
          backgroundColor: "transparent",
        };
      case "gradient":
        return {
          ...base,
          background:
            variant === "primary"
              ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
              : "#475569",
          color: "#ffffff",
        };
      default:
        return {
          ...base,
          backgroundColor: variant === "primary" ? "#3b82f6" : "#475569",
          color: "#ffffff",
        };
    }
  };

  return (
    <div
      className="bg-brand-black flex w-full items-center gap-2"
      style={{ height: "4rem", padding: "0.75rem" }}
    >
      <span style={getButtonStyles("primary")}>Primary</span>
      <span style={getButtonStyles("secondary")}>Secondary</span>
      <span style={{ ...getButtonStyles("primary"), opacity: 0.5 }}>
        Disabled
      </span>
    </div>
  );
}

// Preview showing input with label and placeholder
function InputStylePreview({ style }: { style: string }) {
  const getInputStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      padding: "0.375rem 0.5rem",
      fontSize: "0.625rem",
      color: "#94a3b8",
      flex: 1,
    };

    switch (style) {
      case "filled":
        return { ...base, backgroundColor: "#1e293b", border: "none" };
      case "outlined":
        return {
          ...base,
          backgroundColor: "transparent",
          border: "1px solid #475569",
        };
      case "underlined":
        return {
          ...base,
          backgroundColor: "transparent",
          border: "none",
          borderBottom: "1px solid #475569",
        };
      default:
        return { ...base, backgroundColor: "#1e293b", border: "none" };
    }
  };

  return (
    <div
      className="bg-brand-black flex w-full flex-col gap-1"
      style={{ height: "5rem", padding: "0.75rem" }}
    >
      <span className="text-brand-gray" style={{ fontSize: "0.625rem" }}>
        Email address
      </span>
      <div style={getInputStyles()}>you@example.com</div>
      <span
        className="text-brand-gray opacity-60"
        style={{ fontSize: "0.5rem" }}
      >
        We'll never share your email
      </span>
    </div>
  );
}

// Preview showing content width in a frame
function ContainerWidthPreview({ option }: { option: QuestionOption }) {
  const widthPercent =
    option.id === "narrow"
      ? "48%"
      : option.id === "medium"
        ? "64%"
        : option.id === "wide"
          ? "80%"
          : "100%";

  return (
    <div
      className="bg-brand-black flex w-full items-center justify-center"
      style={{ height: "4rem", padding: "0.5rem" }}
    >
      {/* Outer frame representing viewport */}
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{ border: "1px solid #334155" }}
      >
        {/* Inner content area */}
        <div
          className="bg-brand-grayDark flex h-3/4 items-center justify-center"
          style={{ width: widthPercent }}
        >
          <span className="text-brand-gray text-xs">{option.label}</span>
        </div>
      </div>
    </div>
  );
}

// Preview showing card style variations
function CardStylePreview({ style }: { style: string }) {
  const getCardStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      padding: "0.5rem",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    };

    switch (style) {
      case "bordered":
        return {
          ...base,
          border: "1px solid #475569",
          backgroundColor: "transparent",
        };
      case "filled":
        return {
          ...base,
          backgroundColor: "#1e293b",
          border: "none",
        };
      case "elevated":
        return {
          ...base,
          backgroundColor: "#1e293b",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.3)",
        };
      case "transparent":
        return {
          ...base,
          backgroundColor: "transparent",
          borderBottom: "1px solid #334155",
        };
      default:
        return base;
    }
  };

  return (
    <div
      className="bg-brand-black flex w-full gap-2"
      style={{ height: "5rem", padding: "0.5rem" }}
    >
      <div style={getCardStyles()}>
        <div className="bg-brand-gray h-2 w-3/4 opacity-70" />
        <div className="bg-brand-gray h-2 w-1/2 opacity-40" />
      </div>
      <div style={getCardStyles()}>
        <div className="bg-brand-gray h-2 w-2/3 opacity-70" />
        <div className="bg-brand-gray h-2 w-1/3 opacity-40" />
      </div>
    </div>
  );
}

// Preview showing badge/tag style variations
function BadgeStylePreview({ style }: { style: string }) {
  const getBadgeStyles = (
    color: "blue" | "green" | "gray",
  ): React.CSSProperties => {
    const colors = {
      blue: { bg: "#3b82f6", text: "#3b82f6", subtle: "#3b82f620" },
      green: { bg: "#22c55e", text: "#22c55e", subtle: "#22c55e20" },
      gray: { bg: "#64748b", text: "#94a3b8", subtle: "#64748b20" },
    };
    const c = colors[color];

    const base: React.CSSProperties = {
      padding: "0.125rem 0.375rem",
      fontSize: "0.5rem",
      fontWeight: 600,
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
          borderRadius: "9999px",
        };
      default:
        return base;
    }
  };

  return (
    <div
      className="bg-brand-black flex w-full items-center gap-2"
      style={{ height: "4rem", padding: "0.75rem" }}
    >
      <span style={getBadgeStyles("blue")}>Active</span>
      <span style={getBadgeStyles("green")}>Success</span>
      <span style={getBadgeStyles("gray")}>Draft</span>
    </div>
  );
}

// Preview showing link style variations
function LinkStylePreview({ style }: { style: string }) {
  const getLinkStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      color: "#3b82f6",
      fontSize: "0.75rem",
      cursor: "pointer",
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
          borderBottom: "1px dashed #3b82f680",
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
  };

  return (
    <div
      className="bg-brand-black flex w-full flex-col justify-center gap-1"
      style={{ height: "5rem", padding: "0.75rem" }}
    >
      <p className="text-brand-gray text-xs">
        Read our <span style={getLinkStyles()}>documentation</span> for more.
      </p>
      <p className="text-brand-gray text-xs">
        Visit the <span style={getLinkStyles()}>help center</span> or{" "}
        <span style={getLinkStyles()}>contact us</span>.
      </p>
    </div>
  );
}

// Preview showing focus indicator styles
function FocusStylePreview({ style }: { style: string }) {
  const getFocusStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      padding: "0.375rem 0.75rem",
      fontSize: "0.625rem",
      fontWeight: 600,
      backgroundColor: "#3b82f6",
      color: "#ffffff",
    };

    switch (style) {
      case "ring":
        return {
          ...base,
          outline: "2px solid #3b82f6",
          outlineOffset: "2px",
        };
      case "outline":
        return {
          ...base,
          outline: "2px solid #ffffff",
          outlineOffset: "0px",
        };
      case "glow":
        return {
          ...base,
          boxShadow: "0 0 0 3px #3b82f680",
        };
      case "border":
        return {
          ...base,
          border: "2px solid #ffffff",
        };
      default:
        return base;
    }
  };

  return (
    <div
      className="bg-brand-black flex w-full items-center justify-center gap-3"
      style={{ height: "5rem", padding: "0.75rem" }}
    >
      <span style={getFocusStyles()}>Focused</span>
      <span
        className="text-brand-gray"
        style={{ fontSize: "0.5rem", maxWidth: "4rem" }}
      >
        {style === "ring" && "Offset ring around element"}
        {style === "outline" && "Direct outline on element"}
        {style === "glow" && "Soft glow shadow effect"}
        {style === "border" && "Accent border highlight"}
      </span>
    </div>
  );
}

// Interactive hover effect preview
function HoverStylePreview({ style }: { style: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const getItemStyles = (hovered: boolean): React.CSSProperties => {
    const base: React.CSSProperties = {
      padding: "0.375rem 0.5rem",
      fontSize: "0.625rem",
      transition: "all 150ms ease-in-out",
      cursor: "pointer",
    };

    if (!hovered) {
      return {
        ...base,
        backgroundColor: "transparent",
        color: "#94a3b8",
      };
    }

    switch (style) {
      case "background":
        return {
          ...base,
          backgroundColor: "#334155",
          color: "#f8fafc",
        };
      case "border":
        return {
          ...base,
          backgroundColor: "transparent",
          color: "#f8fafc",
          border: "1px solid #475569",
        };
      case "opacity":
        return {
          ...base,
          backgroundColor: "transparent",
          color: "#f8fafc",
          opacity: 0.8,
        };
      case "accent":
        return {
          ...base,
          backgroundColor: "transparent",
          color: "#3b82f6",
        };
      default:
        return base;
    }
  };

  return (
    <div
      className="bg-brand-black relative flex w-full flex-col gap-1"
      style={{ height: "5rem", padding: "0.5rem", paddingTop: "1rem" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="text-brand-gray absolute top-1 left-2"
        style={{ fontSize: "0.5rem" }}
      >
        Hover to preview
      </span>
      <div style={getItemStyles(isHovered)}>Menu Item One</div>
      <div style={getItemStyles(false)}>Menu Item Two</div>
      <div style={getItemStyles(false)}>Menu Item Three</div>
    </div>
  );
}

// Preview showing line height variations
function LineHeightPreview({ option }: { option: QuestionOption }) {
  const leading = option.cssVars?.["--preview-leading"] || "1.5";

  return (
    <div
      className="bg-brand-black flex w-full flex-col justify-center"
      style={{ height: "5rem", padding: "0.75rem" }}
    >
      <p
        className="text-brand-gray"
        style={{ fontSize: "0.625rem", lineHeight: leading }}
      >
        The quick brown fox jumps over the lazy dog. This sample text
        demonstrates how line height affects readability across multiple lines
        of content.
      </p>
    </div>
  );
}

// Preview showing text alignment options
function TextAlignmentPreview({ style }: { style: string }) {
  return (
    <div
      className="bg-brand-black flex w-full flex-col justify-center gap-1"
      style={{ height: "5rem", padding: "0.75rem" }}
    >
      <p
        className="font-semibold text-white"
        style={{
          fontSize: "0.75rem",
          textAlign: style as "left" | "center" | "justify",
        }}
      >
        Section Heading
      </p>
      <p
        className="text-brand-gray"
        style={{
          fontSize: "0.625rem",
          textAlign: style as "left" | "center" | "justify",
        }}
      >
        This is sample body text that demonstrates how your content will align.
        Notice how the text flows.
      </p>
    </div>
  );
}

// Preview showing disabled state variations
function DisabledStatePreview({ style }: { style: string }) {
  const getDisabledStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      padding: "0.375rem 0.75rem",
      fontSize: "0.625rem",
      fontWeight: 600,
      backgroundColor: "#3b82f6",
      color: "#ffffff",
    };

    switch (style) {
      case "opacity":
        return { ...base, opacity: 0.5, cursor: "not-allowed" };
      case "grayscale":
        return {
          ...base,
          filter: "grayscale(100%)",
          cursor: "not-allowed",
        };
      case "muted":
        return {
          ...base,
          backgroundColor: "#475569",
          color: "#94a3b8",
          cursor: "not-allowed",
        };
      default:
        return { ...base, opacity: 0.5, cursor: "not-allowed" };
    }
  };

  return (
    <div
      className="bg-brand-black flex w-full items-center justify-center gap-3"
      style={{ height: "5rem", padding: "0.75rem" }}
    >
      <div className="flex flex-col items-center gap-1">
        <span style={getDisabledStyles()}>Disabled</span>
        <span className="text-brand-gray" style={{ fontSize: "0.5rem" }}>
          {style === "opacity" && "50% transparent"}
          {style === "grayscale" && "No color"}
          {style === "muted" && "Subtle colors"}
        </span>
      </div>
    </div>
  );
}
