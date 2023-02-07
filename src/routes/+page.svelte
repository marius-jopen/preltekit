<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let data

	const { document, setup } = data

	$: data
</script>

{#key data}
	<Seo {setup} {document} />
	<Text plain classes="h4 text-center pt-16 pb-8" field={document.data.title} />
{/key}