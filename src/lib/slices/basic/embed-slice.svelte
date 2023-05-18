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


<div class="border-t border-text/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
		<div class="mx-auto max-w-3xl">
			<Embed {embedCode} classes="mb-2" />
			<Text field={caption} />
		</div>
	</div>
</div>