<script>
	import Seo from '$lib/functionality/seo.svelte';
	import Text from '$lib/atoms/text.svelte';
	import Image from '$lib/atoms/image.svelte';

	export let data;

	const { setup, document } = data;

	$: data;
</script>

{#key data}
	<Seo {setup} {document} />

	{#if data}
		<Text classes="text-center pt-16 pb-16" plain field={data.document.data.title} />
		<Image
			src={data.document.data.thumbnail}
			classContainer="pb-8"
			classImage="h-[50vw] sm:h-[25vw] object-cover"
		/>
		<Text classes="px-4 pb-12 sm:w-2/3 mx-auto" plain field={data.document.data.description} />
	{/if}
{/key}
