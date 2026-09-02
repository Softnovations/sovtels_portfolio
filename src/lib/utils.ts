import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatMmk(value: number) {
  return `${value.toLocaleString("en-US")} MMK`;
}

export function formatCompactMmk(value: number) {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return `${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M MMK`;
  }
  if (value >= 1_000) {
    return `${Math.round(value / 1_000)}K MMK`;
  }
  return `${value} MMK`;
}
