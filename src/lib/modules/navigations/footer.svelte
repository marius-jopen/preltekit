<script>
  import { page } from "$app/stores"
  import Link from '$lib/atoms/link.svelte';
	import Text from '$lib/atoms/text.svelte';

  export let sitemap = true
</script>

<footer class="px-4 py-4 border-t border-text/20 mt-[-1px] bg-background">
	<div class="flex gap-8 justify-center">
    {#each $page.data.setup.data.navigation_footer as { title, link }}
      <Link classes="font-medium" document={link}>
        <Text inline field={title} />
      </Link>
    {/each}

    {#if sitemap}
      <a href="/sitemap.xml">Sitemap</a>
    {/if}
	</div>
</footer>
