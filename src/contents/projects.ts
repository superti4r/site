export type Project = {
	name: string;
	description: string;
	image: string;
	url: string;
	github: string;
	category: string;
	tags: string[];
};

export const projects: Project[] = [
	{
		name: 'S-Learn',
		description:
			'A comprehensive Learning Management System (LMS) built with Laravel, Tailwind CSS, Go, Flutter. It offers a seamless experience for both educators and students, featuring course creation, interactive lessons, and real-time collaboration.',
		image: '/images/projects/slearn.png',
		url: 'https://slearn-jti.com/',
		github: 'https://github.com/jtiinnovation/slearn',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'go', 'flutter', 'vue']
	},
	{
		name: 'S-Learn',
		description:
			'A comprehensive Learning Management System (LMS) built with Laravel, Tailwind CSS, Go, Flutter. It offers a seamless experience for both educators and students, featuring course creation, interactive lessons, and real-time collaboration.',
		image: '/images/projects/slearn.png',
		url: 'https://slearn-jti.com/',
		github: 'https://github.com/jtiinnovation/slearn',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'go', 'flutter', 'vue']
	},
	{
		name: 'S-Learn',
		description:
			'A comprehensive Learning Management System (LMS) built with Laravel, Tailwind CSS, Go, Flutter. It offers a seamless experience for both educators and students, featuring course creation, interactive lessons, and real-time collaboration.',
		image: '/images/projects/slearn.png',
		url: 'https://slearn-jti.com/',
		github: 'https://github.com/jtiinnovation/slearn',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'go', 'flutter', 'vue']
	},
	{
		name: 'S-Learn',
		description:
			'A comprehensive Learning Management System (LMS) built with Laravel, Tailwind CSS, Go, Flutter. It offers a seamless experience for both educators and students, featuring course creation, interactive lessons, and real-time collaboration.',
		image: '/images/projects/slearn.png',
		url: 'https://slearn-jti.com/',
		github: 'https://github.com/jtiinnovation/slearn',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'go', 'flutter', 'vue']
	},
	{
		name: 'S-Learn',
		description:
			'A comprehensive Learning Management System (LMS) built with Laravel, Tailwind CSS, Go, Flutter. It offers a seamless experience for both educators and students, featuring course creation, interactive lessons, and real-time collaboration.',
		image: '/images/projects/slearn.png',
		url: 'https://slearn-jti.com/',
		github: 'https://github.com/jtiinnovation/slearn',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'go', 'flutter', 'vue']
	},
];

interface Filter {
	search?: string;
	categories?: string[];
	tags?: string[];
}

export function getProjects(filter?: Filter) {
	let result = projects;

	if (filter?.search) {
		const searchLower = filter.search.toLowerCase();
		result = result.filter(
			(p) =>
				p.name.toLowerCase().includes(searchLower) ||
				p.description.toLowerCase().includes(searchLower)
		);
	}

	if (filter?.categories && filter.categories.length > 0) {
		const categoriesLower = filter.categories.map((c) => c.toLowerCase());
		result = result.filter((p) => categoriesLower.includes(p.category.toLowerCase()));
	}

	if (filter?.tags && filter.tags.length > 0) {
		const tagsLower = filter.tags.map((t) => t.toLowerCase());
		result = result.filter((p) =>
			tagsLower.every((tag) => p.tags.map((t) => t.toLowerCase()).includes(tag))
		);
	}

	return result;
}

export function getCategories(): string[] {
	const categories = projects.map((p) => p.category);
	return [...new Set(categories)].sort((a, b) => a.localeCompare(b));
}

export function getTags(): string[] {
	const allTags = projects.flatMap((p) => p.tags);
	return [...new Set(allTags)].sort((a, b) => a.localeCompare(b));
}