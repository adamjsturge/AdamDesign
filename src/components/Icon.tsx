import { useAtomValue } from "jotai";
import type { CSSProperties } from "react";
import { createElement } from "react";

import { preferencesAtom } from "../atoms/preferencesAtom";
import type {
    IconLibrary,
    IconName,
    IconSizeContext,
    IconStyle,
} from "../types/icons";
import { LIBRARY_DEFAULT_STYLE, LIBRARY_STYLES } from "../types/icons";
import { getIconComponent } from "../utils/iconMappings";

interface IconProps {
    name: IconName;
    context?: IconSizeContext;
    // Override size directly (in pixels or CSS value)
    size?: number | string;
    // Override library for previews
    library?: IconLibrary;
    // Override style for previews
    style?: IconStyle;
    className?: string;
    // Additional inline styles
    cssStyle?: CSSProperties;
    // ARIA label for accessibility
    "aria-label"?: string;
    "aria-hidden"?: boolean;
}

// CSS variable names for each size context
const SIZE_VAR_MAP: Record<IconSizeContext, string> = {
    button: "--preview-button-icon-size",
    header: "--preview-header-icon-size",
    landing: "--preview-landing-icon-size",
    default: "--preview-icon-size",
};

// Default sizes (fallbacks)
const DEFAULT_SIZES: Record<IconSizeContext, string> = {
    button: "18px",
    header: "16px",
    landing: "40px",
    default: "20px",
};

export function Icon({
    name,
    context = "default",
    size,
    library: libraryOverride,
    style: styleOverride,
    className,
    cssStyle,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
}: IconProps) {
    const preferences = useAtomValue(preferencesAtom);

    // Get library from preferences or override
    const library: IconLibrary =
        libraryOverride ||
        (preferences.iconLibrary as IconLibrary) ||
        "ionicons";

    // Get style from preferences or override, ensuring it's valid for the library
    let iconStyle: IconStyle =
        styleOverride || (preferences.iconStyle as IconStyle) || "filled";

    // If the selected style isn't available for this library, use the library's default
    const availableStyles = LIBRARY_STYLES[library];
    if (!availableStyles.includes(iconStyle)) {
        iconStyle = LIBRARY_DEFAULT_STYLE[library];
    }

    // Get the icon component
    const IconComponent = getIconComponent(name, library, iconStyle);

    if (!IconComponent) {
        // Fallback: render nothing or a placeholder
        return null;
    }

    // Determine size
    const sizeVar = SIZE_VAR_MAP[context];
    const defaultSize = DEFAULT_SIZES[context];
    let computedSize: string;
    if (size === undefined) {
        computedSize = `var(${sizeVar}, ${defaultSize})`;
    } else {
        computedSize = typeof size === "number" ? `${size}px` : size;
    }

    const iconStyles: CSSProperties = {
        width: computedSize,
        height: computedSize,
        flexShrink: 0,
        ...cssStyle,
    };

    // Use createElement to avoid linter "component created during render" warning
    return createElement(IconComponent, {
        className,
        style: iconStyles,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden ?? !ariaLabel,
    });
}

// Export a version that doesn't read from preferences (for previews)
interface StaticIconProps {
    name: IconName;
    library: IconLibrary;
    style: IconStyle;
    size: number | string;
    className?: string;
    cssStyle?: CSSProperties;
}

export function StaticIcon({
    name,
    library,
    style,
    size,
    className,
    cssStyle,
}: StaticIconProps) {
    // Ensure the style is valid for this library
    let iconStyle = style;
    const availableStyles = LIBRARY_STYLES[library];
    if (!availableStyles.includes(iconStyle)) {
        iconStyle = LIBRARY_DEFAULT_STYLE[library];
    }

    const IconComponent = getIconComponent(name, library, iconStyle);

    if (!IconComponent) {
        return null;
    }

    const computedSize = typeof size === "number" ? `${size}px` : size;

    // Use createElement to avoid linter "component created during render" warning
    return createElement(IconComponent, {
        className,
        style: {
            width: computedSize,
            height: computedSize,
            flexShrink: 0,
            ...cssStyle,
        },
        "aria-hidden": true,
    });
}
