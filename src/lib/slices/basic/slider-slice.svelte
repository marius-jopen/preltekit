<script>
	import Slider from '$lib/modules/slider/slider.svelte';

	export let slice;

	let slider = '';

	if (slice) {
		slider = slice.items;
	}
</script>

<div class="border-b border-text/20">
	<div class="mx-auto max-w-4xl px-4 sm:px-8 py-4 sm:py-12">
		<Slider sliderRatio={0.5} input={slider} />
	</div>
</div>
