<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Slices from "$lib/prismic/functionality/slices.svelte"

	export let data

	const { document, setup } = data

	$: data
</script>

{#key data}
	<Seo {document} {setup} />
	<Text classes="h4 text-center pt-16 pb-8" plain field={document.data.title} />
	<Slices slices={document.data.body} />
{/key}