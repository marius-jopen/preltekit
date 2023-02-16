<script>
	import Seo from "$lib/functionality/seo.svelte"
  import Text from "$lib/atoms/text.svelte"
	import Slices from "$lib/slices/slices.svelte"

	export let data

	const { document, setup } = data

	$: data
</script>

{#key data}
	<Seo {setup} {document} />
	<Slices slices={document.data.body} />
{/key}