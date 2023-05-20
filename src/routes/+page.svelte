<script>
	import Seo from "$lib/functionality/seo.svelte"
	import Text from "$lib/atoms/text.svelte"
	import Slices from "$lib/slices/slices.svelte"
	import { Alert } from 'flowbite-svelte';

	export let data

	const { document, setup } = data

	$: data
</script>

{#key data}
	<Seo {setup} {document} />
	
	{#if data}
		<Alert>
			<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
		</Alert>

		<Text classes="h4 text-center pt-16 pb-16" plain field={data.document.data.title} />
		<Slices slices={data.document.data.body} />
	{/if}
{/key}
