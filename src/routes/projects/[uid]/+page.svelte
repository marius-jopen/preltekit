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
	<Text classes="h4 text-center pt-16 pb-16" plain field={document.data.title} />
	<Image src={document.data.thumbnail} classesOuter="pb-8" classes="h-[50vw] sm:h-[25vw] object-cover" />
	<Text classes="px-4 pb-12 sm:w-2/3 mx-auto" plain field={document.data.description} />
{/key}