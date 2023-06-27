import createClient from '$lib/preltekit/client';

export async function load({ fetch, request }) {
	const api = await createClient({ fetch, request });

  // By default we load all the document types we need for the site to function
	const setup = await api.getSingle('setup');
  const projects = await api.getAllByType("project")
  const pages = await api.getAllByType("page")
  const home = pages.find(page => page.uid === 'home')


	if (setup && projects && pages && home) {
		return {
			setup,
      projects,
      pages,
      home
		};
	}
}
