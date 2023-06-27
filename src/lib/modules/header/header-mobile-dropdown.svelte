<script>
  import { page } from "$app/stores"
	import Hamburger from 'svelte-hamburgers';
	import { fade } from 'svelte/transition';
	import Text from '$lib/atoms/text.svelte';
	import NavigationDropdownAccordeon from '$lib/modules/navigation/navigation-dropdown-accordeon.svelte';
	import { headerHeight, navigationStatus } from '$lib/preltekit/stores';

	export let open = false; // starts closed

	let height = 70;

	$: headerHeight.set(height);
	$: open, navigationStatus.set(open); // when the burger is clicked, the store is set to the status of the burger
	$: open = $navigationStatus; // sets the open to the value from the store, so the burger can close as well

	// If the close button is clicked, the store is set to false
	function close() {
		navigationStatus.set(false);
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/collapse.css"
	/>
</svelte:head>

<div
	bind:clientHeight={height}
	class="bg-background h-16 border-b border-text/20 sm:hidden flex top-0 fixed w-screen z-[60] px-2 transition-colors justify-between cursor-pointer pt-2 text-black"
>
	<a on:click={close} class="pt-2.5 pl-2" href="/">
		<Text plain field={$page.data.setup.data.title} />
	</a>

	<div class="pt-0.5">
		<Hamburger
			bind:open
			type="collapse"
			--color="black"
			--padding="10px"
			--hover-opacity="1"
			--layer-height="2px"
			--layer-width="25px"
			--layer-spacing="6px"
		/>
	</div>
</div>

{#if $navigationStatus == true}
	<div class="block sm:hidden top-12 h-screen fixed w-screen z-50 bg-background" transition:fade>
		<div class="h-full px-8 text-center flex justify-center flex-col -mt-8 leading-8">
			<NavigationDropdownAccordeon document={$page.data.setup.data.navigation_header} />
		</div>
	</div>
{/if}

<div class="block sm:hidden bg-background w-full" style="height: {height}px;">&nbsp;</div>
