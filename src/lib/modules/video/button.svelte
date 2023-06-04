<script>
	export let paused;

	function playButton() {
		if (paused == false || paused == undefined) {
			paused = true;
		} else {
			paused = false;
		}
	}
</script>

<button on:mousedown={playButton}>
	{#if paused}
		<div class="w-6">
			<i class="fa-solid fa-play" />
		</div>
	{:else}
		<div class="w-6">
			<i class="fa-solid fa-pause" />
		</div>
	{/if}
</button>
