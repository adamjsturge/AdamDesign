interface TextPreviewProps {
  className?: string;
}

export function TextPreview({ className = "" }: TextPreviewProps) {
  return (
    <div
      className={`${className}`}
      style={{
        padding: "var(--preview-padding-lg, 1.5rem)",
        backgroundColor: "var(--preview-bg-surface, #1e293b)",
        borderRadius: "var(--preview-radius, 0)",
        borderWidth: "var(--preview-border-width, 0)",
        borderColor: "var(--preview-border-color, transparent)",
        borderStyle: "solid",
      }}
    >
      <h3
        style={{
          fontSize: "var(--preview-text-xl, 1.25rem)",
          fontWeight: "var(--preview-font-weight-bold, 700)",
          lineHeight: "var(--preview-leading, 1.5)",
          textAlign:
            "var(--preview-text-align, left)" as React.CSSProperties["textAlign"],
          marginBottom: "0.5rem",
        }}
      >
        The quick brown fox
      </h3>
      <p
        style={{
          fontSize: "var(--preview-text-base, 1rem)",
          fontWeight: "var(--preview-font-weight-normal, 400)",
          lineHeight: "var(--preview-leading-relaxed, 1.625)",
          textAlign:
            "var(--preview-text-align, left)" as React.CSSProperties["textAlign"],
          color: "var(--preview-text-secondary, #94a3b8)",
        }}
      >
        Jumps over the lazy dog. This sample text shows how your typography
        choices affect readability and visual hierarchy. Even if the paragraph
        is a bit longer than maybe you expected it to be.
      </p>
    </div>
  );
}
