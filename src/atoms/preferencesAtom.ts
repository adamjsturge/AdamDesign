import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { getDefaultPreferences, questions } from "../data/questions";
import { DEFAULT_THEME_ID } from "../data/themePresets";
import type { QuizState, UserPreferences } from "../types/preferences";

// Migration: convert old colorScheme/accentColor to new theme system
function migratePreferences(prefs: UserPreferences): UserPreferences {
  // Check if already migrated (has theme key)
  if (prefs.theme) return prefs;

  // Check if has old format
  const hasOldFormat = "colorScheme" in prefs || "accentColor" in prefs;
  if (!hasOldFormat) {
    // New user, set default theme
    return { ...prefs, theme: DEFAULT_THEME_ID };
  }

  // Map old colorScheme to closest theme
  const schemeMap: Record<string, string> = {
    dark: "dark",
    light: "light",
    dimmed: "dim",
  };
  const theme = schemeMap[prefs.colorScheme] || DEFAULT_THEME_ID;

  // Map old accentColor to hex if not blue
  const accentHexMap: Record<string, string> = {
    blue: "#3b82f6",
    purple: "#8b5cf6",
    green: "#22c55e",
    orange: "#f97316",
    red: "#ef4444",
  };

  const migratedPrefs: UserPreferences = { ...prefs, theme };

  // Only set customAccentColor if user had a non-blue accent
  if (prefs.accentColor && prefs.accentColor !== "blue") {
    migratedPrefs.customAccentColor = accentHexMap[prefs.accentColor];
  }

  // Remove old keys
  delete migratedPrefs.colorScheme;
  delete migratedPrefs.accentColor;

  return migratedPrefs;
}

// Default quiz state
const defaultQuizState: QuizState = {
  currentQuestionIndex: 0,
  preferences: { ...getDefaultPreferences(), theme: DEFAULT_THEME_ID },
  isCompleted: false,
};

// Raw storage atom
const rawQuizStateAtom = atomWithStorage<QuizState>(
  "design-quiz-state",
  defaultQuizState,
);

// Main quiz state atom with migration
export const quizStateAtom = atom(
  (get) => {
    const state = get(rawQuizStateAtom);
    return {
      ...state,
      preferences: migratePreferences(state.preferences),
    };
  },
  (_get, set, newState: QuizState) => {
    set(rawQuizStateAtom, newState);
  },
);

// Derived atom for current question
export const currentQuestionAtom = atom((get) => {
  const state = get(quizStateAtom);
  return questions[state.currentQuestionIndex] || null;
});

// Derived atom for quiz progress (0-100)
export const quizProgressAtom = atom((get) => {
  const state = get(quizStateAtom);
  return Math.round((state.currentQuestionIndex / questions.length) * 100);
});

// Derived atom for just the preferences
export const preferencesAtom = atom(
  (get) => get(quizStateAtom).preferences,
  (get, set, newPreferences: UserPreferences) => {
    const state = get(quizStateAtom);
    set(quizStateAtom, { ...state, preferences: newPreferences });
  },
);

// Action atom to go to next question
export const nextQuestionAtom = atom(null, (get, set) => {
  const state = get(quizStateAtom);
  const nextIndex = state.currentQuestionIndex + 1;

  if (nextIndex >= questions.length) {
    set(quizStateAtom, {
      ...state,
      isCompleted: true,
      completedAt: Date.now(),
    });
  } else {
    set(quizStateAtom, {
      ...state,
      currentQuestionIndex: nextIndex,
    });
  }
});

// Action atom to go to previous question
export const prevQuestionAtom = atom(null, (get, set) => {
  const state = get(quizStateAtom);
  const prevIndex = Math.max(0, state.currentQuestionIndex - 1);
  set(quizStateAtom, {
    ...state,
    currentQuestionIndex: prevIndex,
  });
});

// Action atom to select an option for current question
export const selectOptionAtom = atom(null, (get, set, optionId: string) => {
  const state = get(quizStateAtom);
  const currentQuestion = questions[state.currentQuestionIndex];

  if (currentQuestion) {
    set(quizStateAtom, {
      ...state,
      preferences: {
        ...state.preferences,
        [currentQuestion.id]: optionId,
      },
    });
  }
});

// Action atom to jump to a specific question
export const goToQuestionAtom = atom(null, (get, set, index: number) => {
  const state = get(quizStateAtom);
  if (index >= 0 && index < questions.length) {
    set(quizStateAtom, {
      ...state,
      currentQuestionIndex: index,
      isCompleted: false,
    });
  }
});

// Action atom to reset quiz
export const resetQuizAtom = atom(null, (_get, set) => {
  set(quizStateAtom, defaultQuizState);
});

// Action atom to update a single preference (for settings page)
// Pass undefined as value to remove the preference key
export const updatePreferenceAtom = atom(
  null,
  (get, set, questionId: string, value: string | undefined) => {
    const state = get(quizStateAtom);
    let newPreferences: UserPreferences;

    if (value === undefined) {
      // Filter out the key to remove it
      const { [questionId]: _removed, ...rest } = state.preferences;
      newPreferences = rest;
    } else {
      newPreferences = {
        ...state.preferences,
        [questionId]: value,
      };
    }

    set(quizStateAtom, {
      ...state,
      preferences: newPreferences,
    });
  },
);

// Action atom to import preferences
export const importPreferencesAtom = atom(
  null,
  (get, set, newPreferences: UserPreferences) => {
    const state = get(quizStateAtom);
    set(quizStateAtom, {
      ...state,
      preferences: { ...state.preferences, ...newPreferences },
      isCompleted: true,
      completedAt: Date.now(),
    });
  },
);

// Action atom to randomize all preferences (except theme/colors)
export const randomizePreferencesAtom = atom(null, (get, set) => {
  const currentState = get(quizStateAtom);
  const randomPrefs: UserPreferences = {};

  for (const question of questions) {
    // Skip theme - preserve current theme and color settings
    if (question.id === "theme") {
      continue;
    } else if (question.options.length > 0) {
      const randomIndex = Math.floor(Math.random() * question.options.length);
      randomPrefs[question.id] = question.options[randomIndex].id;
    }
  }

  // Preserve theme-related settings from current state
  const { theme, customAccentColor, customColors } = currentState.preferences;

  set(quizStateAtom, {
    currentQuestionIndex: questions.length - 1,
    preferences: {
      ...randomPrefs,
      theme: theme || DEFAULT_THEME_ID,
      ...(customAccentColor && { customAccentColor }),
      ...(customColors && { customColors }),
    },
    isCompleted: true,
    completedAt: Date.now(),
  });
});
