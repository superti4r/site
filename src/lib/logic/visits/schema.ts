import { origin } from '$lib/url';

export const getVisitsSchema = () => ({
	'@context': 'https://schema.org',
	'@type': 'Dataset',
	name: 'Page Visits | superti4r',
	description:
		'A public record of page views on this website. Each row in the dataset corresponds to a page and its total visit count.',
	creator: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	url: origin('/visits'),
	license: 'https://creativecommons.org/publicdomain/zero/1.0/'
});
