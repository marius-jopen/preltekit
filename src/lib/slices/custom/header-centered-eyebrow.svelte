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

<div class="py-24 px-6 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
		{#if eyebrow}
			<p class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
				<Text plain field={eyebrow} />
			</p>
		{/if}

		{#if title}
			<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				<Text plain field={title} />
			</h2>
		{/if}

		{#if text}
			<p class="mt-6 text-lg leading-8 text-gray-600">
				<Text plain field={text} />
			</p>
		{/if}
  </div>
</div>