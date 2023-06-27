<script>
	import Seo from '$lib/preltekit/seo.svelte';
	import Slices from '$lib/slices/slices.svelte';

	export let data;

	const { document } = data;

	$: data;
</script>

{#key data}
	<Seo {document} />

	{#if data}
		<Slices slices={document.data.body} />
	{/if}
{/key}
