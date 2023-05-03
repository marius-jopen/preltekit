<script>
	import "../app.postcss"
	import { namespace } from '$lib/functionality/setup'
	import HeaderDesktopFixed from "$lib/modules/header/header-desktop-fixed.svelte"
	import HeaderMobile from "$lib/modules/header/header-mobile.svelte"
	import Footer from "$lib/modules/footer/footer.svelte"

	export let data

	const { setup } = data
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<HeaderDesktopFixed {setup} />
<HeaderMobile {setup} />

<div class="min-h-screen">
	<slot />
</div>

<Footer {setup} />
