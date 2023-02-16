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
	<Text classes="h4 text-center pt-16 pb-8" plain field={document.data.title} />
	<Text classes="px-4 text-center pb-12 sm:w-1/2 mx-auto" field={document.data.description} />
	<Slices slices={document.data.body} />
{/key}