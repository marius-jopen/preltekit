<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"

  export let data

  const { setup, document } = data

	$: data
</script>

{#key data}
	<Seo {setup} {document} />
	<Text classes="h4 text-center pt-16 pb-8" plain field={document.data.title} />
	<Image src={document.data.thumbnail} classesOuter="w-1/4 mx-auto" />
{/key}