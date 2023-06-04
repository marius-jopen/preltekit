<script>
	import Seo from '$lib/functionality/seo.svelte';
	import Text from '$lib/atoms/text.svelte';
	import Slices from '$lib/slices/slices.svelte';

	export let data;

	const { document, setup } = data;

	$: data;
</script>

{#key data}
	<Seo {setup} {document} />

	{#if data}
		<Text classes="text-center pt-16 pb-16" plain field={data.document.data.title} />
		<Slices slices={data.document.data.body} />
	{/if}
{/key}
