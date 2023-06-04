<script>
	import ItemProject from '$lib/modules/index/index-item.svelte';

	export let items;
</script>

<div class="w-full px-10 sm:flex flex-wrap justify-center">
	{#each items as item (item.item.uid)}
		<ItemProject item={item.item} />
	{/each}
</div>
