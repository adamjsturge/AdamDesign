import { useAtomValue } from "jotai";
import { useState } from "react";

import { preferencesAtom } from "../../atoms/preferencesAtom";
import { DashboardPreview } from "../../components/preview/DashboardPreview";
import { FormPreview } from "../../components/preview/FormPreview";
import { LandingPreview } from "../../components/preview/LandingPreview";
import { PreviewWrapper } from "../../components/preview/PreviewWrapper";
import {
  generateExportJSON,
  generateMarkdown,
} from "../../utils/exportPreferences";

type PreviewTab = "dashboard" | "form" | "landing";

export default function Results() {
  const preferences = useAtomValue(preferencesAtom);
  const [activeTab, setActiveTab] = useState<PreviewTab>("dashboard");
  const [showExport, setShowExport] = useState(false);

  return (
    <div className="flex flex-1 flex-col">
      {/* Actions bar */}
      <div
        className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        style={{
          padding: "var(--preview-padding, 0.75rem)",
          borderBottom: "1px solid var(--preview-border, #334155)",
        }}
      >
        <h1
          className="font-semibold"
          style={{ fontSize: "var(--preview-text-lg, 1.125rem)" }}
        >
          Your Design Preferences
        </h1>
        <button
          type="button"
          onClick={() => setShowExport(!showExport)}
          className="w-full font-semibold transition-opacity hover:opacity-80 sm:w-auto"
          style={{
            padding: "var(--preview-padding, 0.75rem)",
            fontSize: "var(--preview-text-sm, 0.875rem)",
            backgroundColor: "var(--preview-accent, #3b82f6)",
            color: "#ffffff",
            borderRadius: "var(--preview-radius, 0)",
            transitionDuration: "var(--preview-duration, 150ms)",
          }}
        >
          {showExport ? "Hide Export" : "Export"}
        </button>
      </div>

      {/* Export panel */}
      {showExport && <ExportPanel preferences={preferences} />}

      {/* Preview tabs */}
      <div
        style={{
          borderBottom: "1px solid var(--preview-border, #334155)",
        }}
      >
        <div
          className="mx-auto flex"
          style={{ maxWidth: "var(--preview-container, 80rem)" }}
        >
          <TabButton
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </TabButton>
          <TabButton
            active={activeTab === "form"}
            onClick={() => setActiveTab("form")}
          >
            Form
          </TabButton>
          <TabButton
            active={activeTab === "landing"}
            onClick={() => setActiveTab("landing")}
          >
            Landing
          </TabButton>
        </div>
      </div>

      {/* Preview content */}
      <div className="flex-1 overflow-auto">
        <PreviewWrapper preferences={preferences} className="min-h-full">
          {activeTab === "dashboard" && (
            <DashboardPreview preferences={preferences} />
          )}
          {activeTab === "form" && <FormPreview preferences={preferences} />}
          {activeTab === "landing" && (
            <LandingPreview preferences={preferences} />
          )}
        </PreviewWrapper>
      </div>
    </div>
  );
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="transition-colors"
      style={{
        padding:
          "var(--preview-padding, 0.75rem) var(--preview-padding-lg, 1rem)",
        fontSize: "var(--preview-text-sm, 0.875rem)",
        fontWeight: active ? 600 : 400,
        color: active
          ? "var(--preview-text, #f8fafc)"
          : "var(--preview-text-secondary, #94a3b8)",
        backgroundColor: active
          ? "var(--preview-bg-surface, #1e293b)"
          : "transparent",
        borderBottom: active
          ? "2px solid var(--preview-accent, #3b82f6)"
          : "2px solid transparent",
        transitionDuration: "var(--preview-duration, 150ms)",
      }}
    >
      {children}
    </button>
  );
}

function ExportPanel({ preferences }: { preferences: Record<string, string> }) {
  const [exportType, setExportType] = useState<"markdown" | "json">("markdown");
  const [excludeColors, setExcludeColors] = useState(false);
  const [copied, setCopied] = useState(false);

  const exportOptions = { excludeColors };
  const markdownContent = generateMarkdown(preferences, exportOptions);
  const jsonContent = JSON.stringify(
    generateExportJSON(preferences, exportOptions),
    null,
    2,
  );

  const content = exportType === "markdown" ? markdownContent : jsonContent;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      exportType === "markdown"
        ? "design-preferences.md"
        : "design-preferences.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        padding: "var(--preview-padding-lg, 1rem)",
        borderBottom: "1px solid var(--preview-border, #334155)",
        backgroundColor: "var(--preview-bg-surface, #1e293b)",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "var(--preview-container, 80rem)" }}
      >
        {/* Exclude colors toggle */}
        <label
          className="mb-3 flex cursor-pointer items-center"
          style={{ gap: "var(--preview-gap, 0.5rem)" }}
        >
          <input
            type="checkbox"
            checked={excludeColors}
            onChange={(e) => setExcludeColors(e.target.checked)}
            className="h-4 w-4 cursor-pointer accent-[var(--preview-accent,#3b82f6)]"
          />
          <span
            style={{
              fontSize: "var(--preview-text-sm, 0.875rem)",
              color: "var(--preview-text-secondary, #94a3b8)",
            }}
          >
            Exclude colors from export
          </span>
        </label>

        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setExportType("markdown")}
              className="flex-1 transition-colors sm:flex-none"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                backgroundColor:
                  exportType === "markdown"
                    ? "var(--preview-accent, #3b82f6)"
                    : "var(--preview-bg, #0f172a)",
                color:
                  exportType === "markdown"
                    ? "#ffffff"
                    : "var(--preview-text-secondary, #94a3b8)",
                borderRadius: "var(--preview-radius, 0)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              Markdown
            </button>
            <button
              type="button"
              onClick={() => setExportType("json")}
              className="flex-1 transition-colors sm:flex-none"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                backgroundColor:
                  exportType === "json"
                    ? "var(--preview-accent, #3b82f6)"
                    : "var(--preview-bg, #0f172a)",
                color:
                  exportType === "json"
                    ? "#ffffff"
                    : "var(--preview-text-secondary, #94a3b8)",
                borderRadius: "var(--preview-radius, 0)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              JSON
            </button>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 transition-opacity hover:opacity-80 sm:flex-none"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="flex-1 transition-opacity hover:opacity-80 sm:flex-none"
              style={{
                padding: "var(--preview-padding, 0.75rem)",
                fontSize: "var(--preview-text-sm, 0.875rem)",
                color: "var(--preview-text-secondary, #94a3b8)",
                transitionDuration: "var(--preview-duration, 150ms)",
              }}
            >
              Download
            </button>
          </div>
        </div>
        <pre
          className="overflow-auto"
          style={{
            maxHeight: "16rem",
            padding: "var(--preview-padding, 0.75rem)",
            backgroundColor: "var(--preview-bg, #0f172a)",
            borderRadius: "var(--preview-radius, 0)",
            fontSize: "var(--preview-text-xs, 0.75rem)",
            color: "var(--preview-text-secondary, #94a3b8)",
          }}
        >
          {content}
        </pre>
      </div>
    </div>
  );
}
