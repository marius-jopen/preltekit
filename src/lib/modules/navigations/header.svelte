<script>
	import { page } from "$app/stores"
	import Link from '$lib/atoms/link.svelte';
	import Text from '$lib/atoms/text.svelte';
	import { headerHeight } from '$lib/preltekit/stores';

	let height = 66;

	$: headerHeight.set(height);
</script>

<header bind:clientHeight={height} class="hidden sm:block fixed top-0 left-0 z-50 w-full">
	<div class="flex justify-between px-4 py-4 bg-background/30 backdrop-blur-xl border-b border-text/5">
		<a href="/" class="font-black text-2xl">
			<Text plain field={$page.data.setup.data.title} />
		</a>

		<div class="flex flex-col justify-center">
			<div class="flex gap-3">
				{#each $page.data.setup.data.navigation_header as { title, link }}
					<Link classes="font-medium" document={link}>
						<Text inline field={title} />
					</Link>
				{/each}
			</div>
		</div>
	</div>
</header>

<div class="hidden sm:block" style="height: {height - 1}px" />
