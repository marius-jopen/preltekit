<script>
  import { page } from "$app/stores"
	import NavigationDropdown from '$lib/modules/navigation/navigation-dropdown.svelte';
	import Text from '$lib/atoms/text.svelte';
	import { headerHeight } from '$lib/preltekit/stores';

	let height = 70;

	$: headerHeight.set(height);
</script>

<header bind:clientHeight={height} class="hidden sm:block fixed top-0 left-0 z-50 w-full">
	<div class="flex justify-between px-4 py-2 bg-background border-b border-text/20">
		<a href="/">
			<Text plain field={$page.data.setup.data.title} />
		</a>

		<div class="flex gap-4">
			<NavigationDropdown document={$page.data.setup.data.navigation_header} />
		</div>
	</div>
</header>

<div class="hidden sm:block" style="height: {height - 1}px" />
