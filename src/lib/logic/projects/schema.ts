import type { Project } from '$contents/projects';
import { origin } from '$lib/url';

export const getProjectsSchema = (projects: Project[]) => ({
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	name: 'Projects | superti4r',
	url: origin('/projects'),
	description:
		'A collection of personal and collaborative projects by superti4r — web apps, experiments, tools, and ideas in progress.',
	author: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	hasPart: projects.map((project) => ({
		'@type': 'CreativeWork',
		name: project.name
	}))
});
