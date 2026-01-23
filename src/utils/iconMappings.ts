import type { ComponentType } from "react";
import type { IconLibrary, IconName, IconStyle } from "../types/icons";

// Font Awesome - Solid (filled) and Regular (outlined)
import {
    FaBars,
    FaBolt,
    FaCheck,
    FaChevronDown,
    FaChevronRight,
    FaCircleInfo,
    FaDownload,
    FaGear,
    FaGithub,
    FaHouse,
    FaMagnifyingGlass,
    FaPaperPlane,
    FaPlay,
    FaPlus,
    FaRegCircle as FaRegCheck,
    FaRegCirclePlay as FaRegPlay,
    FaScaleBalanced,
    FaShield,
    FaShuffle,
    FaUser,
    FaXmark,
} from "react-icons/fa6";

// Ionicons - All variants (filled, outline, sharp)
import {
    // Filled (default)
    IoAdd,
    IoCheckmark,
    IoChevronDown as IoChevronDownFilled,
    IoChevronForward,
    IoClose,
    IoDownload,
    IoFlash,
    IoHome,
    IoInformationCircle,
    IoLogoGithub,
    IoMenu,
    IoPaperPlane,
    IoPerson,
    IoPlay,
    IoScale,
    IoSearch,
    IoSettings,
    IoShield,
    IoShuffle,
    // Outline
    IoAddOutline,
    IoCheckmarkOutline,
    IoChevronDownOutline,
    IoChevronForwardOutline,
    IoCloseOutline,
    IoDownloadOutline,
    IoFlashOutline,
    IoHomeOutline,
    IoInformationCircleOutline,
    IoMenuOutline,
    IoPaperPlaneOutline,
    IoPersonOutline,
    IoPlayOutline,
    IoScaleOutline,
    IoSearchOutline,
    IoSettingsOutline,
    IoShieldOutline,
    IoShuffleOutline,
    // Sharp
    IoAddSharp,
    IoCheckmarkSharp,
    IoChevronDownSharp,
    IoChevronForwardSharp,
    IoCloseSharp,
    IoDownloadSharp,
    IoFlashSharp,
    IoHomeSharp,
    IoInformationCircleSharp,
    IoMenuSharp,
    IoPaperPlaneSharp,
    IoPersonSharp,
    IoPlaySharp,
    IoScaleSharp,
    IoSearchSharp,
    IoSettingsSharp,
    IoShieldSharp,
    IoShuffleSharp,
} from "react-icons/io5";

// Lucide (outlined only)
import {
    Check as LuCheck,
    ChevronDown as LuChevronDown,
    ChevronRight as LuChevronRight,
    Download as LuDownload,
    Github as LuGithub,
    Home as LuHome,
    Info as LuInfo,
    Menu as LuMenu,
    Play as LuPlay,
    Plus as LuPlus,
    Scale as LuScale,
    Search as LuSearch,
    Send as LuSend,
    Settings as LuSettings,
    Shield as LuShield,
    Shuffle as LuShuffle,
    User as LuUser,
    X as LuX,
    Zap as LuZap,
} from "lucide-react";

// Heroicons - Solid (filled)
import {
    Bars3Icon as HiBars3Solid,
    BoltIcon as HiBoltSolid,
    CheckIcon as HiCheckSolid,
    ChevronDownIcon as HiChevronDownSolid,
    ChevronRightIcon as HiChevronRightSolid,
    HomeIcon as HiHomeSolid,
    InformationCircleIcon as HiInfoSolid,
    MagnifyingGlassIcon as HiSearchSolid,
    PaperAirplaneIcon as HiSendSolid,
    PlayIcon as HiPlaySolid,
    PlusIcon as HiPlusSolid,
    ScaleIcon as HiScaleSolid,
    ShieldCheckIcon as HiShieldSolid,
    UserIcon as HiUserSolid,
    XMarkIcon as HiXMarkSolid,
    ArrowDownTrayIcon as HiDownloadSolid,
    Cog6ToothIcon as HiSettingsSolid,
} from "@heroicons/react/24/solid";

