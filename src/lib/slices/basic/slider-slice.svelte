<script>
  import Slider from "$lib/modules/slider/slider.svelte"

	export let slice

	let slider = ''

	if(slice) {
		slider = slice.items
	}
</script>

<div class="border-t border-text">
	<div class="px-4 mx-auto pt-8 pb-8 sm:w-1/2">
		<Slider sliderRatio={0.5} input={slider} />
	</div>
</div>