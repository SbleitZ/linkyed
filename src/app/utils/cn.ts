import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Dividir las clases de tailwindCSS para una mejor estructura de distribución de clases
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
