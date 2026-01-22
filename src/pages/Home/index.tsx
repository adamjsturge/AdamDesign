import { useAtomValue, useSetAtom } from "jotai";
import { Link } from "wouter";

import { quizStateAtom, resetQuizAtom } from "../../atoms/preferencesAtom";
import { questions } from "../../data/questions";

export default function Home() {
  const quizState = useAtomValue(quizStateAtom);
  const resetQuiz = useSetAtom(resetQuizAtom);

  const hasStarted =
    quizState.currentQuestionIndex > 0 || quizState.isCompleted;

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4">
      <div
        className="mx-auto w-full text-center"
        style={{ maxWidth: "var(--preview-container, 42rem)" }}
      >
        <h1
          className="mb-4 font-bold"
          style={{ fontSize: "var(--preview-text-3xl, 2.5rem)" }}
        >
          Design Preference Discovery
        </h1>
        <p
          className="mb-8"
          style={{
            fontSize: "var(--preview-text-lg, 1.125rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          Answer questions to discover your UI/UX preferences. Watch this page
          transform as you make choices.
        </p>

        {/* Features */}
        <div
          className="mb-8 grid text-left sm:grid-cols-2"
          style={{ gap: "var(--preview-gap, 0.5rem)" }}
        >
          <FeatureItem
            title="Live Preview"
            description="This entire site updates with your choices"
          />
          <FeatureItem
            title="Visual Examples"
            description="See each option before selecting"
          />
          <FeatureItem
            title="Export to Markdown"
            description="Perfect for AI assistants"
          />
          <FeatureItem
            title="JSON Import/Export"
            description="Save and share preferences"
          />
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row sm:justify-center"
          style={{ gap: "var(--preview-gap, 0.5rem)" }}
        >
          {hasStarted ? (
            <>
              <Link href={quizState.isCompleted ? "/results" : "/quiz"}>
                <PrimaryButton>
                  {quizState.isCompleted ? "View Results" : "Continue Quiz"}
                </PrimaryButton>
              </Link>
              <button
                type="button"
                onClick={resetQuiz}
                style={{
                  padding: "var(--preview-padding, 0.75rem)",
                  color: "var(--preview-text-secondary, #94a3b8)",
                  transitionDuration: "var(--preview-duration, 150ms)",
                }}
                className="hover:opacity-80"
              >
                Start Over
              </button>
            </>
          ) : (
            <Link href="/quiz">
              <PrimaryButton>Start Quiz</PrimaryButton>
            </Link>
          )}
        </div>

        {hasStarted && !quizState.isCompleted && (
          <p
            className="mt-4"
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              color: "var(--preview-text-secondary, #94a3b8)",
            }}
          >
            Progress: {quizState.currentQuestionIndex + 1} / {questions.length}{" "}
            questions
          </p>
        )}
      </div>
    </div>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        padding: "var(--preview-padding, 0.75rem)",
        backgroundColor: "var(--preview-bg-surface, #1e293b)",
        borderRadius: "var(--preview-radius, 0)",
        boxShadow: "var(--preview-shadow, none)",
      }}
    >
      <h3
        className="font-semibold"
        style={{ fontSize: "var(--preview-text-base, 1rem)" }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "var(--preview-text-sm, 0.875rem)",
          color: "var(--preview-text-secondary, #94a3b8)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block cursor-pointer font-semibold text-white transition-opacity hover:opacity-90"
      style={{
        padding: "var(--preview-padding, 0.75rem) 1.5rem",
        backgroundColor: "var(--preview-accent, #3b82f6)",
        borderRadius: "var(--preview-radius, 0)",
        transitionDuration: "var(--preview-duration, 150ms)",
      }}
    >
      {children}
    </span>
  );
}
