import type { UserPreferences } from "../../types/preferences";
import { Icon } from "../Icon";
import {
  getBadgeStyles,
  getBorderUsageStyles,
  getCardStyles,
  getLineHeight,
  getLinkStyles,
} from "../../utils/styleHelpers";

interface LandingPreviewProps {
  preferences: UserPreferences;
}

/**
 * Landing page preview - shows hero, features, and CTA sections
 * All styles are driven by CSS variables from preferences
 */
export function LandingPreview({ preferences }: LandingPreviewProps) {
  const buttonStyle = preferences.buttonStyle || "filled";
  const cardStyle = preferences.cardStyle || "filled";
  const badgeStyle = preferences.badgeStyle || "subtle";
  const linkStyle = preferences.linkStyle || "color";
  const lineHeight = preferences.lineHeight || "normal";
  const textAlignment = preferences.textAlignment || "left";
  const fontWeight = preferences.fontWeight || "regular";
  const borderUsage = preferences.borderUsage || "subtle";

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
        fontWeight: weights.normal,
      }}
    >
      {/* Hero */}
      <section
        className="text-center"
        style={{
          padding: "var(--preview-padding-lg)",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          textAlign: textAlignment as "left" | "center" | "justify",
        }}
      >
        <div className="mb-4">
          <span style={getBadgeStyles(badgeStyle, "accent")}>
            100% Local & Private
          </span>
        </div>
        <h1
          className="mx-auto"
          style={{
            fontSize: "var(--preview-text-3xl)",
            fontWeight: weights.bold,
            maxWidth: "var(--preview-container, 48rem)",
          }}
        >
          Discover Your
          <span style={{ color: "var(--preview-accent)" }}>
            {" "}
            Design Preferences
          </span>
        </h1>
        <p
          className="mx-auto mt-4"
          style={{
            color: "var(--preview-text-secondary)",
            fontSize: "var(--preview-text-lg)",
            maxWidth: "var(--preview-container, 36rem)",
          }}
        >
          Stop guessing what you like. Take a visual quiz and watch this entire
          site transform based on your choices.
        </p>
        <div
          className="mt-6 flex justify-center"
          style={{ gap: "var(--preview-gap)" }}
        >
          <PreviewButton style={buttonStyle}>
            <Icon name="play" context="button" />
            Take the Quiz
          </PreviewButton>
          <PreviewButton style={buttonStyle} secondary>
            <Icon name="shuffle" context="button" />
            Shuffle
          </PreviewButton>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          backgroundColor: "var(--preview-bg-surface)",
          padding: "var(--preview-padding-lg)",
          textAlign: textAlignment as "left" | "center" | "justify",
        }}
      >
        <h2
          className="mb-6 text-center"
          style={{
            fontSize: "var(--preview-text-2xl)",
            fontWeight: weights.bold,
          }}
        >
          How It Works
        </h2>
        <div
          className="mx-auto grid grid-cols-1 sm:grid-cols-3"
          style={{
            gap: "var(--preview-gap)",
            maxWidth: "var(--preview-container, 56rem)",
          }}
        >
          <FeatureCard
            icon="lightning"
            title="Visual Comparisons"
            description="See options side-by-side and pick what feels right"
            cardStyle={cardStyle}
            borderUsage={borderUsage}
            fontWeights={weights}
          />
          <FeatureCard
            icon="shield"
            title="Live Preview"
            description="Watch the site transform as you answer each question"
            cardStyle={cardStyle}
            borderUsage={borderUsage}
            fontWeights={weights}
          />
          <FeatureCard
            icon="scale"
            title="Export Results"
            description="Get your preferences as markdown or JSON"
            cardStyle={cardStyle}
            borderUsage={borderUsage}
            fontWeights={weights}
          />
        </div>
      </section>

      {/* Stats */}
      <section
        className="text-center"
        style={{
          padding: "var(--preview-padding-lg)",
          textAlign: textAlignment as "left" | "center" | "justify",
        }}
      >
        <div
          className="mx-auto grid grid-cols-3"
          style={{
            gap: "var(--preview-gap-lg)",
            maxWidth: "var(--preview-container, 48rem)",
          }}
        >
          <StatItem value="10" label="Questions" fontWeights={weights} />
          <StatItem value="11" label="Preferences" fontWeights={weights} />
          <StatItem value="100%" label="Local" fontWeights={weights} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-center"
        style={{
          backgroundColor: "var(--preview-bg-surface)",
          padding: "var(--preview-padding-lg)",
          textAlign: textAlignment as "left" | "center" | "justify",
        }}
      >
        <h2
          style={{
            fontSize: "var(--preview-text-2xl)",
            fontWeight: weights.bold,
          }}
        >
          Ready to discover your style?
        </h2>
        <p
          className="mt-2"
          style={{
            color: "var(--preview-text-secondary)",
            fontSize: "var(--preview-text-base)",
          }}
        >
          No account needed. Your preferences stay in your browser.
        </p>
        <div className="mt-4">
          <PreviewButton style={buttonStyle}>
            <Icon name="play" context="button" />
            Start the Quiz
          </PreviewButton>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "var(--preview-padding)",
          ...getBorderUsageStyles(borderUsage),
          borderBottom: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: "var(--preview-container, 56rem)" }}
        >
          <span
            style={{
              color: "var(--preview-text-secondary)",
              fontSize: "var(--preview-text-sm)",
            }}
          >
            Design Preference Discovery by Adam
          </span>
          <div className="flex" style={{ gap: "var(--preview-gap-lg)" }}>
            <FooterLink linkStyle={linkStyle}>GitHub</FooterLink>
            <FooterLink linkStyle={linkStyle}>About</FooterLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterLink({
  children,
  linkStyle,
}: {
  children: React.ReactNode;
  linkStyle: string;
}) {
  const linkStyles = getLinkStyles(linkStyle);
  return (
    <button
      type="button"
      className="transition-colors"
      style={{
        ...linkStyles,
        color: "var(--preview-text-secondary)",
        fontSize: "var(--preview-text-sm)",
        transitionDuration: "var(--preview-duration)",
      }}
    >
      {children}
    </button>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  cardStyle,
  borderUsage,
  fontWeights,
}: {
  icon: "lightning" | "shield" | "scale";
  title: string;
  description: string;
  cardStyle: string;
  borderUsage: string;
  fontWeights: { normal: number; semibold: number; bold: number };
}) {
  return (
    <div
      style={{
        ...getCardStyles(cardStyle),
        ...getBorderUsageStyles(borderUsage),
        padding: "var(--preview-padding-lg)",
      }}
    >
      <div
        className="mb-3 flex items-center justify-center text-white"
        style={{
          backgroundColor: "var(--preview-accent)",
          borderRadius: "var(--preview-radius)",
          width: "var(--preview-landing-icon-size, 40px)",
          height: "var(--preview-landing-icon-size, 40px)",
          padding: "0.5rem",
        }}
      >
        <Icon name={icon} context="landing" />
      </div>
      <h3
        style={{
          fontSize: "var(--preview-text-base)",
          fontWeight: fontWeights.semibold,
        }}
      >
        {title}
      </h3>
      <p
        className="mt-1"
        style={{
          color: "var(--preview-text-secondary)",
          fontSize: "var(--preview-text-sm)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function StatItem({
  value,
  label,
  fontWeights,
}: {
  value: string;
  label: string;
  fontWeights: { normal: number; semibold: number; bold: number };
}) {
  return (
    <div>
      <p
        style={{
          fontSize: "var(--preview-text-2xl)",
          color: "var(--preview-accent)",
          fontWeight: fontWeights.bold,
        }}
      >
        {value}
      </p>
      <p
        style={{
          color: "var(--preview-text-secondary)",
          fontSize: "var(--preview-text-sm)",
        }}
      >
        {label}
      </p>
    </div>
  );
}

function PreviewButton({
  children,
  style,
  secondary = false,
  small = false,
}: {
  children: React.ReactNode;
  style: string;
  secondary?: boolean;
  small?: boolean;
}) {
  const baseStyle: React.CSSProperties = {
    padding: small ? "0.5rem 1rem" : "var(--preview-padding)",
    borderRadius: "var(--preview-button-radius)",
    fontSize: "var(--preview-text-sm)",
    fontWeight: 600,
    transitionDuration: "var(--preview-duration)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  if (secondary) {
    return (
      <button
        type="button"
        style={{
          ...baseStyle,
          border: "1px solid var(--preview-border)",
          backgroundColor: "transparent",
          color: "var(--preview-text)",
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
          style={{
            ...baseStyle,
            border: "2px solid var(--preview-accent)",
            backgroundColor: "transparent",
            color: "var(--preview-accent)",
          }}
        >
          {children}
        </button>
      );
    case "ghost":
      return (
        <button
          type="button"
          style={{
            ...baseStyle,
            backgroundColor: "transparent",
            color: "var(--preview-accent)",
          }}
        >
          {children}
        </button>
      );
    case "gradient":
      return (
        <button
          type="button"
          style={{
            ...baseStyle,
            background:
              "linear-gradient(135deg, var(--preview-accent), #8b5cf6)",
            color: "white",
          }}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="button"
          style={{
            ...baseStyle,
            backgroundColor: "var(--preview-accent)",
            color: "white",
          }}
        >
          {children}
        </button>
      );
  }
}
