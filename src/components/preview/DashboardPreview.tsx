import type { UserPreferences } from "../../types/preferences";
import { Icon } from "../Icon";
import {
  getBadgeStyles,
  getBorderUsageStyles,
  getCardStyles,
  getLineHeight,
  getLinkStyles,
  getLoadingType,
} from "../../utils/styleHelpers";

interface DashboardPreviewProps {
  preferences: UserPreferences;
}

/**
 * Dashboard preview page - shows stats, charts, and tables
 * All styles are driven by CSS variables from preferences
 */
export function DashboardPreview({ preferences }: DashboardPreviewProps) {
  const buttonStyle = preferences.buttonStyle || "filled";
  const inputStyle = preferences.inputStyle || "filled";
  const cardStyle = preferences.cardStyle || "filled";
  const badgeStyle = preferences.badgeStyle || "subtle";
  const linkStyle = preferences.linkStyle || "color";
  const lineHeight = preferences.lineHeight || "normal";
  const textAlignment = preferences.textAlignment || "left";
  const fontWeight = preferences.fontWeight || "regular";
  const loadingState = preferences.loadingState || "skeleton";
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
  const loadingType = getLoadingType(loadingState);

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
            Dashboard
          </h1>
          <nav className="flex" style={{ gap: "var(--preview-gap)" }}>
            <NavLink active linkStyle={linkStyle}>
              Overview
            </NavLink>
            <NavLink linkStyle={linkStyle}>Analytics</NavLink>
            <NavLink linkStyle={linkStyle}>Reports</NavLink>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main
        className="mx-auto"
        style={{
          padding: "var(--preview-padding-lg)",
          maxWidth: "var(--preview-container, 80rem)",
        }}
      >
        {/* Stats grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: "var(--preview-gap)" }}
        >
          <StatCard
            label="Questions"
            value="10"
            change="complete"
            cardStyle={cardStyle}
            badgeStyle={badgeStyle}
          />
          <StatCard
            label="Preferences"
            value="11"
            change="set"
            cardStyle={cardStyle}
            badgeStyle={badgeStyle}
          />
          <StatCard
            label="Export"
            value="Ready"
            change="md/json"
            cardStyle={cardStyle}
            badgeStyle={badgeStyle}
            badgeColor="accent"
          />
          <StatCard
            label="Privacy"
            value="100%"
            change="local only"
            cardStyle={cardStyle}
            badgeStyle={badgeStyle}
            badgeColor="success"
          />
        </div>

        {/* Charts and table section */}
        <div
          className="mt-4 grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: "var(--preview-gap)" }}
        >
          {/* Chart placeholder */}
          <div
            className="lg:col-span-2"
            style={{
              ...getCardStyles(cardStyle),
              ...getBorderUsageStyles(borderUsage),
            }}
          >
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--preview-text-lg)",
                fontWeight: weights.semibold,
              }}
            >
              Revenue Over Time
            </h2>
            <div className="flex h-32 items-end justify-around">
              {[40, 65, 45, 80, 55, 70, 85].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: "12%",
                    height: `${h}%`,
                    backgroundColor: "var(--preview-accent)",
                    borderRadius: "var(--preview-radius)",
                    transition: "all var(--preview-duration) ease-in-out",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div
            style={{
              ...getCardStyles(cardStyle),
              ...getBorderUsageStyles(borderUsage),
            }}
          >
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--preview-text-lg)",
                fontWeight: weights.semibold,
              }}
            >
              Quick Actions
            </h2>
            <div
              className="flex flex-col"
              style={{ gap: "var(--preview-gap)" }}
            >
              <PreviewButton style={buttonStyle}>
                <Icon name="add" context="button" />
                New Report
              </PreviewButton>
              <PreviewButton style={buttonStyle} secondary>
                <Icon name="download" context="button" />
                Export Data
              </PreviewButton>
              <PreviewInput
                style={inputStyle}
                placeholder="Search..."
                icon={<Icon name="search" context="button" />}
              />
            </div>
          </div>
        </div>

        {/* Loading State Example */}
        <div
          className="mt-4"
          style={{
            ...getCardStyles(cardStyle),
            ...getBorderUsageStyles(borderUsage),
          }}
        >
          <h2
            className="mb-3"
            style={{
              fontSize: "var(--preview-text-lg)",
              fontWeight: weights.semibold,
            }}
          >
            Loading Preview
          </h2>
          <LoadingIndicator type={loadingType} />
        </div>

        {/* Recent activity table */}
        <div
          className="mt-4"
          style={{
            ...getCardStyles(cardStyle),
            ...getBorderUsageStyles(borderUsage),
          }}
        >
          <h2
            className="mb-3"
            style={{
              fontSize: "var(--preview-text-lg)",
              fontWeight: weights.semibold,
            }}
          >
            Recent Activity
          </h2>
          <table className="w-full">
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--preview-border)",
                  color: "var(--preview-text-secondary)",
                  fontSize: "var(--preview-text-sm)",
                }}
              >
                <th className="py-2 text-left font-medium">User</th>
                <th className="py-2 text-left font-medium">Action</th>
                <th className="py-2 text-left font-medium">Time</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "var(--preview-text-sm)" }}>
              <TableRow user="John D." action="Created report" time="2m ago" />
              <TableRow
                user="Sarah K."
                action="Updated profile"
                time="5m ago"
              />
              <TableRow
                user="Mike R."
                action="Downloaded data"
                time="12m ago"
              />
              <TableRow user="Emma L." action="Sent invite" time="1h ago" />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function NavLink({
  children,
  active = false,
  linkStyle,
}: {
  children: React.ReactNode;
  active?: boolean;
  linkStyle: string;
}) {
  const linkStyles = getLinkStyles(linkStyle);
  return (
    <button
      type="button"
      className="transition-colors"
      style={{
        ...linkStyles,
        color: active
          ? "var(--preview-accent)"
          : "var(--preview-text-secondary)",
        fontSize: "var(--preview-text-sm)",
        transitionDuration: "var(--preview-duration)",
      }}
    >
      {children}
    </button>
  );
}

