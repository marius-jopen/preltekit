<script>
	import Text from "$lib/atoms/text.svelte"

	export let text
	export let centered = ''
	export let slice

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
	}
</script>

<div class="border-t border-text">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
		<div class="mx-auto max-w-3xl">
			<Text field={text} classes="{centered ? 'text-center' : ''} prose prose-indigo" />
		</div>
	</div>
</div>