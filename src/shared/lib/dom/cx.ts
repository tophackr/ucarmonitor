import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines the clsx and tailwind-merge libraries to create a utility function
 * that merges class names and resolves conflicts between Tailwind CSS classes.
 *
 * @param args - Class names to be merged.
 * @returns A single string of merged class names.
 */
export const cx = (...args: ClassValue[]) => twMerge(clsx(...args))
