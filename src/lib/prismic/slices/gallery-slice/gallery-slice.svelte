<script>
  import GallerySlider1 from "$lib/prismic/modules/gallery-slider/gallery-slider-1.svelte"

	export let slice

	let gallerySlider = ''

	if(slice) {
		gallerySlider = slice.items
	}
</script>

<div class="pt-4 pb-8 px-4">
	<GallerySlider1 input={gallerySlider} />
</div>