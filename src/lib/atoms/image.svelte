<script>
  export let src
	export let classesImage = ""
	export let classesContainer = "w-full"
	export let styles = ""
	export let transitionTime = 0
	export let scale = 1

	let loaded = false
	let width
	let height = 300

	function imageLoaded() {
		loaded = true
	}
</script>

<div bind:offsetWidth={width} class="{classesContainer} relative" >
	<img src="{src.url}?&w=50&blur=50" alt="{src.alt}" style="{styles}; width: {width}px" class="{classesImage} w-full {loaded ? 'opacity-0' : ''}">

	<div bind:clientHeight={height} style="transition-duration: {transitionTime}ms" class="overflow-hidden w-full absolute z-10 top-0 left-0 transition-opacity opacity-0 {loaded ? 'opacity-100' : ''}">
		<img
		on:load="{imageLoaded}"
		srcset="
			{src.url}?&w={width * scale}&auto=compress,format,enhance&dpr=1 1x,
			{src.url}?&w={width * scale}&auto=compress,format,enhance&dpr=2 2x,
			{src.url}?&w={width * scale}&auto=compress,format,enhance&dpr=3 3x
		"
		src="{src.url}?&w={width * scale}&auto=compress,format,enhance"
		alt="{src.alt}"
		class="{classesImage} w-full"
		>
	</div>
</div>