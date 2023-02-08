<script>
	import Text from "$lib/prismic/atoms/text.svelte"

	export let text
	export let centered = ''
	export let slice

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
	}
</script>

<div class="border-t border-text">
	<div class="px-4 pt-6 pb-8 sm:w-1/2 mx-auto">
		<Text field={text} classes="{centered ? 'text-center' : ''}" />
	</div>
</div>