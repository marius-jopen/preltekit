import { makeCases } from '$lib/preltekit/strings';
import createClient from '$lib/preltekit/client';

export async function load({ url, fetch, request }) {
	const api = await createClient({ fetch, request });
	const category = url.searchParams.get('category') || false;
	const cases = category ? makeCases(category) : false;

	// Page specific data
	const document = await api.getSingle('projects', {
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

	// Set the array of items to show
	let filtered = document.data.items;

	// Extract categories from tags
	const categories = [...new Set(document.data.items.map(({ item }) => item.tags).flat())].sort();

	// Filter items
	if (category) {
		filtered = [
			...document.data.items.filter(({ item }) => item.tags.some((t) => cases.includes(t)))
		];
	}

	if (document) {
		return {
			document,
			filtered,
			category,
			categories
		};
	}
}
