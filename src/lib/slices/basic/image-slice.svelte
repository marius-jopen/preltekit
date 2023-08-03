<script>
	import Text from '$lib/atoms/text.svelte';
	import { PrismicImage } from "@prismicio/svelte"

	export let text = '';
	export let src = '';
	export let slice;

	if (slice) {
		src = slice.primary.image_image;
		text = slice.primary.image_caption_image;
	}
</script>

<div class="border-b border-text/5 py-4 sm:py-12">
	<div class="mx-auto max-w-4xl sm:px-8 px-4 ">
		<PrismicImage field={src} class="pb-2"/>
		<Text field={text} />
	</div>
</div>
