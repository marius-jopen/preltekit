<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
	import Hero from "$lib/custom-component/hero.svelte"
	import FeatureGrid from "$lib/custom-component/feature-grid.svelte"
	import Newsletter from "$lib/custom-component/newsletter.svelte"
	import Cta from "$lib/custom-component/cta.svelte"
	import Faq from "$lib/custom-component/faq.svelte"

	export let data

	const { document, setup } = data

	$: data
</script>

{#key data}
	<Seo {setup} {document} />
	<Hero />
	<FeatureGrid />
	<Faq />
	<Cta />
	<Newsletter />
{/key}