<script>
	import Text from "$lib/atoms/text.svelte"
	import Image from "$lib/atoms/image.svelte"

	export let text = ''
	export let src = ''
	export let slice

	if(slice) {
		src = slice.primary.image_image
		text = slice.primary.image_caption_image
	}
</script>

<div class="border-t border-text">
	<div class="px-4 pt-8 pb-8 sm:w-1/2 mx-auto">
		<Image {src} classesOuter="mb-2"/>
		<Text field={text} />
	</div>
</div>