function StatCard({
  label,
  value,
  change,
  cardStyle,
  badgeStyle,
  badgeColor = "success",
}: {
  label: string;
  value: string;
  change: string;
  cardStyle: string;
  badgeStyle: string;
  badgeColor?: "accent" | "success" | "warning" | "error" | "neutral";
}) {
  return (
    <div style={getCardStyles(cardStyle)}>
      <p
        style={{
          color: "var(--preview-text-secondary)",
          fontSize: "var(--preview-text-sm)",
        }}
      >
        {label}
      </p>
      <p className="font-bold" style={{ fontSize: "var(--preview-text-2xl)" }}>
        {value}
      </p>
      <span style={getBadgeStyles(badgeStyle, badgeColor)}>{change}</span>
    </div>
  );
}

function PreviewButton({
  children,
  style,
  secondary = false,
}: {
  children: React.ReactNode;
  style: string;
  secondary?: boolean;
}) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--preview-padding)",
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
    default: // filled
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

function PreviewInput({
  style,
  placeholder,
  icon,
}: {
  style: string;
  placeholder: string;
  icon?: React.ReactNode;
}) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--preview-padding)",
    borderRadius: "var(--preview-radius)",
    fontSize: "var(--preview-text-sm)",
    outline: "none",
    transitionDuration: "var(--preview-duration)",
    color: "var(--preview-text)",
    width: "100%",
  };

  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "var(--preview-padding)",
    color: "var(--preview-text-secondary)",
    pointerEvents: "none",
  };

  const inputWithIconStyle: React.CSSProperties = {
    ...baseStyle,
    paddingLeft: icon ? "2.5rem" : "var(--preview-padding)",
  };

  const getInputStyles = (): React.CSSProperties => {
    switch (style) {
      case "outlined":
        return {
          ...inputWithIconStyle,
          border: "1px solid var(--preview-border)",
          backgroundColor: "transparent",
        };
      case "underlined":
        return {
          ...inputWithIconStyle,
          border: "none",
          borderBottom: "1px solid var(--preview-border)",
          borderRadius: 0,
          backgroundColor: "transparent",
        };
      default: // filled
        return {
          ...inputWithIconStyle,
          border: "none",
          backgroundColor: "var(--preview-bg)",
        };
    }
  };

  return (
    <div style={wrapperStyle}>
      {icon && <span style={iconStyle}>{icon}</span>}
      <input type="text" placeholder={placeholder} style={getInputStyles()} />
    </div>
  );
}

function TableRow({
  user,
  action,
  time,
}: {
  user: string;
  action: string;
  time: string;
}) {
  return (
    <tr style={{ borderBottom: "1px solid var(--preview-border)" }}>
      <td className="py-2">{user}</td>
      <td className="py-2" style={{ color: "var(--preview-text-secondary)" }}>
        {action}
      </td>
      <td className="py-2" style={{ color: "var(--preview-text-secondary)" }}>
        {time}
      </td>
    </tr>
  );
}

function LoadingIndicator({
  type,
}: {
  type: "skeleton" | "spinner" | "progress" | "dots";
}) {
  switch (type) {
    case "skeleton":
      return (
        <div className="flex flex-col" style={{ gap: "0.5rem" }}>
          <div
            className="animate-pulse"
            style={{
              height: "1rem",
              width: "75%",
              backgroundColor: "var(--preview-bg-surface)",
              borderRadius: "var(--preview-radius)",
            }}
          />
          <div
            className="animate-pulse"
            style={{
              height: "1rem",
              width: "50%",
              backgroundColor: "var(--preview-bg-surface)",
              borderRadius: "var(--preview-radius)",
            }}
          />
          <div
            className="animate-pulse"
            style={{
              height: "1rem",
              width: "60%",
              backgroundColor: "var(--preview-bg-surface)",
              borderRadius: "var(--preview-radius)",
            }}
          />
        </div>
      );
    case "spinner":
      return (
        <div className="flex justify-center py-4">
          <div
            className="animate-spin"
            style={{
              width: "2rem",
              height: "2rem",
              border: "3px solid var(--preview-bg-surface)",
              borderTopColor: "var(--preview-accent)",
              borderRadius: "50%",
            }}
          />
        </div>
      );
    case "progress":
      return (
        <div
          className="overflow-hidden"
          style={{
            height: "4px",
            backgroundColor: "var(--preview-bg-surface)",
            borderRadius: "var(--preview-radius)",
          }}
        >
          <div
            className="animate-progress"
            style={{
              height: "100%",
              width: "30%",
              backgroundColor: "var(--preview-accent)",
              animation: "progress 1.5s ease-in-out infinite",
            }}
          />
          <style>{`
                        @keyframes progress {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(400%); }
                        }
                    `}</style>
        </div>
      );
    case "dots":
      return (
        <div className="flex justify-center py-4" style={{ gap: "0.5rem" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "var(--preview-accent)",
                borderRadius: "50%",
                animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`,
              }}
            />
          ))}
          <style>{`
                        @keyframes bounce {
                            0%, 80%, 100% { transform: scale(0); }
                            40% { transform: scale(1); }
                        }
                    `}</style>
        </div>
      );
  }
}
