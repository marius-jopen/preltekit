<script>
	import { slide, fade } from "svelte/transition"

	export let classesContent = ""
	export let classesTitle = ""
	export let stylesContent = ""
	export let hover = false
	export let dropdown = false
	export let fading = true
	export let arrow = false
	export let open = false

	function toggleAccordeon() {
		open = !open
	}

	function openAccordeon() {
		open = true
	}

	function mouseLeave() {
		if(hover == true) {
			open = false
		}
	}
</script>

<div on:mouseleave={mouseLeave}>
	<div class="flex justify-between {classesTitle}">
		<div class="w-full cursor-pointer">
			{#if hover == true}
				<div on:mouseenter={openAccordeon}  >
					<slot name="title">
					</slot>
				</div>
			{:else}
				<div on:click={toggleAccordeon} >
					<slot name="title">
					</slot>
				</div>
			{/if}
		</div>

		{#if arrow}
			<div on:click={toggleAccordeon} class="h-[12px] mt-2 transition-transform {open ? '' : 'rotate-180'}">
				-
			</div>
		{/if}
	</div>

	{#if open == true}
		<div class="{dropdown ? 'absolute' : ''}" >
			{#if fading == true}
				<div class="{classesContent}" style="{stylesContent}" transition:fade={{ duration: 100 }} >
					<slot name="content">
					</slot>
				</div>
			{:else}
				<div class="{classesContent}" transition:slide={{ duration: 300 }} >
					<slot name="content">
					</slot>
				</div>
			{/if}
		</div>
	{/if}
</div>