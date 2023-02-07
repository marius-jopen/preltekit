<script>
  import Slider from "$lib/prismic/modules/slider/gallery-slider.svelte"

	export let slice

	let slider = ''

	if(slice) {
		slider = slice.items
	}
</script>

<div class="pt-4 pb-8 px-4">
	<Slider input={slider} />
</div>