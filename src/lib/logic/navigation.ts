export const notebookLinks = [
	{
		href: '/articles',
		icon: 'solar:notes-linear',
		bg: 'bg-[#B7B1F2]',
		title: 'Article',
		desc: 'Stuff I’ve written about tech, life, and whatever else I felt like putting into words.'
	},
	{
		href: '/snippets',
		icon: 'solar:paperclip-rounded-linear',
		bg: 'bg-[#FDB7EA]',
		title: 'Snippets',
		desc: 'Small pieces of code I’ve reused, reshaped, or just wanted to remember.'
	},
	{
		href: '/guest-book',
		icon: 'solar:paw-linear',
		bg: 'bg-[#FFDCCC]',
		title: 'Guest Book',
		desc: 'Say hi, leave a trace, or just let me know you were here.'
	}
];

export const personalLinks = [
	{ href: '/about', emoji: '👋', label: 'About' },
	{ href: '/goals', emoji: '🎯', label: 'Goals' }
];

export const extraLinks = [
	{ href: '/attributions', icon: 'solar:accessibility-linear', label: 'Attribution' },
	{
		href: 'https://www.linkedin.com/in/supertiar',
		icon: 'iconoir:linkedin',
		label: 'LinkedIn',
		attr: {
			target: '_blank',
			rel: 'noopener noreferrer'
		}
	}
];

export const themes = [
	{ value: 'default', label: 'Default', colour: '#f8f6e3' },
	{ value: 'white', label: 'White', colour: '#fff' },
	{ value: 'zinc', label: 'Zinc', colour: '#18181b' },
	{ value: 'black', label: 'Black', colour: '#000' }
];
