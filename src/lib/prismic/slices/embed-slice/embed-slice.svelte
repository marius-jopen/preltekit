<script>
	import Text from "$lib/prismic/atoms/text.svelte"
	import Embed from "$lib/prismic/atoms/embed.svelte"

	export let caption = ''
	export let embedCode = ''
	export let slice

	if(slice) {
		caption = slice.primary.caption_embed
		embedCode = slice.primary.embed_code_embed
	}
</script>

<div class="pt-4 pb-8 px-4">
	<Embed {embedCode} />
	<Text field={caption} />
</div>