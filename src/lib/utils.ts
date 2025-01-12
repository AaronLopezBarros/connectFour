import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calculates the corresponding CSS Grid column (1-based index)
export const getGridColByIndex = (cellIndex: number) => cellIndex + 1;
