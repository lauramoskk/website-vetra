/**
 * Função utilitária para combinar classes Tailwind de forma organizada e legível
 * Permite agrupar classes por categoria e facilita a manutenção
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(' ');
}

/**
 * Organiza classes Tailwind em grupos para melhor legibilidade
 * Útil para componentes com muitas classes
 */
export function classGroups(groups: Record<string, string | undefined | null | false>): string {
	return Object.values(groups).filter(Boolean).join(' ');
}

