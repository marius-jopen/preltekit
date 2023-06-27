import { error } from '@sveltejs/kit';

export async function load({ parent, params }) {
  const data = await parent()
	const { uid } = params;

  // Get the right document from your docs
  const document = data?.projects?.find(({ uid: projectUid }) => uid === projectUid)

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}
