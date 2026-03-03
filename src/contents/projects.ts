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
		name: 'E-Saturasi',
		description:
			'Learning Management System for SMKN 1 Sumberasih, built with Laravel and Tailwind CSS. It provides a platform for students and teachers to manage courses, assignments, and communication effectively.',
		image: '/images/projects/p01-esaturasi-banner.webp',
		url: '/',
		github: 'https://github.com/superti4r/esaturasi',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'flutter', 'filament']
	},
	{
		name: 'S-Learn',
		description:
			'A comprehensive Learning Management System (LMS) built with Laravel, Tailwind CSS, Go, Flutter. It offers a seamless experience for both educators and students, featuring course creation, interactive lessons, and real-time collaboration.',
		image: '/images/projects/p02-slearn-polije-banner.webp',
		url: 'https://slearn-jti.com/',
		github: '/',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'go', 'flutter', 'vue']
	},
	{
		name: 'POLARIS',
		description:
			'Digital Library System for Politeknik Negeri Surabaya, developed using Laravel, Tailwind CSS, Filament. In this project, rewrote from SLiMS (PHP Native) to Laravel, enhancing performance, security, and user experience while maintaining the core functionalities of a digital library.',
		image: '/images/projects/p03-polaris-surabaya-banner.webp',
		url: 'https://polaris-library.poltekpel-sby.ac.id/',
		github: '/',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss', 'filament', 'vite']
	},
	{
		name: '4yasenime',
		description:
			'Unofficial anime streaming website built with Next.js and Tailwind CSS. It provides a user-friendly interface for browsing and streaming anime content, featuring a vast library of titles, user reviews, and personalized recommendations.',
		image: '/images/projects/p04.4yasenime-banner.webp',
		url: 'https://anime.bachtiar.my.id/',
		github: 'https://github.com/superti4r/4yasenime',
		category: 'Web App',
		tags: ['nextjs', 'tailwindcss', 'restfulapi', 'selia']
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