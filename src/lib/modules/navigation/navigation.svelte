<script>
	import Link from '$lib/atoms/link.svelte';
	import Text from '$lib/atoms/text.svelte';

	export let document;
</script>

{#each document as { title, link }}
	<Link document={link}>
		<Text inline field={title} />
	</Link>
{/each}
