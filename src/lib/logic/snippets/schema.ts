import { origin } from '$lib/url';

type SnippetInfo = {
	name: string;
};

export const getSnippetsSchema = (snippets: SnippetInfo[]) => ({
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	name: 'Code Snippets | superti4r',
	description:
		'A collection of handy code snippets, utilities, and tiny helpers — ready to reuse.',
	url: origin('/snippets'),
	author: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	hasPart: snippets.map((snippet) => ({ '@type': 'CreativeWork', name: snippet.name }))
});
