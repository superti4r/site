import { visits as visitsSchema } from '$lib/database/schema';
import type { PageServerLoad } from './$types';
import { getDatabase } from '$lib/database/connection';
import { count, desc } from 'drizzle-orm';
    
export const load: PageServerLoad = async () => {
	const db = getDatabase();
	const visits = await db
		.select({
			route: visitsSchema.route,
			count: count(visitsSchema.route)
		})
		.from(visitsSchema)
		.groupBy(visitsSchema.route)
		.orderBy(desc(count(visitsSchema.route)));

	return {
		visits
	};
};