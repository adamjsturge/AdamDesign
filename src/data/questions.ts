import type { PreferenceQuestion } from "../types/preferences";

export const questions: PreferenceQuestion[] = [
  // Question 1: Theme (uses custom UI - see ThemeQuestionCard)
  {
    id: "theme",
    category: "colors",
    title: "Theme",
    description: "Choose a color theme for your interface",
    options: [], // Rendered via ThemeQuestionCard with presets
    defaultValue: "dark",
    hasCustomUI: true,
  },

  // Question 2: Animation Style (early so user sees the effect!)
  {
    id: "animationStyle",
    category: "animation",
    title: "Animation & Motion",
    description:
      "How should things move? Pick one and watch the page transition!",
    options: [
      {
        id: "none",
        label: "None",
        description: "No animations, instant changes",
        cssVars: { "--preview-duration": "0ms" },
      },
      {
        id: "minimal",
        label: "Minimal",
        description: "Quick, subtle transitions",
        cssVars: { "--preview-duration": "100ms" },
      },
      {
        id: "smooth",
        label: "Smooth",
        description: "Noticeable but snappy",
        cssVars: { "--preview-duration": "200ms" },
      },
      {
        id: "expressive",
        label: "Expressive",
        description: "Longer, more dramatic",
        cssVars: { "--preview-duration": "300ms" },
      },
    ],
    defaultValue: "none",
  },

  // Question 3: Border Radius
  {
    id: "borderRadius",
    category: "shapes",
    title: "Corner Style",
    description: "How rounded should corners be?",
    options: [
      {
        id: "none",
        label: "Sharp",
        description: "No rounding, clean edges",
        cssVars: {
          "--preview-radius": "0px",
          "--preview-button-radius": "0px",
        },
        tailwindClasses: "rounded-none",
      },
      {
        id: "sm",
        label: "Subtle",
        description: "Slight rounding",
        cssVars: {
          "--preview-radius": "0.125rem",
          "--preview-button-radius": "0.125rem",
        },
        tailwindClasses: "rounded-sm",
      },
      {
        id: "md",
        label: "Moderate",
        description: "Balanced rounding",
        cssVars: {
          "--preview-radius": "0.375rem",
          "--preview-button-radius": "0.375rem",
        },
        tailwindClasses: "rounded-md",
      },
      {
        id: "lg",
        label: "Rounded",
        description: "Soft, friendly corners",
        cssVars: {
          "--preview-radius": "0.5rem",
          "--preview-button-radius": "0.5rem",
        },
        tailwindClasses: "rounded-lg",
      },
      {
        id: "full",
        label: "Pill",
        description: "Fully rounded ends",
        cssVars: {
          "--preview-radius": "0.5rem",
          "--preview-button-radius": "9999px",
        },
        tailwindClasses: "rounded-full",
      },
    ],
    defaultValue: "none",
  },

  // Question 4: Spacing Density
  {
    id: "spacingDensity",
    category: "spacing",
    title: "Content Density",
    description: "How much space between elements?",
    options: [
      {
        id: "compact",
        label: "Compact",
        description: "Dense, information-rich",
        cssVars: {
          "--preview-gap": "0.5rem",
          "--preview-padding": "0.75rem",
          "--preview-gap-lg": "0.75rem",
          "--preview-padding-lg": "1rem",
        },
      },
      {
        id: "comfortable",
        label: "Comfortable",
        description: "Balanced spacing",
        cssVars: {
          "--preview-gap": "0.75rem",
          "--preview-padding": "1rem",
          "--preview-gap-lg": "1rem",
          "--preview-padding-lg": "1.5rem",
        },
      },
      {
        id: "spacious",
        label: "Spacious",
        description: "Lots of breathing room",
        cssVars: {
          "--preview-gap": "1rem",
          "--preview-padding": "1.5rem",
          "--preview-gap-lg": "1.5rem",
          "--preview-padding-lg": "2rem",
        },
      },
    ],
    defaultValue: "comfortable",
  },

  // Question 5: Shadow Style
  {
    id: "shadowStyle",
    category: "shapes",
    title: "Depth & Shadows",
    description: "How should depth be conveyed?",
    options: [
      {
        id: "none",
        label: "None",
        description: "Flat design, use contrast instead",
        cssVars: { "--preview-shadow": "none" },
        tailwindClasses: "shadow-none",
      },
      {
        id: "subtle",
        label: "Subtle",
        description: "Barely visible shadows",
        cssVars: {
          "--preview-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        },
        tailwindClasses: "shadow-sm",
      },
      {
        id: "moderate",
        label: "Moderate",
        description: "Clear but soft shadows",
        cssVars: {
          "--preview-shadow":
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        },
        tailwindClasses: "shadow-md",
      },
      {
        id: "strong",
        label: "Strong",
        description: "Bold, defined shadows",
        cssVars: {
          "--preview-shadow":
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        },
        tailwindClasses: "shadow-lg",
      },
    ],
    defaultValue: "none",
  },

  // Question 6: Border Usage
  {
    id: "borderUsage",
    category: "shapes",
    title: "Border Usage",
    description: "How should borders appear on elements?",
    options: [
      {
        id: "none",
        label: "None",
        description: "No borders, use background contrast",
        cssVars: {
          "--preview-border-width": "0px",
          "--preview-border-color": "transparent",
        },
      },
      {
        id: "subtle",
        label: "Subtle",
        description: "Thin borders on containers",
        cssVars: {
          "--preview-border-width": "1px",
          "--preview-border-color": "var(--preview-border)",
        },
      },
      {
        id: "prominent",
        label: "Prominent",
        description: "Visible borders everywhere",
        cssVars: {
          "--preview-border-width": "2px",
          "--preview-border-color": "var(--preview-border)",
        },
      },
      {
        id: "accent",
        label: "Accent",
        description: "Colored accent borders",
        cssVars: {
          "--preview-border-width": "2px",
          "--preview-border-color": "var(--preview-accent)",
        },
      },
    ],
    defaultValue: "none",
  },

  // Question 7: Typography Scale
  {
    id: "typographyScale",
    category: "typography",
    title: "Text Hierarchy",
    description: "How dramatic should size differences be?",
    showTextPreview: true,
    options: [
      {
        id: "tight",
        label: "Subtle",
        description: "Small differences between sizes",
        cssVars: {
          "--preview-text-xs": "0.75rem",
          "--preview-text-sm": "0.875rem",
          "--preview-text-base": "0.875rem",
          "--preview-text-lg": "1rem",
          "--preview-text-xl": "1.125rem",
          "--preview-text-2xl": "1.25rem",
          "--preview-text-3xl": "1.5rem",
        },
      },
      {
        id: "moderate",
        label: "Moderate",
        description: "Clear hierarchy",
        cssVars: {
          "--preview-text-xs": "0.75rem",
          "--preview-text-sm": "0.875rem",
          "--preview-text-base": "1rem",
          "--preview-text-lg": "1.125rem",
          "--preview-text-xl": "1.25rem",
          "--preview-text-2xl": "1.5rem",
          "--preview-text-3xl": "2rem",
        },
      },
      {
        id: "dramatic",
        label: "Dramatic",
        description: "Big headlines, clear contrast",
        cssVars: {
          "--preview-text-xs": "0.75rem",
          "--preview-text-sm": "0.875rem",
          "--preview-text-base": "1rem",
          "--preview-text-lg": "1.25rem",
          "--preview-text-xl": "1.5rem",
          "--preview-text-2xl": "2rem",
          "--preview-text-3xl": "3rem",
        },
      },
    ],
    defaultValue: "tight",
  },

  // Question 7b: Text Color Contrast
  {
    id: "textColorContrast",
    category: "typography",
    title: "Text Color Contrast",
    description: "Should all text be the same color, or should titles stand out?",
    showTextPreview: true,
    options: [
      {
        id: "uniform",
        label: "Uniform",
        description: "All text uses the same color",
        cssVars: {
          "--preview-text-secondary": "var(--preview-text)",
        },
      },
      {
        id: "hierarchical",
        label: "Hierarchical",
        description: "Titles prominent, body text muted",
        cssVars: {},
      },
    ],
    defaultValue: "hierarchical",
  },

  // Question 7c: Line Height
  {
    id: "lineHeight",
    category: "typography",
    title: "Line Height",
    description: "How much space between lines of text?",
    showTextPreview: true,
    options: [
      {
        id: "tight",
        label: "Tight",
        description: "Compact, dense text",
        cssVars: {
          "--preview-leading": "1.25",
          "--preview-leading-relaxed": "1.4",
        },
      },
      {
        id: "normal",
        label: "Normal",
        description: "Standard readability",
        cssVars: {
          "--preview-leading": "1.5",
          "--preview-leading-relaxed": "1.625",
        },
      },
      {
        id: "relaxed",
        label: "Relaxed",
        description: "Airy, easy to read",
        cssVars: {
          "--preview-leading": "1.75",
          "--preview-leading-relaxed": "2",
        },
      },
    ],
    defaultValue: "normal",
  },

  // Question 7d: Text Alignment
  {
    id: "textAlignment",
    category: "typography",
    title: "Text Alignment",
    description: "How should body text be aligned?",
    showTextPreview: true,
    options: [
      {
        id: "left",
        label: "Left",
        description: "Ragged right edge, easiest to read",
        cssVars: { "--preview-text-align": "left" },
      },
      {
        id: "center",
        label: "Center",
        description: "Centered on each line",
        cssVars: { "--preview-text-align": "center" },
      },
      {
        id: "justify",
        label: "Justified",
        description: "Even edges on both sides",
        cssVars: { "--preview-text-align": "justify" },
      },
    ],
    defaultValue: "center",
  },

  // Question 7e: Font Weight
  {
    id: "fontWeight",
    category: "typography",
    title: "Font Weight",
    description: "How bold should text appear?",
    showTextPreview: true,
    options: [
      {
        id: "light",
        label: "Light",
        description: "Thin and airy feel",
        cssVars: {
          "--preview-font-weight-normal": "300",
          "--preview-font-weight-semibold": "500",
          "--preview-font-weight-bold": "600",
        },
      },
      {
        id: "regular",
        label: "Regular",
        description: "Standard weight hierarchy",
        cssVars: {
          "--preview-font-weight-normal": "400",
          "--preview-font-weight-semibold": "600",
          "--preview-font-weight-bold": "700",
        },
      },
      {
        id: "heavy",
        label: "Heavy",
        description: "Bold and prominent",
        cssVars: {
          "--preview-font-weight-normal": "500",
          "--preview-font-weight-semibold": "700",
          "--preview-font-weight-bold": "900",
        },
      },
    ],
    defaultValue: "regular",
  },

  // Question 8: Font Family
  {
    id: "fontFamily",
    category: "typography",
    title: "Font Family",
    description: "Choose your preferred typeface",
    showTextPreview: true,
    options: [
      {
        id: "system",
        label: "System",
        description: "Native system fonts (fastest)",
        cssVars: {
          "--preview-font":
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          "--preview-font-url": "",
        },
      },
      {
        id: "inter",
        label: "Inter",
        description: "Modern, clean sans-serif",
        cssVars: {
          "--preview-font": "'Inter', sans-serif",
          "--preview-font-url":
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      },
      {
        id: "opensans",
        label: "Open Sans",
        description: "Friendly and highly readable",
        cssVars: {
          "--preview-font": "'Open Sans', sans-serif",
          "--preview-font-url":
            "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap",
        },
      },
      {
        id: "roboto",
        label: "Roboto",
        description: "Google's signature font",
        cssVars: {
          "--preview-font": "'Roboto', sans-serif",
          "--preview-font-url":
            "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
        },
      },
      {
        id: "lato",
        label: "Lato",
        description: "Warm and professional",
        cssVars: {
          "--preview-font": "'Lato', sans-serif",
          "--preview-font-url":
            "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
        },
      },
      {
        id: "opendyslexic",
        label: "OpenDyslexic",
        description: "Designed for readability",
        cssVars: {
          "--preview-font": "'OpenDyslexic', sans-serif",
          "--preview-font-url": "https://fonts.cdnfonts.com/css/opendyslexic",
        },
      },
    ],
    defaultValue: "system",
  },

  // Question 9: Button Style
  {
    id: "buttonStyle",
    category: "components",
    title: "Button Style",
    description: "How should primary buttons look?",
    options: [
      {
        id: "filled",
        label: "Filled",
        description: "Solid background color",
        cssVars: { "--preview-button-style": "filled" },
      },
      {
        id: "outline",
        label: "Outline",
        description: "Border with transparent background",
        cssVars: { "--preview-button-style": "outline" },
      },
      {
        id: "ghost",
        label: "Ghost",
        description: "Text only, background on hover",
        cssVars: { "--preview-button-style": "ghost" },
      },
      {
        id: "gradient",
        label: "Gradient",
        description: "Gradient background",
        cssVars: { "--preview-button-style": "gradient" },
      },
    ],
    defaultValue: "filled",
  },

  // Question 9: Input Style
  {
    id: "inputStyle",
    category: "components",
    title: "Input Fields",
    description: "How should form inputs look?",
    options: [
      {
        id: "filled",
        label: "Filled",
        description: "Solid background, minimal border",
        cssVars: { "--preview-input-style": "filled" },
      },
      {
        id: "outlined",
        label: "Outlined",
        description: "Clear border, transparent background",
        cssVars: { "--preview-input-style": "outlined" },
      },
      {
        id: "underlined",
        label: "Underlined",
        description: "Bottom border only",
        cssVars: { "--preview-input-style": "underlined" },
      },
    ],
    defaultValue: "filled",
  },

  // Question 10: Card Style
  {
    id: "cardStyle",
    category: "components",
    title: "Card Style",
    description: "How should cards and panels look?",
    options: [
      {
        id: "bordered",
        label: "Bordered",
        description: "Clear border around cards",
        cssVars: { "--preview-card-style": "bordered" },
      },
      {
        id: "filled",
        label: "Filled",
        description: "Background color, no border",
        cssVars: { "--preview-card-style": "filled" },
      },
      {
        id: "elevated",
        label: "Elevated",
        description: "Shadow for depth (uses shadow setting)",
        cssVars: { "--preview-card-style": "elevated" },
      },
      {
        id: "transparent",
        label: "Transparent",
        description: "Dividers separate content",
        cssVars: { "--preview-card-style": "transparent" },
      },
    ],
    defaultValue: "bordered",
  },

  // Question 11: Badge/Tag Style
  {
    id: "badgeStyle",
    category: "components",
    title: "Badge & Tag Style",
    description: "How should labels and tags appear?",
    options: [
      {
        id: "subtle",
        label: "Subtle",
        description: "Light background tint",
        cssVars: { "--preview-badge-style": "subtle" },
      },
      {
        id: "outlined",
        label: "Outlined",
        description: "Border with no fill",
        cssVars: { "--preview-badge-style": "outlined" },
      },
      {
        id: "solid",
        label: "Solid",
        description: "Strong background color",
        cssVars: { "--preview-badge-style": "solid" },
      },
      {
        id: "pill",
        label: "Pill",
        description: "Fully rounded ends",
        cssVars: { "--preview-badge-style": "pill" },
      },
    ],
    defaultValue: "subtle",
  },

  // Question 12: Link Style
  {
    id: "linkStyle",
    category: "components",
    title: "Link Style",
    description: "How should clickable text links look?",
    options: [
      {
        id: "underline",
        label: "Underlined",
        description: "Classic underlined links",
        cssVars: { "--preview-link-style": "underline" },
      },
      {
        id: "color",
        label: "Color Only",
        description: "Accent color, no underline",
        cssVars: { "--preview-link-style": "color" },
      },
      {
        id: "underline-hover",
        label: "Underline on Hover",
        description: "Underline appears on hover",
        cssVars: { "--preview-link-style": "underline-hover" },
      },
      {
        id: "bold",
        label: "Bold",
        description: "Heavier weight, accent color",
        cssVars: { "--preview-link-style": "bold" },
      },
    ],
    defaultValue: "color",
  },

  // Question 13: Focus Indicator
  {
    id: "focusStyle",
    category: "components",
    title: "Focus Indicator",
    description: "How should focused elements be highlighted?",
    options: [
      {
        id: "ring",
        label: "Ring",
        description: "Offset outline ring",
        cssVars: { "--preview-focus-style": "ring" },
      },
      {
        id: "outline",
        label: "Outline",
        description: "Direct border outline",
        cssVars: { "--preview-focus-style": "outline" },
      },
      {
        id: "glow",
        label: "Glow",
        description: "Soft shadow glow effect",
        cssVars: { "--preview-focus-style": "glow" },
      },
      {
        id: "border",
        label: "Border",
        description: "Accent colored border",
        cssVars: { "--preview-focus-style": "border" },
      },
    ],
    defaultValue: "ring",
  },

  // Question 14: Hover Effect
  {
    id: "hoverStyle",
    category: "components",
    title: "Hover Effect",
    description: "How should elements respond to hover?",
    options: [
      {
        id: "background",
        label: "Background",
        description: "Subtle background change",
        cssVars: { "--preview-hover-style": "background" },
      },
      {
        id: "border",
        label: "Border",
        description: "Border appears on hover",
        cssVars: { "--preview-hover-style": "border" },
      },
      {
        id: "opacity",
        label: "Opacity",
        description: "Slight transparency shift",
        cssVars: { "--preview-hover-style": "opacity" },
      },
      {
        id: "accent",
        label: "Accent",
        description: "Accent color highlight",
        cssVars: { "--preview-hover-style": "accent" },
      },
    ],
    defaultValue: "background",
  },

  // Question 15: Disabled State
  {
    id: "disabledState",
    category: "components",
    title: "Disabled State",
    description: "How should disabled elements appear?",
    options: [
      {
        id: "opacity",
        label: "Opacity",
        description: "Reduced to 50% opacity",
        cssVars: { "--preview-disabled-style": "opacity" },
      },
      {
        id: "grayscale",
        label: "Grayscale",
        description: "Desaturated colors",
        cssVars: { "--preview-disabled-style": "grayscale" },
      },
      {
        id: "muted",
        label: "Muted",
        description: "Grayed out colors",
        cssVars: { "--preview-disabled-style": "muted" },
      },
    ],
    defaultValue: "muted",
  },

  // Question 16: Loading State
  {
    id: "loadingState",
    category: "components",
    title: "Loading State",
    description: "How should loading indicators appear?",
    options: [
      {
        id: "skeleton",
        label: "Skeleton",
        description: "Pulsing placeholder shapes",
        cssVars: { "--preview-loading-style": "skeleton" },
      },
      {
        id: "spinner",
        label: "Spinner",
        description: "Rotating circle",
        cssVars: { "--preview-loading-style": "spinner" },
      },
      {
        id: "progress",
        label: "Progress",
        description: "Indeterminate progress bar",
        cssVars: { "--preview-loading-style": "progress" },
      },
      {
        id: "dots",
        label: "Dots",
        description: "Bouncing dot animation",
        cssVars: { "--preview-loading-style": "dots" },
      },
    ],
    defaultValue: "spinner",
  },

  // Question 17: Icon Library
  {
    id: "iconLibrary",
    category: "components",
    title: "Icon Library",
    description: "Which icon style family do you prefer?",
    options: [
      {
        id: "fontawesome",
        label: "Font Awesome",
        description: "Classic, widely-used icon set",
        cssVars: { "--preview-icon-library": "fontawesome" },
      },
      {
        id: "ionicons",
        label: "Ionicons",
        description: "Clean icons from Ionic framework",
        cssVars: { "--preview-icon-library": "ionicons" },
      },
      {
        id: "lucide",
        label: "Lucide",
        description: "Modern fork of Feather icons",
        cssVars: { "--preview-icon-library": "lucide" },
      },
      {
        id: "heroicons",
        label: "Heroicons",
        description: "Beautiful icons by Tailwind CSS",
        cssVars: { "--preview-icon-library": "heroicons" },
      },
    ],
    defaultValue: "ionicons",
  },

  // Question 18: Icon Style
  {
    id: "iconStyle",
    category: "components",
    title: "Icon Style",
    description: "How should icons be rendered?",
    options: [
      {
        id: "sharp",
        label: "Sharp",
        description: "Crisp, angular corners",
        cssVars: { "--preview-icon-style": "sharp" },
      },
      {
        id: "rounded",
        label: "Rounded",
        description: "Soft, friendly corners",
        cssVars: { "--preview-icon-style": "rounded" },
      },
      {
        id: "outlined",
        label: "Outlined",
        description: "Stroke-only, minimal weight",
        cssVars: { "--preview-icon-style": "outlined" },
      },
      {
        id: "filled",
        label: "Filled",
        description: "Solid, bold presence",
        cssVars: { "--preview-icon-style": "filled" },
      },
    ],
    defaultValue: "filled",
  },

  // Question 19: Button Icon Size
  {
    id: "buttonIconSize",
    category: "components",
    title: "Button Icon Size",
    description: "How large should icons in buttons be?",
    options: [
      {
        id: "small",
        label: "Small",
        description: "Compact 14px icons",
        cssVars: { "--preview-button-icon-size": "14px" },
      },
      {
        id: "medium",
        label: "Medium",
        description: "Standard 18px icons",
        cssVars: { "--preview-button-icon-size": "18px" },
      },
      {
        id: "large",
        label: "Large",
        description: "Prominent 22px icons",
        cssVars: { "--preview-button-icon-size": "22px" },
      },
    ],
    defaultValue: "medium",
  },

  // Question 20: Landing Page Icon Size
  {
    id: "landingIconSize",
    category: "components",
    title: "Feature Icon Size",
    description: "How large should feature/hero icons be?",
    options: [
      {
        id: "small",
        label: "Small",
        description: "Compact 32px icons",
        cssVars: { "--preview-landing-icon-size": "32px" },
      },
      {
        id: "medium",
        label: "Medium",
        description: "Standard 40px icons",
        cssVars: { "--preview-landing-icon-size": "40px" },
      },
      {
        id: "large",
        label: "Large",
        description: "Prominent 48px icons",
        cssVars: { "--preview-landing-icon-size": "48px" },
      },
      {
        id: "xlarge",
        label: "Extra Large",
        description: "Statement 56px icons",
        cssVars: { "--preview-landing-icon-size": "56px" },
      },
    ],
    defaultValue: "medium",
  },

  // Question 21: Header Icon Size
  {
    id: "headerIconSize",
    category: "components",
    title: "Header Icon Size",
    description: "How large should navigation icons be?",
    options: [
      {
        id: "compact",
        label: "Compact",
        description: "Minimal 14px icons",
        cssVars: { "--preview-header-icon-size": "14px" },
      },
      {
        id: "standard",
        label: "Standard",
        description: "Balanced 16px icons",
        cssVars: { "--preview-header-icon-size": "16px" },
      },
      {
        id: "comfortable",
        label: "Comfortable",
        description: "Spacious 20px icons",
        cssVars: { "--preview-header-icon-size": "20px" },
      },
    ],
    defaultValue: "standard",
  },

  // Question 18: Container Width
  {
    id: "containerWidth",
    category: "layout",
    title: "Content Width",
    description: "How wide should main content be?",
    options: [
      {
        id: "narrow",
        label: "Narrow",
        description: "Focused reading width",
        cssVars: { "--preview-container": "48rem" },
        tailwindClasses: "max-w-3xl",
      },
      {
        id: "medium",
        label: "Medium",
        description: "Balanced width",
        cssVars: { "--preview-container": "64rem" },
        tailwindClasses: "max-w-5xl",
      },
      {
        id: "wide",
        label: "Wide",
        description: "Full use of screen",
        cssVars: { "--preview-container": "80rem" },
        tailwindClasses: "max-w-7xl",
      },
      {
        id: "full",
        label: "Full",
        description: "Edge to edge",
        cssVars: { "--preview-container": "100%" },
        tailwindClasses: "max-w-full",
      },
    ],
    defaultValue: "medium",
  },
];

// Helper to get default preferences from questions
export function getDefaultPreferences(): Record<string, string> {
  return questions.reduce(
    (acc, q) => {
      acc[q.id] = q.defaultValue;
      return acc;
    },
    {} as Record<string, string>,
  );
}
