<script>
	import Text from "$lib/atoms/text.svelte"

	export let eyebrow
	export let title
	export let text
	export let slice

	if(slice) {
		eyebrow = slice.primary.eyebrow_header_centered_eyebrow
		title = slice.primary.title_header_centered_eyebrow
		text = slice.primary.text_header_centered_eyebrow
	}
</script>

<div class="border-t border-text">
	<div class="py-24 px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<Text plain field={eyebrow} classes="text-lg font-semibold leading-8 tracking-tight" />
			<Text plain field={title} classes="mt-2 text-4xl font-bold tracking-tight sm:text-6xl" />
			<Text plain field={text} classes="mt-6 text-lg leading-8" />
		</div>
	</div>
</div>