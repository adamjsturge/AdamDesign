import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { useLocation } from "wouter";

import {
  currentQuestionAtom,
  goToQuestionAtom,
  nextQuestionAtom,
  preferencesAtom,
  prevQuestionAtom,
  quizStateAtom,
  resetQuizAtom,
  selectOptionAtom,
  updatePreferenceAtom,
} from "../../atoms/preferencesAtom";
import { ProgressBar } from "../../components/quiz/ProgressBar";
import { QuestionCard } from "../../components/quiz/QuestionCard";
import { questions } from "../../data/questions";
import { getButtonStyles } from "../../utils/styleHelpers";

// Helper to get animation duration from preference
function getAnimationDuration(animationStyle: string | undefined): number {
  switch (animationStyle) {
    case "none":
      return 0;
    case "minimal":
      return 100;
    case "smooth":
      return 200;
    case "expressive":
      return 300;
    default:
      return 150;
  }
}

export default function Quiz() {
  const [, navigate] = useLocation();
  const [quizState] = useAtom(quizStateAtom);
  const preferences = useAtomValue(preferencesAtom);
  const currentQuestion = useAtomValue(currentQuestionAtom);
  const selectOption = useSetAtom(selectOptionAtom);
  const nextQuestion = useSetAtom(nextQuestionAtom);
  const prevQuestion = useSetAtom(prevQuestionAtom);
  const goToQuestion = useSetAtom(goToQuestionAtom);
  const resetQuiz = useSetAtom(resetQuizAtom);
  const updatePreference = useSetAtom(updatePreferenceAtom);

  // Transition state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Track if user has dismissed the resume prompt
  const [hasChosenAction, setHasChosenAction] = useState(false);

  const animationDuration = getAnimationDuration(preferences.animationStyle);

  // Show resume prompt if quiz is completed and user hasn't made a choice yet
  const showResumePrompt = quizState.isCompleted && !hasChosenAction;

  if (!currentQuestion) {
    return (
      <div
        className="flex flex-1 items-center justify-center"
        style={{ padding: "var(--preview-padding-lg, 1rem)" }}
      >
        <p style={{ color: "var(--preview-text-secondary, #94a3b8)" }}>
          Loading...
        </p>
      </div>
    );
  }

  // Show resume prompt if user has completed results
  if (showResumePrompt) {
    const handleStartOver = () => {
      resetQuiz();
      setHasChosenAction(true);
    };

    const handleEditAnswers = () => {
      goToQuestion(0);
      setHasChosenAction(true);
    };

    const handleViewResults = () => {
      navigate("/results");
    };

    return (
      <div
        className="flex flex-1 items-center justify-center"
        style={{ padding: "var(--preview-padding-lg, 1rem)" }}
      >
        <div
          className="w-full"
          style={{
            maxWidth: "28rem",
            padding: "var(--preview-padding-lg, 1.5rem)",
            backgroundColor: "var(--preview-bg-surface, #1e293b)",
            borderRadius: "var(--preview-radius, 0)",
          }}
        >
          <h2
            className="mb-2 font-semibold"
            style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
          >
            You have saved preferences
          </h2>
          <p
            className="mb-6"
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              color: "var(--preview-text-secondary, #94a3b8)",
            }}
          >
            Would you like to start fresh or edit your existing answers?
          </p>
          <div
            className="flex flex-col gap-2"
            style={{ gap: "var(--preview-gap, 0.5rem)" }}
          >
            <button
              type="button"
              onClick={handleEditAnswers}
              className="w-full font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                backgroundColor: "var(--preview-accent, #3b82f6)",
                borderRadius: "var(--preview-radius, 0)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              Edit Answers
            </button>
            <button
              type="button"
              onClick={handleStartOver}
              className="w-full font-medium transition-opacity hover:opacity-80"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                backgroundColor: "var(--preview-bg, #0f172a)",
                color: "var(--preview-text, #f8fafc)",
                borderRadius: "var(--preview-radius, 0)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              Start Over
            </button>
            <button
              type="button"
              onClick={handleViewResults}
              className="w-full transition-opacity hover:opacity-80"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              View Results Instead
            </button>
          </div>
        </div>
      </div>
    );
  }

  const selectedOptionId =
    quizState.preferences[currentQuestion.id] || currentQuestion.defaultValue;

  const isFirstQuestion = quizState.currentQuestionIndex === 0;
  const isLastQuestion =
    quizState.currentQuestionIndex === questions.length - 1;

  const handleSelect = (optionId: string) => {
    selectOption(optionId);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    if (animationDuration > 0) {
      setDirection("next");
      setIsTransitioning(true);
      setTimeout(() => {
        nextQuestion();
        setIsTransitioning(false);
      }, animationDuration);
    } else {
      nextQuestion();
    }
  };

  const handlePrev = () => {
    if (isTransitioning || isFirstQuestion) return;

    if (animationDuration > 0) {
      setDirection("prev");
      setIsTransitioning(true);
      setTimeout(() => {
        prevQuestion();
        setIsTransitioning(false);
      }, animationDuration);
    } else {
      prevQuestion();
    }
  };

  const handleJumpTo = (index: number) => {
    if (isTransitioning || index === quizState.currentQuestionIndex) return;

    if (animationDuration > 0) {
      setDirection(index > quizState.currentQuestionIndex ? "next" : "prev");
      setIsTransitioning(true);
      setTimeout(() => {
        goToQuestion(index);
        setIsTransitioning(false);
      }, animationDuration);
    } else {
      goToQuestion(index);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Progress */}
      <div
        style={{
          padding: "var(--preview-padding, 0.75rem)",
          borderBottom: "1px solid var(--preview-border, #334155)",
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: "var(--preview-container, 80rem)" }}
        >
          <ProgressBar
            currentIndex={quizState.currentQuestionIndex}
            onJumpTo={handleJumpTo}
            preferences={preferences}
          />
        </div>
      </div>

      {/* Question content with transition */}
      <div
        className="flex-1"
        style={{ padding: "var(--preview-padding-lg, 1rem)" }}
      >
        <div
          className="mx-auto py-8"
          style={{
            maxWidth: "var(--preview-container, 80rem)",
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning
              ? `translateX(${direction === "next" ? "-20px" : "20px"})`
              : "translateX(0)",
            transition:
              animationDuration > 0
                ? `opacity ${animationDuration}ms ease-in-out, transform ${animationDuration}ms ease-in-out`
                : "none",
          }}
        >
          <QuestionCard
            question={currentQuestion}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleSelect}
            preferences={preferences}
            onUpdatePreference={updatePreference}
          />
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          padding: "var(--preview-padding, 0.75rem)",
          borderTop: "1px solid var(--preview-border, #334155)",
          backgroundColor: "var(--preview-bg-surface, #1e293b)",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: "var(--preview-container, 80rem)" }}
        >
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirstQuestion || isTransitioning}
            style={{
              padding: "var(--preview-padding, 0.75rem)",
              fontSize: "var(--preview-text-sm, 0.875rem)",
              color: isFirstQuestion
                ? "var(--preview-border, #334155)"
                : "var(--preview-text-secondary, #94a3b8)",
              cursor:
                isFirstQuestion || isTransitioning ? "not-allowed" : "pointer",
              transitionDuration: "var(--preview-duration, 150ms)",
            }}
            className={
              isFirstQuestion || isTransitioning ? "" : "hover:opacity-80"
            }
            aria-label="Previous question"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isTransitioning}
            className="font-semibold hover:opacity-90"
            style={{
              padding: "var(--preview-padding, 0.75rem) 1.5rem",
              fontSize: "var(--preview-text-sm, 0.875rem)",
              cursor: isTransitioning ? "not-allowed" : "pointer",
              ...getButtonStyles(preferences.buttonStyle || "filled"),
            }}
            aria-label={isLastQuestion ? "See results" : "Next question"}
          >
            {isLastQuestion ? "See Results" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
