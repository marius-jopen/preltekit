<script>
	import { page } from "$app/stores"
	import Seo from '$lib/preltekit/seo.svelte';
	import Text from '$lib/atoms/text.svelte';
	import Slices from '$lib/slices/slices.svelte';

	export let data;

	const { document } = data;

	$: data;
</script>

<Seo {document} />

<Text classes="text-center pt-16 pb-16" plain field={document.data.title} />
<Slices slices={document.data.body} />