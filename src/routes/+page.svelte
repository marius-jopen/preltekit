<script>
	import { page } from "$app/stores"
	import Seo from '$lib/preltekit/seo.svelte';
	import Text from '$lib/atoms/text.svelte';
	import Slices from '$lib/slices/slices.svelte';
</script>

<Seo document={$page.data.home} />

<Text classes="text-center pt-16 pb-16" plain field={$page.data.home.data.title} />
<Slices slices={$page.data.home.data.body} />