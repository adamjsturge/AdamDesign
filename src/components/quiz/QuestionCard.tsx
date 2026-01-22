import type {
  PreferenceQuestion,
  UserPreferences,
} from "../../types/preferences";
import { OptionCard } from "./OptionCard";
import { ThemeQuestionCard } from "./ThemeQuestionCard";

interface QuestionCardProps {
  question: PreferenceQuestion;
  selectedOptionId: string;
  onSelectOption: (optionId: string) => void;
  preferences?: UserPreferences;
  onUpdatePreference?: (questionId: string, value: string | undefined) => void;
}

export function QuestionCard({
  question,
  selectedOptionId,
  onSelectOption,
  preferences,
  onUpdatePreference,
}: QuestionCardProps) {
  // Handle theme question with custom UI
  if (question.id === "theme") {
    return (
      <ThemeQuestionCard
        selectedThemeId={preferences?.theme || "dark"}
        customColors={preferences?.customColors}
        onSelectTheme={(themeId) => onSelectOption(themeId)}
        onChangeCustomColors={(colors) =>
          onUpdatePreference?.("customColors", colors)
        }
      />
    );
  }

  return (
    <div
      className="flex flex-col"
      style={{ gap: "var(--preview-gap-lg, 1rem)" }}
    >
      {/* Question header */}
      <div
        className="flex flex-col"
        style={{ gap: "var(--preview-gap, 0.25rem)" }}
      >
        <span
          className="tracking-wide uppercase"
          style={{
            fontSize: "var(--preview-text-sm, 0.875rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          {question.category}
        </span>
        <h2
          className="font-bold"
          style={{ fontSize: "var(--preview-text-2xl, 1.5rem)" }}
        >
          {question.title}
        </h2>
        <p style={{ color: "var(--preview-text-secondary, #94a3b8)" }}>
          {question.description}
        </p>
      </div>

      {/* Options grid */}
      <div
        className={`grid ${
          question.options.length <= 3
            ? "grid-cols-1 sm:grid-cols-3"
            : question.options.length === 4
              ? "grid-cols-2"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        }`}
        style={{ gap: "var(--preview-gap, 0.5rem)" }}
      >
        {question.options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            question={question}
            isSelected={selectedOptionId === option.id}
            onSelect={() => onSelectOption(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
