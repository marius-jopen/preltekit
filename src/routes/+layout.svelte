<script>
	import '../app.postcss';
	import { namespace } from "../../prismic-configuration"
	import Footer from '$lib/modules/footer/footer.svelte';
	import HeaderDesktopDropdown from '$lib/modules/header/header-desktop-dropdown.svelte';
	import HeaderMobileDropdown from '$lib/modules/header/header-mobile-dropdown.svelte';
</script>

<svelte:head>
	<script
		async
		defer
		src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"
	></script>
</svelte:head>

<HeaderDesktopDropdown />
<HeaderMobileDropdown />

<div class="min-h-screen">
	<slot />
</div>

<Footer />