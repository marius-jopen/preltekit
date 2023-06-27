import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
  const data = await parent()
	const { uid } = params;

	try {
    // Get the right document from your docs
    const document = data?.pages?.find(({ uid: projectUid }) => uid === projectUid)

		return { document, uid };
	} catch (e) {
		// Show user the page not found error
		throw error(404, e.message);
	}
}
