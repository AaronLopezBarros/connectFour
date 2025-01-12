import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calculates the corresponding column on the board (1-based index)
export const getColumnByIndex = (cellIndex: number) => cellIndex + 1;
