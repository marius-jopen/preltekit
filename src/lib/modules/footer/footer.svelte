<script>
  import { page } from "$app/stores"
	import Navigation from '$lib/modules/navigation/navigation.svelte';
</script>

<footer class="px-4 py-4 border-t border-text/20 mt-[-1px] bg-background">
	<div class="flex gap-8 justify-center">
		<Navigation document={$page.data.setup.data.navigation_footer} />
    <a href="/sitemap.xml">Sitemap</a>
	</div>

</footer>
