import { useSetAtom } from "jotai";
import { FaGithub } from "react-icons/fa";

import { importPreferencesAtom } from "../../atoms/preferencesAtom";
import type { UserPreferences } from "../../types/preferences";

// Adam's curated preferences
const adamsPreferences: UserPreferences = {
  theme: "tokyo-night",
  animationStyle: "minimal",
  borderRadius: "md",
  spacingDensity: "compact",
  shadowStyle: "none",
  borderUsage: "none",
  typographyScale: "moderate",
  lineHeight: "normal",
  textAlignment: "left",
  fontWeight: "regular",
  fontFamily: "opensans",
  buttonStyle: "filled",
  inputStyle: "filled",
  cardStyle: "filled",
  badgeStyle: "solid",
  linkStyle: "color",
  focusStyle: "outline",
  hoverStyle: "background",
  disabledState: "grayscale",
  loadingState: "spinner",
  iconSize: "small",
  containerWidth: "wide",
};

export default function About() {
  const importPreferences = useSetAtom(importPreferencesAtom);
  return (
    <div
      className="flex flex-1 flex-col"
      style={{ padding: "var(--preview-padding-lg, 1rem)" }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: "var(--preview-container, 80rem)" }}
      >
        {/* Page header */}
        <h1
          className="mb-6 font-bold"
          style={{ fontSize: "var(--preview-text-2xl, 1.5rem)" }}
        >
          About This Tool
        </h1>

        {/* Main content grid */}
        <div
          className="grid gap-4 lg:grid-cols-2"
          style={{ gap: "var(--preview-gap-lg, 1rem)" }}
        >
          {/* What it does */}
          <section
            style={{
              padding: "var(--preview-padding-lg, 1.5rem)",
              backgroundColor: "var(--preview-bg-surface, #1e293b)",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            <h2
              className="mb-3 font-semibold"
              style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
            >
              Finding your own design guide
            </h2>
            <div
              className="flex flex-col"
              style={{
                gap: "var(--preview-gap, 0.75rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
              }}
            >
              <p>
                It's not perfect but I made this tool to help me figure out my
                own design preferences. I wasn't sure what I liked or what I
                wanted any of my sites to look like.
              </p>
              <p>
                Since I don't normally work with a designer for personal
                projects I tried to think about what my designer normally talks
                about during any review. So I could see for myself what I like
                and don't like
              </p>
            </div>
          </section>

          {/* How to use */}
          <section
            style={{
              padding: "var(--preview-padding-lg, 1.5rem)",
              backgroundColor: "var(--preview-bg-surface, #1e293b)",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            <h2
              className="mb-3 font-semibold"
              style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
            >
              How to Use
            </h2>
            <ol
              className="flex flex-col"
              style={{
                gap: "var(--preview-gap, 0.75rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
              }}
            >
              <li className="flex gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center font-semibold text-white"
                  style={{
                    backgroundColor: "var(--preview-accent, #3b82f6)",
                    borderRadius: "var(--preview-radius, 0)",
                    fontSize: "var(--preview-text-xs, 0.75rem)",
                  }}
                >
                  1
                </span>
                <span>
                  Take the quiz - answer questions about colors, spacing,
                  typography, and more
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center font-semibold text-white"
                  style={{
                    backgroundColor: "var(--preview-accent, #3b82f6)",
                    borderRadius: "var(--preview-radius, 0)",
                    fontSize: "var(--preview-text-xs, 0.75rem)",
                  }}
                >
                  2
                </span>
                <span>
                  Watch the site transform - see your choices applied in
                  real-time
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center font-semibold text-white"
                  style={{
                    backgroundColor: "var(--preview-accent, #3b82f6)",
                    borderRadius: "var(--preview-radius, 0)",
                    fontSize: "var(--preview-text-xs, 0.75rem)",
                  }}
                >
                  3
                </span>
                <span>
                  Export your preferences as markdown or JSON for your projects
                </span>
              </li>
            </ol>
          </section>

          {/* Try Adam's preferences */}
          <section
            style={{
              padding: "var(--preview-padding-lg, 1.5rem)",
              backgroundColor: "var(--preview-bg-surface, #1e293b)",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            <h2
              className="mb-3 font-semibold"
              style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
            >
              Try Adam's Preferences
            </h2>
            <p
              className="mb-4"
              style={{
                color: "var(--preview-text-secondary, #94a3b8)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
              }}
            >
              Want to see my personal design choices? Apply my preferences to
              see how I like things styled.
            </p>
            <button
              onClick={() => importPreferences(adamsPreferences)}
              className="cursor-pointer font-medium text-white transition-colors"
              style={{
                padding:
                  "var(--preview-padding, 0.75rem) var(--preview-padding-lg, 1rem)",
                backgroundColor: "var(--preview-accent, #3b82f6)",
                borderRadius: "var(--preview-radius, 0)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
              aria-label="Apply Adam's design preferences"
            >
              Apply Adam's Preferences
            </button>
          </section>

          {/* Technical info */}
          <section
            style={{
              padding: "var(--preview-padding-lg, 1.5rem)",
              backgroundColor: "var(--preview-bg-surface, #1e293b)",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            <h2
              className="mb-3 font-semibold"
              style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
            >
              Privacy
            </h2>
            <div
              className="flex flex-col"
              style={{
                gap: "var(--preview-gap, 0.75rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
              }}
            >
              <p>
                Your preferences are stored locally in your browser. Nothing is
                sent to any server.
              </p>
              <p>
                You can export your data anytime and import it on another
                device. Reset whenever you want to start fresh.
              </p>
            </div>
          </section>

          {/* Creator */}
          <section
            style={{
              padding: "var(--preview-padding-lg, 1.5rem)",
              backgroundColor: "var(--preview-bg-surface, #1e293b)",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            <h2
              className="mb-3 font-semibold"
              style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
            >
              Built by Adam
            </h2>
            <p
              className="mb-4"
              style={{
                color: "var(--preview-text-secondary, #94a3b8)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
              }}
            >
              Thanks
            </p>
            <div className="flex flex-shrink-0 items-center gap-3">
              <a
                href="https://ko-fi.com/I2I2TZ4OC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-opacity hover:opacity-80"
                style={{ transitionDuration: "var(--preview-duration, 150ms)" }}
              >
                <img
                  height="36"
                  alt="Buy Me a Coffee at ko-fi.com"
                  src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
                  style={{ border: 0, height: 36, minWidth: 120 }}
                />
              </a>
              <a
                href="https://github.com/adamjsturge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-opacity hover:opacity-80"
                style={{
                  color: "var(--preview-text, #f8fafc)",
                  transitionDuration: "var(--preview-duration, 150ms)",
                }}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
