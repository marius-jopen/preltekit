<script>
  import { dev } from "$app/environment"
	import Comment from "$lib/functionality/comment.svelte"

	// Basic
	import Text from "$lib/slices/basic/text-slice.svelte"
	import Video from "$lib/slices/basic/video-slice.svelte"
	import Image from "$lib/slices/basic/image-slice.svelte"
	import Embed from "$lib/slices/basic/embed-slice.svelte"
	import Slider from "$lib/slices/basic/slider-slice.svelte"

	// Custom
  import HeaderCenteredEyebrow from "$lib/slices/custom/header-centered-eyebrow.svelte"
	import TeamWithImageAndShortParagraph from "$lib/slices/custom/team-with-image-and-short-paragraph.svelte"

	export let slice

	const mappings = {
		// Basic
		text: Text,
		image: Image,
		video: Video,
		slider: Slider,
		embed: Embed,

		// Custom
		header_centered_eyebrow: HeaderCenteredEyebrow,
		team_with_image_and_short_paragraph: TeamWithImageAndShortParagraph

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