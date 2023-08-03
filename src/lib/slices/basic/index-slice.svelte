<script>
    import ItemProject from '$lib/modules/index/index-item.svelte';
</script>

{#each items as item (item.item.uid)}
    <ItemProject item={item.item} />
{/each}