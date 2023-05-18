<script>
  import Link from "$lib/atoms/link.svelte"
  import Text from "$lib/atoms/text.svelte"
	import Image from "$lib/atoms/image.svelte"

	export let item
</script>

<div class="sm:w-1/2 lg:w-1/3 px-4 pb-8">
	<Link document={item}>
		<Image src={item.data.thumbnail} classesContainer="mb-1 rounded-lg overflow-hidden" classesImage="hover:scale-[1.01] transition-transform object-cover aspect-[3/2]" />
		<Text classes="text-center h5 pt-1" plain field={item.data.title} />
	</Link>
</div>