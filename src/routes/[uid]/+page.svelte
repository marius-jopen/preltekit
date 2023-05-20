<script>
	import Seo from "$lib/functionality/seo.svelte"
	import Text from "$lib/atoms/text.svelte"
	import Slices from "$lib/slices/slices.svelte"

	export let data

	const { document, setup } = data

	$: data
</script>

{#key data}
	<Seo {document} {setup} />

	{#if data}
		<Slices slices={document.data.body} />
	{/if}
{/key}