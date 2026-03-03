import { origin } from '$lib/url';

export const getAboutSchema = () => ({
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Bachtiar Dwi Pramudi (superti4r)',
	url: origin('/about'),
	image: origin('/images/icon.png'),
	sameAs: [
		'https://github.com/superti4r',
		'https://twitter.com/supereverydays',
		'https://instagram.com/superti4r',
		'https://linkedin.com/in/supertiar'
	],
	jobTitle: 'Fullstack Web Developer',
	description:
		'As a Software Engineer with expertise in web development, I am creating innovative and user-friendly solutions that real-world problems. I am currently pursuing my S.Tr.Kom degree in Informatic Engineering at the Jember State Polytechnic, where i honed my skills in Web Development.',
	knowsAbout: [
		'Web Development',
		'Fullstack Development',
		'PHP',
		'Laravel',
		'JavaScript',
		'TypeScript',
		'Vue.js',
		'Svelte',
		'React.js',
		'Tailwind CSS',
		'CSS'
	],
	alumniOf: {
		'@type': 'EducationalOrganization',
		name: 'Jember State Polytechnic'
	}
});
