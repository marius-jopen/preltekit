import { error } from "@sveltejs/kit"
import { makeCases } from '$lib/preltekit/strings';

export async function load({ url, parent }) {
  const data = await parent()
  const document = data.projectsIndex

	const category = url.searchParams.get('category') || false;
	const cases = category ? makeCases(category) : false;
	
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

  return {
    ...data,
    filtered,
    category,
    categories
  };

  throw new error(404, "Document not found")
}
