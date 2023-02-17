<script>
  export let src
	export let classes = ""
	export let classesOuter = "w-full"
	export let styles = ""

	let loaded = false
	let width
	let height

	function imageLoaded() {
		loaded = true
	}
</script>

<div bind:offsetWidth={width} class="{classesOuter} relative " >
	<img src="{src.url}?&w=50&blur=50" alt="{src.alt}" style="{styles}; height: {height}px" width={width} class="{classes} w-full">

	<div bind:clientHeight={height} class="overflow-hidden w-full absolute z-10 top-0 left-0 transition-opacity duration-500 opacity-0 {loaded ? 'opacity-100' : ''}">
		<img
		on:load="{imageLoaded}"
		srcset="
			{src.url}?&w={width}&fm=webp&lossless=true&dpr=1 1x,
			{src.url}?&w={width}&fm=webp&lossless=true&dpr=2 2x,
			{src.url}?&w={width}&fm=webp&lossless=true&dpr=3 3x
		"
		src="{src.url}?&w={width}&fm=webp&lossless=true"
		alt="{src.alt}"
		class="{classes} w-full"
		width={width}
		style={styles}
		>
	</div>
</div>