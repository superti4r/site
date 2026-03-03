export type SnippetFilters = {
	search: string;
};

export const getSnippetFiltersFromUrl = (url: URL): SnippetFilters => ({
	search: url.searchParams.get('search') || ''
});

export const buildSnippetSearchParams = (filters: SnippetFilters) => {
	const searchParams = new URLSearchParams();

	if (filters.search) {
		searchParams.set('search', filters.search);
	}

	return searchParams;
};

export const updateSnippetFilters = (filters: SnippetFilters, value: string) => {
	filters.search = value;
};
