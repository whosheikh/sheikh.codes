import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function getDomainFromUrl(url: string): string | null {
  try {
    const hostname = new URL(url).hostname
    return hostname
  } catch (error) {
    return null
  }
}

export function getCurrentDomain(): string {
  if (typeof window === "undefined") return "sheikh.codes"
  return window.location.hostname
}

