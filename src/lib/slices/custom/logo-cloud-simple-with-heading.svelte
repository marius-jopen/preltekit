<script>
	import Image from "$lib/atoms/image.svelte"
	import Text from "$lib/atoms/text.svelte"

	export let slice
	export let items
	export let title

	if(slice) {
		title = slice.primary.title_logo_cloud_simple_with_heading
		items = slice.items
	}
</script>

<div class="border-t border-text">
	<div class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<Text plain field={title} classes="text-center text-lg font-semibold leading-8" />

			<div class="flex gap-x-4 mt-10 flex-wrap justify-center gap-y-4">
				{#each items as item}
					<Image src={item.logo_logo_cloud_simple_with_heading} classesOuter="" classes="object-contain h-24" />
				{/each}
			</div>
		</div>
	</div>
</div>