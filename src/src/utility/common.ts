import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const classNames = (...classes: string[]): string => {
	return classes.filter(Boolean).join(' ');
};
