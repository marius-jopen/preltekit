<script>
	import Text from "$lib/atoms/text.svelte"
	import Embed from "$lib/atoms/embed.svelte"

	export let caption = ''
	export let embedCode = ''
	export let slice

	if(slice) {
		caption = slice.primary.caption_embed
		embedCode = slice.primary.embed_code_embed
	}
</script>

<div class="border-t border-text">
	<div class="px-4 pt-8 pb-8 mx-auto sm:w-1/2">
		<Embed {embedCode} classes="mb-2" />
		<Text field={caption} />
	</div>
</div>