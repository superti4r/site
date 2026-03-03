import { getArticles } from '$contents/articles/utils';
import { getProjects } from '$contents/projects';
import { getSnippets } from '$contents/snippets';
import { origin } from '$lib/url';

export const HOME_DESCRIPTION =
	'As a Software Engineer with expertise in web development, I am creating innovative and user-friendly solutions that real-world problems. I am currently pursuing my S.Tr.Kom degree in Informatic Engineering at the Jember State Polytechnic, where i honed my skills in Web Development.';

export const getHomeContent = () => ({
	snippets: getSnippets().slice(0, 4),
	projects: getProjects().slice(0, 4),
	articles: getArticles({ lang: 'en' }).slice(0, 3)
});

export const getHomeSchema = () => ({
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Bachtiar Dwi Pramudi (superti4r',
	url: origin(),
	image: origin('/images/icon.png'),
	sameAs: [
		'https://github.com/superti4r',
		'https://twitter.com/supereverydays',
		'https://instagram.com/superti4r',
		'https://linkedin.com/in/supertiar'
	],
	jobTitle: 'Fullstack Developer',
	description: HOME_DESCRIPTION,
	worksFor: {
		'@type': 'Organization',
		name: 'JTI Innovation Center'
	}
});
