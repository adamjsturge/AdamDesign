import { questions } from "../data/questions";

// Track loaded fonts to avoid duplicate loads
const loadedFonts = new Set<string>();

/**
 * Dynamically load a font from a URL (Google Fonts, CDN, etc.)
 * Only loads each font once per session
 */
export function loadFont(fontUrl: string): void {
  // Skip if empty URL or already loaded
  if (!fontUrl || loadedFonts.has(fontUrl)) {
    return;
  }

  // Create link element for the font stylesheet
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = fontUrl;
  link.dataset.fontLoader = "true";

  document.head.append(link);
  loadedFonts.add(fontUrl);
}

/**
 * Load font based on preference value
 * Looks up the font URL from questions data
 */
export function loadFontFromPreference(
  preferences: Record<string, string>,
): void {
  const fontId = preferences.fontFamily;
  if (!fontId) return;

  const fontQuestion = questions.find((q) => q.id === "fontFamily");
  if (!fontQuestion) return;

  const selectedOption = fontQuestion.options.find((o) => o.id === fontId);
  const fontUrl = selectedOption?.cssVars?.["--preview-font-url"];

  if (fontUrl) {
    loadFont(fontUrl);
  }
}

/**
 * Preload all fonts for better UX during quiz
 * Call this on app init if you want fonts ready immediately
 */
export function preloadAllFonts(): void {
  const fontQuestion = questions.find((q) => q.id === "fontFamily");
  if (!fontQuestion) return;

  for (const option of fontQuestion.options) {
    const fontUrl = option.cssVars?.["--preview-font-url"];
    if (fontUrl) {
      loadFont(fontUrl);
    }
  }
}
