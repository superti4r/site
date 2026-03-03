import type { attributions } from '$contents/attributions';
import { origin } from '$lib/url';

type AttributionGroup = (typeof attributions)[number];

export const getAttributionsSchema = (items: AttributionGroup[]) => ({
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	name: 'Attributions & Credits | superti4r',
	url: origin('/attributions'),
	description:
		'A list of tools, frameworks, libraries, services, and inspirations that helped bring this website to life.',
	author: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	about: items.flatMap((group) =>
		group.items.map((item) => ({
			'@type': 'CreativeWork',
			name: item.name,
			url: item.href
		}))
	)
});
