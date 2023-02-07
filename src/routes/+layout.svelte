<script>
	import "../app.postcss"
	import { namespace } from '$lib/prismic/functionality/setup'
	import { vh, glossaryAll } from '$lib/prismic/functionality/stores'

	import HeaderDesktop from "$lib/prismic/modules/header/header-desktop.svelte"
	import HeaderMobile from "$lib/prismic/modules/header/header-mobile.svelte"
	import Footer from "$lib/prismic/modules/footer/footer.svelte"

	export let data

	const { setup } = data
	const { glossary } = data

	let innerHeight = ''

	$: vh.set(innerHeight)
	$: glossaryAll.set(glossary)
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<svelte:window bind:innerHeight />

<HeaderDesktop {setup} />
<HeaderMobile {setup} />

<div class="wrapper min-h-screen p1">
	<slot />
</div>

<Footer {setup} />