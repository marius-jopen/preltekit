<script>
  import { page } from "$app/stores"
	import Categories from '$lib/modules/index/categories.svelte';
	import ItemsProject from '$lib/modules/index/index-items.svelte';

	export let data;
	export let type;

	// START CATEGORIES FILTER -> REACTIVE
	let { category, categories, filtered } = data;

	$: {
		if (data) {
			category = data.category;
			filtered = data.filtered;
		}
	}
	// END CATEGORIES FILTER -> REACTIVE
</script>

<Categories setup={$page.data.setup} {type} {category} {categories} />
<ItemsProject items={filtered} />
