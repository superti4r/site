export type ArticleFilters = {
	search: string;
	categories: string[];
	tags: string[];
	lang: 'en' | 'id';
};

export type ArticleFilterType = 'search' | 'categories' | 'tags';

export const getArticleFiltersFromUrl = (url: URL): ArticleFilters => ({
	search: url.searchParams.get('search') || '',
	categories: url.searchParams.getAll('categories') || [],
	tags: url.searchParams.getAll('tags') || [],
	lang: (url.searchParams.get('lang') as 'en' | 'id') || 'en'
});

export const buildArticleSearchParams = (filters: ArticleFilters) => {
	const searchParams = new URLSearchParams();

	if (filters.search) {
		searchParams.set('search', filters.search);
	}

	if (filters.lang) {
		searchParams.set('lang', filters.lang);
	}

	filters.categories.forEach((category) => {
		searchParams.append('categories', category);
	});

	filters.tags.forEach((tag) => {
		searchParams.append('tags', tag);
	});

	return searchParams;
};

export const updateArticleFilters = (
	filters: ArticleFilters,
	type: ArticleFilterType,
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

export const setArticleLanguage = (filters: ArticleFilters, lang: 'en' | 'id') => {
	filters.lang = lang;
};

export const createArticleFiltersList = (categories: string[], tags: string[]) => [
	{
		title: 'Filter by categories',
		type: 'categories' as const,
		options: categories
	},
	{
		title: 'Filter by tags:',
		type: 'tags' as const,
		options: tags
	}
];
