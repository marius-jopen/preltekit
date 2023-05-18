<script>
	import Seo from "$lib/functionality/seo.svelte"
  import Text from "$lib/atoms/text.svelte"

	export let data

	const { document, setup } = data

	$: data
</script>

{#key data}
	<Seo {document} {setup} />
	<Text classes="h4 text-center pt-16 pb-16" plain field={data.document.data.title} />
{/key}