<script>
	import Seo from '$lib/preltekit/seo.svelte';
	import Text from '$lib/atoms/text.svelte';
	import { PrismicImage } from "@prismicio/svelte"

	export let data;

	const { document } = data;

	$: data;
</script>

<Seo {document} />

{#key data}
	{#if document}
		<Text classes="text-center pt-16 pb-16" plain field={data.document.data.title} />
		<PrismicImage field={item.data.thumbnail} class="h-[50vw] sm:h-[25vw] object-coverr pb-8"/>
		<Text classes="px-4 pb-12 sm:w-2/3 mx-auto" plain field={data.document.data.description} />
	{/if}
{/key}
