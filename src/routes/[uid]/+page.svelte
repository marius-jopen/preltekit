<script>
	import Seo from '$lib/preltekit/seo.svelte';
	import Slices from '$lib/slices/slices.svelte';

	export let data;

	const { document } = data;

	$: data;
</script>

{#key data}
  {#if document}
    <Seo {document} />
		<Slices slices={document.data.body} />
	{/if}
{/key}
