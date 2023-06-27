<script>
	import Link from '$lib/atoms/link.svelte';
	import Text from '$lib/atoms/text.svelte';
	import Accordeon from '$lib/modules/layouts/accordeon.svelte';
  import { makeNavigation } from "./index"

	export let document;
	export let contentDistanceTop = 8;
	export let hover = 'hover:text-text/60';
	export let classesContent =
		'-ml-3 bg-background px-5 pt-2 pb-2 border-black/20 border-b border-x rounded-b-xl';

  // Prepare nav
  const navigation = makeNavigation(document)
</script>

{#each navigation as item}
	{#if item.level == 'default'}
		<Link document={item.link} classes={hover}>
			<Text inline field={item.title} />
		</Link>
	{/if}

	{#if item.level == 'parent'}
		<Accordeon
			fading
			hover
			dropdown
			stylesContent="margin-top: {contentDistanceTop}px"
			{classesContent}
		>
			<div slot="title">
				{#if item.link.link_type == 'Any'}
					<Text plain field={item.title} classes="cursor-default" />
				{:else}
					<Link document={item.link} classes={hover}>
						<Text plain field={item.title} />
					</Link>
				{/if}
			</div>

			<div slot="content">
				{#each item.children as i}
					<Link document={i.link} classes={hover}>
						<Text plain field={i.title} classes="pb-2" />
					</Link>
				{/each}
			</div>
		</Accordeon>
	{/if}
{/each}
