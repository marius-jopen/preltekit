<script>
	import Text from "$lib/atoms/text.svelte"
	import Link from "$lib/atoms/link.svelte"

	export let slice
	export let title
	export let text
	export let linkMainTitle
	export let linkMain
	export let linkSecondTitle
	export let linkSecond

	if(slice) {
		title = slice.primary.title_cta_simple_centered
		text = slice.primary.text_cta_simple_centered
		linkMainTitle = slice.primary.link_main_title_cta_simple_centered
		linkMain = slice.primary.link_main_cta_simple_centered
		linkSecondTitle = slice.primary.link_second_title_cta_simple_centered
		linkSecond = slice.primary.link_second_cta_simple_centered
	}
</script>

<div class="border-t border-text">
	<div class="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
			<Text plain field={title} classes="text-4xl font-bold tracking-tight" />
			<Text plain field={text} classes="mx-auto mt-6 max-w-xl text-lg leading-8" />

			<div class="mt-10 flex items-center justify-center gap-x-6">
				{#if linkMain.url}
					<Link document={linkMain} classes="border border-text px-3.5 py-1.5 text-base font-semibold leading-7 hover:bg-text hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						<Text plain field={linkMainTitle} />
					</Link>
				{/if}

				{#if linkSecond.url}
					<Link document={linkSecond} classes="text-text-light hover:text-text-medium">
						<Text plain field={linkSecondTitle} append="→" />
					</Link>
				{/if}
      </div>
    </div>
  </div>
</div>