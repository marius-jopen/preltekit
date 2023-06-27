<!-- Internal and external links -->
<!-- Deals with empty ones -->

<script>
	import { linkResolver } from '$lib/preltekit/setup';
	import { page } from '$app/stores';
	import { navigationStatus } from '$lib/preltekit/stores';
	import * as animateScroll from 'svelte-scrollto';

	export let document;
	export let href = ""

	export let classes = '';
	// export let prefetch = ''; // empty string for on
	// export let reload = 'off'; // off for disabled
	export let activeClass = 'underline underline-offset-2 decoration-1';
	export let isNav = false;

	let active = false;

	if (document) {
		href = linkResolver(document);
	}

	$: active = href === $page.url.pathname;

	function closeNavigation() {
		if (isNav) {
			navigationStatus.set(false);
			animateScroll.scrollToTop();
		}
	}
</script>

{#if href}
	<a
		on:click={closeNavigation}
		href={href === '/home' ? '/' : href}
		class="cursor-pointer {classes} {active ? activeClass : ''}"
	>
		<slot />
	</a>
{:else}
	<slot />
{/if}
