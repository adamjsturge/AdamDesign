import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1
          className="font-bold"
          style={{
            fontSize: "8rem",
            color: "var(--preview-accent, #3b82f6)",
          }}
        >
          404
        </h1>
        <p
          className="mt-4 font-semibold"
          style={{ fontSize: "var(--preview-text-2xl, 1.5rem)" }}
        >
          Page Not Found
        </p>
        <p
          className="mt-2"
          style={{
            color: "var(--preview-text-secondary, #94a3b8)",
            fontSize: "var(--preview-text-base, 1rem)",
          }}
        >
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block font-semibold text-white transition-opacity hover:opacity-80"
          style={{
            padding: "var(--preview-padding, 0.75rem) 1.5rem",
            backgroundColor: "var(--preview-accent, #3b82f6)",
            borderRadius: "var(--preview-radius, 0)",
            transitionDuration: "var(--preview-duration, 150ms)",
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
