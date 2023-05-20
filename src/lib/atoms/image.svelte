<script>
	import IntersectionObserver from "svelte-intersection-observer"

	export let src
	export let classContainer = ""
	export let classImage = ""
	export let transitionTime = 0.5

	let element
  let intersecting = false
	let width
	let imgx
	let loaded
	let alt = "image"

	if(src.alt) alt = src.alt

	$: imgx = src.url + "fm=avif&w=" + width + "&auto=format,compress"
</script>

<div class="{classContainer}">
	<IntersectionObserver once {element} bind:intersecting>
		<div bind:offsetWidth={width} bind:this={element} class="w-full" />
	</IntersectionObserver>

	<div class="relative w-full overflow-hidden">
		<img 
		alt="{alt}-placeholder" 
		src="{src.url}?fm=avif&w=10&blur=10&auto=format,compress" 
		class="{classImage}"
		style="
			width: 100%;
		" 
		>
	
		{#if intersecting}
			<img
			on:load={e => loaded = true}
			alt="{alt}"
			src="{imgx}"
			srcset="
				{imgx}&dpr=1 1x,
				{imgx}&dpr=2 2x,
				{imgx}&dpr=3 3x
			"
			class="{loaded ? 'active' : ''} {classImage}"
			style="
				top: 0px;
				left: 0px;
				width: 100%;
				position: absolute;
				z-index: 1;
				opacity: 0;
				transition: opacity {transitionTime}s;
				width: 100%;
			"
			>
		{/if}
	</div>
</div>

<style lang="postcss">
  img.active {
    opacity: 1 !important;
  }
</style>