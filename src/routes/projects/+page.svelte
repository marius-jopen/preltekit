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
	
	{#if data}
		<Text classes="text-center pt-16 pb-8" plain field={data.document.data.title} />
		<Text classes="px-4 text-center pb-12" field={data.document.data.description} />
		<Index type="projects" {data} />
	{/if}
{/key}