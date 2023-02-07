<script>
	import ItemProject from "$lib/prismic/modules/index/index-item.svelte"

	export let items
</script>

<div class="sm:flex flex-wrap">
	{#each items as item (item.item.uid)}
		<ItemProject item={item.item} />
	{/each}
</div>