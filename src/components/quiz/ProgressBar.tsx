import { questions } from "../../data/questions";
import type { UserPreferences } from "../../types/preferences";

interface ProgressBarProps {
  currentIndex: number;
  onJumpTo?: (index: number) => void;
  preferences?: UserPreferences;
}

export function ProgressBar({
  currentIndex,
  onJumpTo,
  preferences: _preferences,
}: ProgressBarProps) {
  const total = questions.length;
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div
      className="flex flex-col"
      style={{ gap: "var(--preview-gap, 0.5rem)" }}
    >
      {/* Progress bar */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: "var(--preview-border, #334155)" }}
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            backgroundColor: "var(--preview-accent, #3b82f6)",
            transitionDuration: "var(--preview-duration, 150ms)",
          }}
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Question ${currentIndex + 1} of ${total}`}
        />
      </div>

      {/* Question indicators */}
      <div className="flex justify-between">
        <span
          style={{
            fontSize: "var(--preview-text-sm, 0.875rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          {currentIndex + 1} / {total}
        </span>
        {onJumpTo && (
          <div className="flex gap-1">
            {questions.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onJumpTo(idx)}
                aria-label={`Go to question ${idx + 1}`}
                className="h-2 w-2"
                style={{
                  backgroundColor:
                    idx === currentIndex
                      ? "var(--preview-accent, #3b82f6)"
                      : idx < currentIndex
                        ? "var(--preview-text-secondary, #94a3b8)"
                        : "var(--preview-border, #334155)",
                  transitionDuration: "var(--preview-duration, 150ms)",
                  borderRadius: "var(--preview-radius, 0)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
