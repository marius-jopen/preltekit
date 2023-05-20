<script>
	import Link from "$lib/atoms/link.svelte"
	import Text from "$lib/atoms/text.svelte"
	import Image from "$lib/atoms/image.svelte"

	export let item
</script>

<div class="sm:w-1/2 lg:w-1/3 px-4 pb-8">
	<Link document={item}>
		<Image src={item.data.thumbnail} classContainer="mb-1" classImage="rounded-lg object-cover aspect-[3/1]" />
		<Text classes="text-center pt-1" plain field={item.data.title} />
	</Link>
</div>