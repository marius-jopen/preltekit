<script>
	import Text from "$lib/atoms/text.svelte"
	import Video from "$lib/modules/video/index.svelte"

	export let text = ''
	export let poster = ''
	export let src240p = ''
	export let src360p = ''
	export let src540p = ''
	export let src720p = ''
	export let src1080p = ''
	export let srcVideo = ''
	export let slice

	let width

	if(slice) {
		src240p = slice.primary.video_240_video
		src360p = slice.primary.video_360_video
		src540p = slice.primary.video_540_video
		src720p = slice.primary.video_720_video
		src1080p = slice.primary.video_1080_video
		srcVideo = slice.primary.video_video
		poster = slice.primary.video_poster_video.url+"?&w=" + width + "fm=webp&lossless=true"
		text = slice.primary.video_caption_video
	}
</script>

<div bind:offsetWidth={width} class="border-t border-text">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
		<div class="mx-auto max-w-3xl">
			<Video {src240p} {src360p} {src540p} {src720p} {src1080p} {srcVideo} {poster} classes="mb-2" control muted loop autoplay />
			<Text field={text} />
		</div>
	</div>
</div>