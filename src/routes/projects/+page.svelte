<script>
	import Seo from '$lib/preltekit/seo.svelte';
	import Text from '$lib/atoms/text.svelte';
	import Index from '$lib/modules/index/index.svelte';

	export let data;

	const { document } = data;

	$: data;
</script>

<Seo {document} />

{#key data}
	{#if data.document}
		<Text classes="text-center pt-16 pb-8" plain field={data.document.data.title} />
		<Text classes="px-4 text-center pb-12" field={data.document.data.description} />
		<Index type="projects" {data} />
	{/if}
{/key}
