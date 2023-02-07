<script>
  import { dev } from "$app/environment"
	import Comment from "$lib/tools/comment.svelte"

	import Text from "$lib/prismic/slices/text-slice/text-slice.svelte"
	import Video from "$lib/prismic/slices/video-slice/video-slice.svelte"
	import Image from "$lib/prismic/slices/image-slice/image-slice.svelte"
	import Embed from "$lib/prismic/slices/embed-slice/embed-slice.svelte"

	export let slice

	const mappings = {
		text: Text,
		image: Image,
		video: Video,
		embed: Embed
	}

  const missingSlice = (key) => !Object.keys(mappings).includes(key)
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