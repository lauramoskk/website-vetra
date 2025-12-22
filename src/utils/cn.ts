import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Função utilitária para combinar classes Tailwind de forma organizada e legível
 * Permite agrupar classes por categoria e facilita a manutenção.
 * Usa `clsx` para lógica condicional e `tailwind-merge` para resolver conflitos de classes.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Organiza classes Tailwind em grupos para melhor legibilidade
 * Útil para componentes com muitas classes
 */
export function classGroups(groups: Record<string, string | undefined | null | false>): string {
	return Object.values(groups).filter(Boolean).join(' ');
}

