<script>
	import "../app.postcss"
	import { namespace } from '$lib/functionality/setup'
	import Footer from "$lib/modules/footer/footer.svelte"
  	import HeaderDesktopDropdown from "$lib/modules/header/header-desktop-dropdown.svelte";
	import HeaderMobileDropdown from "$lib/modules/header/header-mobile-dropdown.svelte";

	export let data

	const { setup } = data
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<HeaderDesktopDropdown {setup} />
<HeaderMobileDropdown {setup} />

<div class="min-h-screen">
	<slot />
</div>

<Footer {setup} />