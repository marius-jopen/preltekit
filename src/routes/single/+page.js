import { error } from '@sveltejs/kit';
import createClient from '$lib/preltekit/client';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	try {
		const document = await client.getSingle('single');

		return { document };
	} catch (e) {
		throw error(404, e.message);
	}
}
