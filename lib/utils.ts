import { clsx, type ClassValue } from "clsx";
import { format, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(value: string) {
  return format(parseISO(value), "dd/MM/yyyy");
}

export function formatReadingTime(minutes: number) {
  return `${minutes} phút đọc`;
}

export function estimateExcerpt(content: string) {
  return content.replace(/[#>*`-]/g, "").replace(/\s+/g, " ").trim();
}

export function buildPageNumbers(totalPages: number) {
  return Array.from({ length: totalPages }, (_, index) => index + 1);
}