// Heroicons - Outline
import {
    Bars3Icon as HiBars3Outline,
    BoltIcon as HiBoltOutline,
    CheckIcon as HiCheckOutline,
    ChevronDownIcon as HiChevronDownOutline,
    ChevronRightIcon as HiChevronRightOutline,
    HomeIcon as HiHomeOutline,
    InformationCircleIcon as HiInfoOutline,
    MagnifyingGlassIcon as HiSearchOutline,
    PaperAirplaneIcon as HiSendOutline,
    PlayIcon as HiPlayOutline,
    PlusIcon as HiPlusOutline,
    ScaleIcon as HiScaleOutline,
    ShieldCheckIcon as HiShieldOutline,
    UserIcon as HiUserOutline,
    XMarkIcon as HiXMarkOutline,
    ArrowDownTrayIcon as HiDownloadOutline,
    Cog6ToothIcon as HiSettingsOutline,
} from "@heroicons/react/24/outline";

// Icon component type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = ComponentType<any>;

// Actual styles that are mapped in icon libraries (subset of IconStyle)
type MappedIconStyle = "filled" | "outlined" | "sharp";

// Mapping structure for each library with style variants
type LibraryMapping = {
    [K in IconName]?: {
        [S in MappedIconStyle]?: IconComponent;
    };
};

// Font Awesome mappings
const fontawesomeMapping: LibraryMapping = {
    play: { filled: FaPlay, outlined: FaRegPlay },
    shuffle: { filled: FaShuffle, outlined: FaShuffle },
    add: { filled: FaPlus, outlined: FaPlus },
    download: { filled: FaDownload, outlined: FaDownload },
    search: { filled: FaMagnifyingGlass, outlined: FaMagnifyingGlass },
    close: { filled: FaXmark, outlined: FaXmark },
    send: { filled: FaPaperPlane, outlined: FaPaperPlane },
    menu: { filled: FaBars, outlined: FaBars },
    github: { filled: FaGithub, outlined: FaGithub },
    lightning: { filled: FaBolt, outlined: FaBolt },
    shield: { filled: FaShield, outlined: FaShield },
    scale: { filled: FaScaleBalanced, outlined: FaScaleBalanced },
    info: { filled: FaCircleInfo, outlined: FaCircleInfo },
    check: { filled: FaCheck, outlined: FaRegCheck },
    chevronRight: { filled: FaChevronRight, outlined: FaChevronRight },
    chevronDown: { filled: FaChevronDown, outlined: FaChevronDown },
    user: { filled: FaUser, outlined: FaUser },
    settings: { filled: FaGear, outlined: FaGear },
    home: { filled: FaHouse, outlined: FaHouse },
};

// Ionicons mappings
const ioniconsMapping: LibraryMapping = {
    play: { filled: IoPlay, outlined: IoPlayOutline, sharp: IoPlaySharp },
    shuffle: {
        filled: IoShuffle,
        outlined: IoShuffleOutline,
        sharp: IoShuffleSharp,
    },
    add: { filled: IoAdd, outlined: IoAddOutline, sharp: IoAddSharp },
    download: {
        filled: IoDownload,
        outlined: IoDownloadOutline,
        sharp: IoDownloadSharp,
    },
    search: {
        filled: IoSearch,
        outlined: IoSearchOutline,
        sharp: IoSearchSharp,
    },
    close: { filled: IoClose, outlined: IoCloseOutline, sharp: IoCloseSharp },
    send: {
        filled: IoPaperPlane,
        outlined: IoPaperPlaneOutline,
        sharp: IoPaperPlaneSharp,
    },
    menu: { filled: IoMenu, outlined: IoMenuOutline, sharp: IoMenuSharp },
    github: { filled: IoLogoGithub, outlined: IoLogoGithub, sharp: IoLogoGithub },
    lightning: {
        filled: IoFlash,
        outlined: IoFlashOutline,
        sharp: IoFlashSharp,
    },
    shield: {
        filled: IoShield,
        outlined: IoShieldOutline,
        sharp: IoShieldSharp,
    },
    scale: { filled: IoScale, outlined: IoScaleOutline, sharp: IoScaleSharp },
    info: {
        filled: IoInformationCircle,
        outlined: IoInformationCircleOutline,
        sharp: IoInformationCircleSharp,
    },
    check: {
        filled: IoCheckmark,
        outlined: IoCheckmarkOutline,
        sharp: IoCheckmarkSharp,
    },
    chevronRight: {
        filled: IoChevronForward,
        outlined: IoChevronForwardOutline,
        sharp: IoChevronForwardSharp,
    },
    chevronDown: {
        filled: IoChevronDownFilled,
        outlined: IoChevronDownOutline,
        sharp: IoChevronDownSharp,
    },
    user: { filled: IoPerson, outlined: IoPersonOutline, sharp: IoPersonSharp },
    settings: {
        filled: IoSettings,
        outlined: IoSettingsOutline,
        sharp: IoSettingsSharp,
    },
    home: { filled: IoHome, outlined: IoHomeOutline, sharp: IoHomeSharp },
};

