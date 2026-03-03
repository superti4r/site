import toast from 'svelte-french-toast';
import { superForm, type SuperValidated } from 'sveltekit-superforms';
import { createAuthClient } from 'better-auth/svelte';
import { origin } from '$lib/url';

type GuestBookMessage = {
	user: { name: string; image?: string | null };
	guestbook: { message: string; createdAt: Date | string };
};

type FormInput = Record<string, unknown> | SuperValidated<Record<string, unknown>, any>;

export const createGuestBookForm = (dataForm: FormInput) =>
	superForm(dataForm, {
		onResult(event) {
			if (event.result.type === 'success') {
				toast.success('Message sent successfully! Thank you for your note.');
				return;
			}

			if (event.result.type === 'error') {
				toast.error(event.result.error);
			}
		}
	});

export const createGuestBookAuthClient = () => createAuthClient();

export const getGuestBookSchema = (messages: GuestBookMessage[]) => ({
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	name: 'Guest Book | superti4r',
	description: 'A small, welcoming space to leave a message, say hello, or simply pass through.',
	url: origin('/guest-book'),
	author: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	comment: messages.slice(0, 2).map((message) => ({
		'@type': 'Comment',
		author: {
			'@type': 'Person',
			name: message.user.name
		},
		datePublished: message.guestbook.createdAt,
		text: message.guestbook.message
	}))
});
