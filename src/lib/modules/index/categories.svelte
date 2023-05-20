<script>
	import { kebabCase } from '$lib/functionality/strings'

	export let categories
	export let category
	export let type
	export let itemClasses = 'rounded-xl bg-text/10 px-6 py-0.5 hover:bg-text/20 transition-colors duration-200'
	export let activeClass = 'bg-text/50 hover:bg-text/50'
</script>

<div>
	<div class="px-4 text-center flex gap-2 flex-col sm:flex-row pb-8 justify-center">
		<a
			data-sveltekit-noscroll
			href="/{type}"
			data-sveltekit-prefetch
			class="{itemClasses} {!category ? activeClass : ''}"
		>
			All
	</a>

		{#each categories as c}
			<a
				data-sveltekit-noscroll
				data-sveltekit-prefetch
				class="{itemClasses} {kebabCase(c.toLowerCase()) === category ? activeClass : ''}"
				href="?category={kebabCase(c.toLowerCase())}"
			>
				{c}
			</a>
		{/each}
	</div>
</div>