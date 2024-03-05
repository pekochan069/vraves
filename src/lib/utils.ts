import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param inputs class list to merge
 * @returns merged classes
 *
 * @example
 * ```tsx
 * <div className={cn('text-red-500', 'bg-blue-500', 'p-4')} />
 * ```
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
