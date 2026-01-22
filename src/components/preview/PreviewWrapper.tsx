import { useEffect } from "react";

import type { UserPreferences } from "../../types/preferences";
import { getPreviewStyle } from "../../utils/compilePreferences";
import { loadFontFromPreference } from "../../utils/fontLoader";

interface PreviewWrapperProps {
  preferences: UserPreferences;
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps preview content and applies dynamic CSS variables based on preferences
 * Also handles dynamic font loading
 */
export function PreviewWrapper({
  preferences,
  children,
  className = "",
}: PreviewWrapperProps) {
  const style = getPreviewStyle(preferences);

  // Load font when preference changes
  useEffect(() => {
    loadFontFromPreference(preferences);
  }, [preferences]);

  return (
    <div
      className={`preview-container ${className}`}
      style={{
        ...style,
        fontFamily: "var(--preview-font)",
      }}
    >
      {children}
    </div>
  );
}
