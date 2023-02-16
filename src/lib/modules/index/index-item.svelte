<script>
  import Link from "$lib/atoms/link.svelte"
  import Text from "$lib/atoms/text.svelte"
	import Image from "$lib/atoms/image.svelte"

	export let item
</script>

<div class="sm:w-1/2 lg:w-1/3 px-4 pb-8">
	<Link document={item}>
		<Image src={item.data.thumbnail} classesOuter="mb-1" classes="hover:scale-[1.01] transition-transform h-[40vw] sm:h-[20vw] lg:h-[15vw] object-cover" />
		<Text classes="text-center" plain field={item.data.title} />
	</Link>
</div>