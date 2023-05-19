<script>
	import IntersectionObserver from "svelte-intersection-observer"
	import { fade } from 'svelte/transition'

	export let src
	export let transitionTime = 300
	export let classContainer = ""
	export let classImage = ""

	let element
  let intersecting = false
	let width
	let imgx

	// Generates the image url with the width of the container
	$: imgx = src.url + "&w=" + width
</script>

<!-- Container of the image, css can be changed -->
<div class="{classContainer}">

	<!-- Container which is relative, that the position absolute is working -->
	<div class="relative">
		<!-- Intersection observer to check if the container is in the viewport, also measures the width of the container -->
		<IntersectionObserver once {element} bind:intersecting>
			<div bind:offsetWidth={width} bind:this={element} class="w-full" />
		</IntersectionObserver>
	
		<!-- Blurry image -->
		<img 
		alt="{src.alt}" 
		src="{src.url}?fm=blurhash&w-10" 
		class="{classImage}"
		style="
			transition: opacity 0s;
			transition-delay: {transitionTime * 2}ms;
			width: 100%;
			opacity: {width ? '0' : '1'};
		" 
		>
	
		<!-- Final image, is visible when the size of the container is known and when the contaienr is in view -->
		{#if width && intersecting}
			<img
			transition:fade={{duration: transitionTime}}
			alt="{src.alt}"
			src="{imgx}"
			srcset="
				{imgx}&dpr=1 1x,
				{imgx}&dpr=2 2x,
				{imgx}&dpr=3 3x
			"
			class="{classImage}"
			style="
				top: 0px;
				left: 0px;
				width: 100%;
				position: absolute;
				z-index: 1;
			"
			>
		{/if}
	</div>
</div>