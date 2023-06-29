<script>
	import Categories from '$lib/modules/index/categories.svelte';
	import ItemsProject from '$lib/modules/index/index-items.svelte';

	export let data;
	export let type = "projects"

	// START CATEGORIES FILTER -> REACTIVE
	let { category, categories, filtered } = data;

	$: {
		if (data) {
			category = data.category;
			filtered = data.filtered;
		}
	}

  console.log("cats ", category, categories, filtered)
	// END CATEGORIES FILTER -> REACTIVE
</script>

<Categories {type} {category} {categories} />
<ItemsProject items={filtered} />
