import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBars, FaShuffle, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "wouter";

import {
  preferencesAtom,
  quizStateAtom,
  randomizePreferencesAtom,
} from "../../atoms/preferencesAtom";
import { getPreviewStyle } from "../../utils/compilePreferences";
import { loadFontFromPreference } from "../../utils/fontLoader";
import { getButtonStyles } from "../../utils/styleHelpers";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout that wraps all pages and applies live design preferences
 * The whole app becomes a preview of your choices!
 */
export function Layout({ children }: LayoutProps) {
  const preferences = useAtomValue(preferencesAtom);

  // Load font when preferences change
  useEffect(() => {
    loadFontFromPreference(preferences);
  }, [preferences]);

  const style = getPreviewStyle(preferences);

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        ...style,
        backgroundColor: "var(--preview-bg, #0f172a)",
        color: "var(--preview-text, #f8fafc)",
        fontFamily: "var(--preview-font, sans-serif)",
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [location, navigate] = useLocation();
  const randomize = useSetAtom(randomizePreferencesAtom);
  const preferences = useAtomValue(preferencesAtom);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `transition-colors ${
      location === path ? "font-semibold" : "opacity-70 hover:opacity-100"
    }`;

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        padding: "var(--preview-padding, 0.75rem)",
        borderBottom: "1px solid var(--preview-border, #334155)",
        backgroundColor: "var(--preview-bg-surface, #1e293b)",
        boxShadow: "var(--preview-shadow, none)",
        borderRadius: 0,
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: "var(--preview-container, 80rem)" }}
      >
        <Link
          href="/"
          className="font-bold"
          style={{
            color: "var(--preview-accent, #3b82f6)",
            fontSize: "var(--preview-text-lg, 1rem)",
          }}
        >
          Adam Design
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center sm:flex"
          style={{ gap: "var(--preview-gap-lg, 1rem)" }}
        >
          <Link
            href="/"
            className={linkClass("/")}
            style={{ fontSize: "var(--preview-text-sm, 0.875rem)" }}
          >
            Home
          </Link>
          <Link
            href="/quiz"
            className={linkClass("/quiz")}
            style={{ fontSize: "var(--preview-text-sm, 0.875rem)" }}
          >
            Quiz
          </Link>
          <Link
            href="/results"
            className={linkClass("/results")}
            style={{ fontSize: "var(--preview-text-sm, 0.875rem)" }}
          >
            Results
          </Link>
          <Link
            href="/settings"
            className={linkClass("/settings")}
            style={{ fontSize: "var(--preview-text-sm, 0.875rem)" }}
          >
            Settings
          </Link>
          <Link
            href="/about"
            className={linkClass("/about")}
            style={{ fontSize: "var(--preview-text-sm, 0.875rem)" }}
          >
            About
          </Link>
          <button
            type="button"
            onClick={randomize}
            className="flex items-center gap-1 transition-opacity hover:opacity-80"
            style={{
              padding: "var(--preview-padding, 0.75rem)",
              fontSize: "var(--preview-text-sm, 0.875rem)",
              fontWeight: 600,
              ...getButtonStyles(preferences.buttonStyle || "filled"),
            }}
            aria-label="Shuffle preferences"
          >
            <FaShuffle size={14} />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
        </nav>

        {/* Mobile nav buttons */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={randomize}
            className="flex items-center transition-opacity hover:opacity-80"
            style={{
              padding: "var(--preview-padding, 0.75rem)",
              ...getButtonStyles(preferences.buttonStyle || "filled"),
            }}
            aria-label="Shuffle preferences"
          >
            <FaShuffle size={16} />
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center transition-opacity hover:opacity-80"
            style={{
              padding: "var(--preview-padding, 0.75rem)",
              color: "var(--preview-text, #f8fafc)",
              transitionDuration: "var(--preview-duration, 150ms)",
            }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <nav
          className="flex flex-col sm:hidden"
          style={{
            paddingTop: "var(--preview-padding, 0.75rem)",
            gap: "var(--preview-gap, 0.5rem)",
          }}
        >
          <button
            type="button"
            onClick={() => handleNavClick("/")}
            className={`text-left ${linkClass("/")}`}
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              padding: "var(--preview-padding, 0.75rem)",
              backgroundColor:
                location === "/"
                  ? "var(--preview-bg, #0f172a)"
                  : "transparent",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("/quiz")}
            className={`text-left ${linkClass("/quiz")}`}
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              padding: "var(--preview-padding, 0.75rem)",
              backgroundColor:
                location === "/quiz"
                  ? "var(--preview-bg, #0f172a)"
                  : "transparent",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            Quiz
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("/results")}
            className={`text-left ${linkClass("/results")}`}
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              padding: "var(--preview-padding, 0.75rem)",
              backgroundColor:
                location === "/results"
                  ? "var(--preview-bg, #0f172a)"
                  : "transparent",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            Results
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("/settings")}
            className={`text-left ${linkClass("/settings")}`}
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              padding: "var(--preview-padding, 0.75rem)",
              backgroundColor:
                location === "/settings"
                  ? "var(--preview-bg, #0f172a)"
                  : "transparent",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            Settings
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("/about")}
            className={`text-left ${linkClass("/about")}`}
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              padding: "var(--preview-padding, 0.75rem)",
              backgroundColor:
                location === "/about"
                  ? "var(--preview-bg, #0f172a)"
                  : "transparent",
              borderRadius: "var(--preview-radius, 0)",
            }}
          >
            About
          </button>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const quizState = useAtomValue(quizStateAtom);
  const answeredCount = Object.keys(quizState.preferences).filter(
    (key) => quizState.preferences[key],
  ).length;

  return (
    <footer
      style={{
        padding: "var(--preview-padding, 0.75rem)",
        borderTop: "1px solid var(--preview-border, #334155)",
        backgroundColor: "var(--preview-bg-surface, #1e293b)",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center gap-3 sm:grid sm:grid-cols-3"
        style={{ maxWidth: "var(--preview-container, 80rem)" }}
      >
        <p
          className="text-center sm:text-left"
          style={{
            fontSize: "var(--preview-text-sm, 0.875rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          {answeredCount > 0 ? (
            <>
              This page reflects{" "}
              <span style={{ color: "var(--preview-accent, #3b82f6)" }}>
                {answeredCount} preference{answeredCount !== 1 && "s"}
              </span>{" "}
              you've set
            </>
          ) : (
            "Take the quiz to see this page transform"
          )}
        </p>
        <p
          className="text-center"
          style={{
            fontSize: "var(--preview-text-xs, 0.75rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          Made by Adam
        </p>
        <div className="flex items-center justify-center gap-3 sm:justify-end">
          <a
            href="https://ko-fi.com/I2I2TZ4OC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 transition-opacity hover:opacity-80"
            style={{ transitionDuration: "var(--preview-duration, 150ms)" }}
            aria-label="Support on Ko-fi"
          >
            <img
              height="24"
              alt="Buy Me a Coffee at ko-fi.com"
              src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
              style={{ border: 0, height: 24 }}
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
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
