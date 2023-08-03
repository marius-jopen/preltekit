<script>
	import { dev } from '$app/environment';
	import Comment from '$lib/preltekit/comment.svelte';
	import Text from '$lib/slices/basic/text-slice.svelte';
	import Video from '$lib/slices/basic/video-slice.svelte';
	import Image from '$lib/slices/basic/image-slice.svelte';
	import Embed from '$lib/slices/basic/embed-slice.svelte';
	import Slider from '$lib/slices/basic/slider-slice.svelte';
	import Index from '$lib/slices/basic/index-slice.svelte';

	export let slice;

	const mappings = {
		text: Text,
		image: Image,
		video: Video,
		slider: Slider,
		embed: Embed,
		index: Index
	};

	const missingSlice = (key) => !Object.keys(mappings).includes(key);
</script>

<div class="slice">
	<Comment comment={slice.slice_type} />

	{#if slice.slice_label == null}
		<svelte:component this={mappings[slice.slice_type]} {slice} />
	{:else}
		<svelte:component this={mappings[slice.slice_type + slice.slice_label]} {slice} />
	{/if}

	{#if dev && missingSlice(slice.slice_type)}
		<pre>Missing module for {slice.slice_type}</pre>
	{/if}
</div>
