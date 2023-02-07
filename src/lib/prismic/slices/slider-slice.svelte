<script>
  import Slider from "$lib/prismic/modules/slider/slider.svelte"

	export let slice

	let slider = ''

	if(slice) {
		slider = slice.items
	}
</script>

<div class="pt-4 pb-8">
	<Slider input={slider} />
</div>