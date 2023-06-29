import { error } from '@sveltejs/kit';

export async function load({ parent }) {
	const data = await parent()

	try {
		const document = data?.home

		return { document};
	} catch (e) {
		throw error(404, e.message);
	}
}