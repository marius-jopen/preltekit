<script>
	import Seo from '$lib/preltekit/seo.svelte';
	import Text from '$lib/atoms/text.svelte';
	import Index from '$lib/modules/index/index.svelte';

	export let data;

	const { projectsIndex: document } = data;

	$: data;
</script>

<Seo {document} />

{#key data}
{#if data.projectsIndex}
		<Text classes="text-center pt-16 pb-8" plain field={data.projectsIndex.data.title} />
		<Text classes="px-4 text-center pb-12" field={data.projectsIndex.data.description} />
		<Index type="projects" data={data} />
	{/if}
{/key}
