import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const data = await parent()
	const { uid } = params;

	try {
		const document = data?.pages?.find(({ uid: projectUid }) => uid === projectUid)

		return { document, uid };
	} catch (e) {
		throw error(404, e.message);
	}
}