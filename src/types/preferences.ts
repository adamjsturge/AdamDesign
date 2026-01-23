// Preference value is the selected option ID
export type PreferenceValue = string;

// Question categories for grouping
export type QuestionCategory =
  | "colors"
  | "typography"
  | "spacing"
  | "shapes"
  | "animation"
  | "layout"
  | "components";

// Individual question option with visual preview config
export interface QuestionOption {
  id: PreferenceValue;
  label: string;
  description: string;
  // CSS variables this option maps to
  cssVars?: Record<string, string>;
  // Tailwind classes this option maps to
  tailwindClasses?: string;
}

// A single preference question
export interface PreferenceQuestion {
  id: string;
  category: QuestionCategory;
  title: string;
  description: string;
  options: QuestionOption[];
  defaultValue: PreferenceValue;
  // Flag for custom UI (e.g., theme question with color picker)
  hasCustomUI?: boolean;
  // Show floating text preview for typography-related questions
  showTextPreview?: boolean;
}

// User's selected preferences (maps question ID to selected option ID)
export interface UserPreferences {
  [questionId: string]: PreferenceValue;
}

// Complete quiz state
export interface QuizState {
  currentQuestionIndex: number;
  preferences: UserPreferences;
  isCompleted: boolean;
  completedAt?: number;
}

// Compiled design tokens from preferences
export interface CompiledDesignTokens {
  cssVariables: Record<string, string>;
  tailwindClasses: Record<string, string>;
}

// JSON export format
export interface PreferencesExport {
  version: "1.0";
  exportedAt: string;
  preferences: UserPreferences;
}
