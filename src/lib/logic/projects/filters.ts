export type ProjectFilters = {
	search: string;
	categories: string[];
	tags: string[];
};

export type ProjectFilterType = 'search' | 'categories' | 'tags';

export const getProjectFiltersFromUrl = (url: URL): ProjectFilters => ({
	search: url.searchParams.get('search') || '',
	categories: url.searchParams.getAll('categories') || [],
	tags: url.searchParams.getAll('tags') || []
});

export const buildProjectSearchParams = (filters: ProjectFilters) => {
	const searchParams = new URLSearchParams();

	if (filters.search) {
		searchParams.set('search', filters.search);
	}

	filters.categories.forEach((category) => {
		searchParams.append('categories', category);
	});

	filters.tags.forEach((tag) => {
		searchParams.append('tags', tag);
	});

	return searchParams;
};

export const updateProjectFilters = (
	filters: ProjectFilters,
	type: ProjectFilterType,
	value: string,
	checked: boolean
) => {
	if (type === 'search') {
		filters.search = value;
		return;
	}

	const list = filters[type];
	filters[type] = checked ? [...list, value] : list.filter((option) => option !== value);
};

export const createProjectFiltersList = (categories: string[], tags: string[]) => [
	{
		title: 'Filter by categories:',
		type: 'categories' as const,
		options: categories
	},
	{
		title: 'Filter by tags:',
		type: 'tags' as const,
		options: tags
	}
];
