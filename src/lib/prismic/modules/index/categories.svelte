<script>
	import { kebabCase } from '$lib/tools/functions/strings'

	export let categories
  export let category
	export let type
	export let itemClasses = 'border border-text hover:text-background hover:bg-text px-6 py-0.5'
  export let activeClass = 'bg-text text-background'
</script>

<div>
	<div class="px-4 text-center flex gap-2 flex-col sm:flex-row pb-8 justify-center">
		<a
			href="/{type}"
			data-sveltekit-prefetch
			class="{itemClasses} {!category ? activeClass : ''}"
		>
			All
	</a>

		{#each categories as c}
			<a
				data-sveltekit-prefetch
				class="{itemClasses} {kebabCase(c.toLowerCase()) === category ? activeClass : ''}"
				href="?category={kebabCase(c.toLowerCase())}"
			>
				{c}
			</a>
		{/each}
	</div>
</div>