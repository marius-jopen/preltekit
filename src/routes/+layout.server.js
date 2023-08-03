import createClient from '$lib/preltekit/client';

export async function load({ fetch, request }) {
	const api = await createClient({ fetch, request });

	// By default we load all the document types we need for the site to function
	const setup = await api.getSingle('setup');
	const projectsIndex = await api.getSingle('projects', {
		graphQuery: `{
			projects {
				...projectsFields
				items {
					item {
						...on project {
							...projectFields
						}
					}
				}
			}
		}`
	});

	const projects = await api.getAllByType("project")
	const pages = await api.getAllByType("page")
	const home = pages.find(page => page.uid === 'home')

	if (setup && projectsIndex && projects && pages && home) {
		return {
			setup,
      		projectsIndex,
			projects,
			pages,
			home
		};
	}
}