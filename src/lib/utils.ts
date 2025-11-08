import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Downloads a PDF file from the public folder
 * @param filename - The filename in the public folder (e.g., "resume.pdf")
 * @param downloadName - Optional custom name for the downloaded file
 */
export function downloadPDF(filename: string, downloadName?: string) {
  const link = document.createElement("a");
  link.href = `/${filename}`;
  link.download = downloadName || filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}