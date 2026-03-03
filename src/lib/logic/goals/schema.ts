import type { goals } from '$contents/goals';
import { origin } from '$lib/url';

type GoalItem = (typeof goals)[number];

export const getGoalsSchema = (items: GoalItem[]) => ({
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name: 'Life Goals | superti4r',
	description: 'A categorized list of life goals — from personal development to peaceful living.',
	url: origin('/goals'),
	author: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	itemListElement: items.map((goal, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: goal.goal
	}))
});
