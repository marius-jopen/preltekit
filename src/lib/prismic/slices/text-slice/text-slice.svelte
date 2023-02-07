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

<div class="pt-4 pb-8">
	<Text field={text} classes="{centered ? 'text-center' : ''}" />
</div>