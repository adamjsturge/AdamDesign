// Semantic icon names used throughout the app
export type IconName =
    | "play"
    | "shuffle"
    | "add"
    | "download"
    | "search"
    | "close"
    | "send"
    | "menu"
    | "github"
    | "lightning"
    | "shield"
    | "scale"
    | "info"
    | "check"
    | "chevronRight"
    | "chevronDown"
    | "user"
    | "settings"
    | "home";

// Icon library options
export type IconLibrary = "fontawesome" | "ionicons" | "lucide" | "heroicons";

// Icon style options (not all libraries support all styles)
export type IconStyle = "sharp" | "rounded" | "outlined" | "filled";

// Size context for contextual sizing
export type IconSizeContext = "button" | "header" | "landing" | "default";

// Styles supported by each library
export const LIBRARY_STYLES: Record<IconLibrary, IconStyle[]> = {
    fontawesome: ["filled", "outlined"],
    ionicons: ["filled", "outlined", "sharp"],
    lucide: ["outlined"], // Lucide is stroke-only
    heroicons: ["filled", "outlined"],
};

// Default style for each library
export const LIBRARY_DEFAULT_STYLE: Record<IconLibrary, IconStyle> = {
    fontawesome: "filled",
    ionicons: "filled",
    lucide: "outlined",
    heroicons: "outlined",
};
