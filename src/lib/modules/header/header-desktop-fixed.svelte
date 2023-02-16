<script>
	import Navigation from "$lib/modules/navigation/navigation.svelte"
	import Text from "$lib/atoms/text.svelte"
	import { headerHeight } from '$lib/functionality/stores'

	export let setup

	let height = 0

	$: headerHeight.set(height)
</script>


<header bind:clientHeight={height} class="hidden sm:block fixed top-0 left-0 z-50 w-full">
	<div class="flex justify-between px-4 py-2 bg-background border-b border-text">
		<a href="/">
			<Text plain field={setup.data.title} />
		</a>

		<div class="flex gap-3">
			<Navigation document={setup.data.navigation_header} />
		</div>
	</div>
</header>

<div class="hidden sm:block" style="height: {height - 1}px" />