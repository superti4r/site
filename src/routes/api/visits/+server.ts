import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { visits } from '$lib/database/schema';
import { UAParser } from 'ua-parser-js';
import { getDatabase } from '$lib/database/connection';

export const POST: RequestHandler = async ({ request }) => {
	const db = getDatabase();
	const userAgentHeader = request.headers.get('user-agent') || '';
	const ipAddress = request.headers.get('x-forwarded-for') || 'unknown';

	const { pathname } = await request.json<{ pathname: string }>();

	const ua = new UAParser(userAgentHeader);
	const browser = ua.getBrowser();
	const os = ua.getOS();
	const userAgent = ua.getResult();

	await db.insert(visits).values({
		browser: browser.name || 'unknown',
		os: os.name || 'unknown',
		userAgent: JSON.stringify(userAgent),
		route: pathname,
		ipAddress
	});

	return json({ message: 'Thanks for visiting!' });
};