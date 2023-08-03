<script>
	import '../app.postcss';
	import { namespace } from "../../prismic-configuration"
	import Footer from '$lib/modules/navigations/footer.svelte';
	import HeaderDesktop from '$lib/modules/navigations/header.svelte';
	import HeaderMobile from '$lib/modules/navigations/header-mobile.svelte';
</script>

<svelte:head>
	<script
		async
		defer
		src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"
	></script>
</svelte:head>

<HeaderDesktop />
<HeaderMobile />

<div class="min-h-screen">
	<slot />
</div>

<Footer />