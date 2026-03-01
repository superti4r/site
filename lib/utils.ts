/**
 * Utility function to combine class names using clsx and tailwind-merge.
 * @clsx @utils
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}