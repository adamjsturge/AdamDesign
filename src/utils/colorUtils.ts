/**
 * Darken a hex color by a percentage
 */
export function darkenColor(hex: string, percent: number = 15): string {
  // Remove # if present
  const cleanHex = hex.replace("#", "");

  // Parse RGB values
  const num = Number.parseInt(cleanHex, 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;

  // Darken each channel
  const factor = 1 - percent / 100;
  const newR = Math.max(0, Math.round(r * factor));
  const newG = Math.max(0, Math.round(g * factor));
  const newB = Math.max(0, Math.round(b * factor));

  // Convert back to hex
  return `#${((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, "0")}`;
}

/**
 * Check if a hex color is valid
 */
export function isValidHex(hex: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(hex);
}

/**
 * Ensure a hex color has the # prefix
 */
export function normalizeHex(hex: string): string {
  const cleaned = hex.replace("#", "").toLowerCase();
  return `#${cleaned}`;
}
