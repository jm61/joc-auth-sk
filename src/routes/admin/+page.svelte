<script>
	import { page } from '$app/stores'
	export let data
</script>

<h1>Admin</h1>

{#if $page.data.user}
	<p>Welcome {$page.data.user}!</p>
{/if}

<pre>{JSON.stringify(data, null, 2)}</pre>
