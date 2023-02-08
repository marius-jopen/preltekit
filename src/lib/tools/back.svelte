<script>
	// Function which goes back to the previous visited page
	function back() {
		history.back()
	}
</script>

<div role="button" on:mousedown={back}>
	<slot />
</div>