// Lucide mappings (outlined only - using same for all styles)
const lucideMapping: LibraryMapping = {
    play: { outlined: LuPlay },
    shuffle: { outlined: LuShuffle },
    add: { outlined: LuPlus },
    download: { outlined: LuDownload },
    search: { outlined: LuSearch },
    close: { outlined: LuX },
    send: { outlined: LuSend },
    menu: { outlined: LuMenu },
    github: { outlined: LuGithub },
    lightning: { outlined: LuZap },
    shield: { outlined: LuShield },
    scale: { outlined: LuScale },
    info: { outlined: LuInfo },
    check: { outlined: LuCheck },
    chevronRight: { outlined: LuChevronRight },
    chevronDown: { outlined: LuChevronDown },
    user: { outlined: LuUser },
    settings: { outlined: LuSettings },
    home: { outlined: LuHome },
};

// Heroicons mappings
const heroiconsMapping: LibraryMapping = {
    play: { filled: HiPlaySolid, outlined: HiPlayOutline },
    shuffle: { filled: HiPlaySolid, outlined: HiPlayOutline }, // Heroicons doesn't have shuffle
    add: { filled: HiPlusSolid, outlined: HiPlusOutline },
    download: { filled: HiDownloadSolid, outlined: HiDownloadOutline },
    search: { filled: HiSearchSolid, outlined: HiSearchOutline },
    close: { filled: HiXMarkSolid, outlined: HiXMarkOutline },
    send: { filled: HiSendSolid, outlined: HiSendOutline },
    menu: { filled: HiBars3Solid, outlined: HiBars3Outline },
    github: { filled: HiUserSolid, outlined: HiUserOutline }, // No GitHub icon in Heroicons
    lightning: { filled: HiBoltSolid, outlined: HiBoltOutline },
    shield: { filled: HiShieldSolid, outlined: HiShieldOutline },
    scale: { filled: HiScaleSolid, outlined: HiScaleOutline },
    info: { filled: HiInfoSolid, outlined: HiInfoOutline },
    check: { filled: HiCheckSolid, outlined: HiCheckOutline },
    chevronRight: { filled: HiChevronRightSolid, outlined: HiChevronRightOutline },
    chevronDown: { filled: HiChevronDownSolid, outlined: HiChevronDownOutline },
    user: { filled: HiUserSolid, outlined: HiUserOutline },
    settings: { filled: HiSettingsSolid, outlined: HiSettingsOutline },
    home: { filled: HiHomeSolid, outlined: HiHomeOutline },
};

// Combined mappings
const iconMappings: Record<IconLibrary, LibraryMapping> = {
    fontawesome: fontawesomeMapping,
    ionicons: ioniconsMapping,
    lucide: lucideMapping,
    heroicons: heroiconsMapping,
};

// Get icon component for a given name, library, and style
export function getIconComponent(
    name: IconName,
    library: IconLibrary,
    style: IconStyle,
): IconComponent | null {
    const libraryMapping = iconMappings[library];
    if (!libraryMapping) return null;

    const iconEntry = libraryMapping[name];
    if (!iconEntry) return null;

    // Map IconStyle to MappedIconStyle (rounded falls back to filled)
    const mappedStyle: MappedIconStyle =
        style === "rounded" ? "filled" : (style as MappedIconStyle);

    // Try requested style first
    if (iconEntry[mappedStyle]) {
        return iconEntry[mappedStyle] ?? null;
    }

    // Fall back to filled, then outlined
    return iconEntry.filled ?? iconEntry.outlined ?? null;
}

// Export for direct access if needed
export { iconMappings };
