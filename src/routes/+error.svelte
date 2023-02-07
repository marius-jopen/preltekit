<script>
  import { page } from '$app/stores';
</script>

<div class="text-center">
	{$page.status}: {$page.error.message}
</div>