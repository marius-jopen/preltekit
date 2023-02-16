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

	if(slice) {
		src240p = slice.primary.video_240_video
		src360p = slice.primary.video_360_video
		src540p = slice.primary.video_540_video
		src720p = slice.primary.video_720_video
		src1080p = slice.primary.video_1080_video
		srcVideo = slice.primary.video_video
		poster = slice.primary.video_poster_video.url+"?&w=800&fm=webp&lossless=true"
		text = slice.primary.video_caption_video
	}
</script>

<div class="border-t border-text">
	<div class="px-4 pt-8 pb-8 sm:w-1/2 mx-auto">
		<Video {src240p} {src360p} {src540p} {src720p} {src1080p} {srcVideo} {poster} classes="mb-2" muted loop autoplay />
		<Text field={text} />
	</div>
</div>