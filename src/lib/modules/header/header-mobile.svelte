<script>
  import { page } from "$app/stores"
	import Hamburger from 'svelte-hamburgers';
	import { fade } from 'svelte/transition';
	import Text from '$lib/atoms/text.svelte';
	import Navigation from '$lib/modules/navigation/navigation.svelte';

	let height = 0;
	let open = false;

	function close() {
		open = false;
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
	class="h-16 border-b border-text sm:hidden flex top-0 fixed w-screen z-50 px-2 bg-background justify-between cursor-pointer pt-2"
>
	<a on:click={close} class="pt-2 pl-2" href="/">
		<Text plain field={$page.data.setup.data.title} />
	</a>

	<div class="pt-0.5">
		<Hamburger
			bind:open
			type="collapse"
			--padding="10px"
			--layer-height="1.5px"
			--layer-width="25px"
			--layer-spacing="6px"
		/>
	</div>
</div>

{#if open == true}
	<div
		class="flex sm:hidden top-12 h-screen fixed w-screen z-50 bg-background flex-col justify-center"
		transition:fade
	>
		<div class="flex flex-col text-center -mt-20 leading-8" on:click={close}>
			<Navigation document={$page.data.setup.data.navigation_header} />
		</div>
	</div>
{/if}

<div class="block sm:hidden bg-background w-full" style="height: {height}px;">&nbsp;</div>
