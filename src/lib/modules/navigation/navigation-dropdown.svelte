<script>
	import Link from "$lib/atoms/link.svelte"
	import Text from "$lib/atoms/text.svelte"
	import Accordeon from "$lib/modules/layouts/accordeon.svelte"

	export let document
	export let contentDistanceTop = 8
	export let hover = "hover:text-text/60"
	export let classesContent ="-ml-3 bg-background px-5 pt-2 pb-2 border-black/20 border-b border-x rounded-b-xl"

	const documentIndexed = []
	const navigation = []
	const children = []

	let parentCount = 0
	let object

	// Creates an array in which the parents and children have an ID so we can find them later
	document.forEach(function (item) {
		if(item.level == 'default') {
			documentIndexed.push(item);
		}

		if(item.level == 'parent') {
			documentIndexed.push(item)
			item.parent = parentCount
			parentCount = parentCount + 1
		}

		if(item.level == 'child') {
			documentIndexed.push(item)
			item.child = parentCount - 1
		}
	})

	// Creates an array with only default links and parents. No children
	documentIndexed.forEach(function (item) {
		if(item.level == 'default') {
			navigation.push(item);
		}

		if(item.level == 'parent') {
			navigation.push(item)
			item.children = []
		}
	})

	// Creates an extra array just for the children. Save the children!
	documentIndexed.forEach(function (item) {
		if(item.level == 'child') {
			children.push(item)
		}
	})

	// Pushes the children into the "navigation" array in under the matching parent
	children.forEach(function (item) {
		for (let step = 0; step < parentCount; step++) {
			if(item.child == step) {
				object = navigation.find(o => o.parent === step)
				object.children.push(item)
			}
		}
	})
</script>

{#each navigation as item}
	{#if item.level == 'default'}
		<Link document={item.link} classes="{hover}">
			<Text inline field={item.title} />
		</Link>
	{/if}

	{#if item.level == 'parent'}
		<Accordeon fading hover dropdown stylesContent="margin-top: {contentDistanceTop}px" classesContent="{classesContent}">
			<div slot="title">
				{#if item.link.link_type == 'Any'}
					<Text plain field={item.title} classes="cursor-default" />
				{:else}
					<Link document={item.link} classes="{hover}" >
						<Text plain field={item.title} />
					</Link>
				{/if}
			</div>

			<div slot="content">
				{#each item.children as i}
					<Link document={i.link} classes="{hover}" >
						<Text plain field={i.title} classes="pb-2"/>
					</Link>
				{/each}
			</div>
		</Accordeon>
	{/if}
{/each}