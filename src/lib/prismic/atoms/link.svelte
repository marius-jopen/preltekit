<!-- Internal and external links -->
<!-- Deals with empty ones -->

<script>
  import { linkResolver } from "$lib/prismic/functionality/setup"
	import { page } from "$app/stores"

  export let document
  export let href = false

  export let classes = ""
  export let prefetch = ""  // empty string for on
  export let reload = "off"    // off for disabled
  export let activeClass = "underline underline-offset-2 decoration-1"

  let active = false

  if (document) {
    href = linkResolver(document)
  }

  $: active = href === $page.url.pathname
</script>

{#if href}
  <a
    {href}
    class="cursor-pointer {classes} {active ? activeClass : ''}"
    data-sveltekit-prefetch={prefetch}
    data-sveltekit-reload={reload}
  >
    <slot></slot>
  </a>
{:else}
  <slot></slot>
{/if}