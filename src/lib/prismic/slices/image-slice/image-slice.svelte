<script>
	import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"

	export let text = ''
	export let src = ''
	export let slice

	if(slice) {
		src = slice.primary.image_image
		text = slice.primary.image_caption_image
	}
</script>

<div class="pt-4 pb-8">
	<Image {src} />
	<Text field={text} />
</div>