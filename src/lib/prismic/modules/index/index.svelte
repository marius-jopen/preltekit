<script>
  import Categories from "$lib/prismic/modules/index/categories.svelte"
  import ItemsProject from '$lib/prismic/modules/index/index-items.svelte'

	export let data
	export let type

	// START CATEGORIES FILTER -> REACTIVE
	let { category,
    categories,
    setup,
    document,
    filtered
  } = data

  $: {
    if (data) {
      category = data.category
      setup = data.setup
      document = data.document
      filtered = data.filtered
    }
  }
	// END CATEGORIES FILTER -> REACTIVE
</script>

<Categories {type} {category} {categories} />
<ItemsProject items={filtered} />