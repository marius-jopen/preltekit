<script>
	import NavigationDropdown from "$lib/modules/navigation/navigation-dropdown.svelte"
	import Text from "$lib/atoms/text.svelte"
	import { headerHeight } from '$lib/functionality/stores'

	export let setup

	console.log(setup)

	let height = 70

	$: headerHeight.set(height)
</script>

<header bind:clientHeight={height} class="hidden sm:block fixed top-0 left-0 z-50 w-full">
	<div class="flex justify-between px-4 py-2 bg-background border-b border-text/20">
		<a href="/">
			<Text plain field={setup.data.title} />
		</a>

		<div class="flex gap-4">
			<NavigationDropdown document={setup.data.navigation_header} />
		</div>
	</div>
</header>

<div class="hidden sm:block" style="height: {height - 1}px" />