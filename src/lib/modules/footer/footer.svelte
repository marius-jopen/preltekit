<script>
	import Navigation from '$lib/modules/navigation/navigation.svelte';

	export let setup;
</script>

<footer class="px-4 py-4 border-t border-text/20 mt-[-1px] bg-background">
	<div class="flex gap-8 justify-center">
		<Navigation document={setup.data.navigation_footer} />
	</div>
</footer>
