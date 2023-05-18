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

<div class="border-t border-text/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
		<div class="mx-auto max-w-3xl">
			<Image {src} classesContainer="mb-2"/>
			<Text field={text} />
		</div>
	</div>
</div>