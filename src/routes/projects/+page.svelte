<script>
	import Seo from "$lib/functionality/seo.svelte"
	import Text from "$lib/atoms/text.svelte"
	import Index from "$lib/modules/index/index.svelte"

	export let data

	const { setup, document } = data

	$: data
</script>

{#key data}
	<Seo {setup} {document} />
	<Text classes="h4 text-center pt-16 pb-8" plain field={document.data.title} />
	<Text classes="px-4 text-center pb-12" field={document.data.description} />
	<Index type="projects" {data} />
{/key}