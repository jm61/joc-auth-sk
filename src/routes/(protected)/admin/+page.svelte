<script>
	import { page } from '$app/stores'
	console.log($page.data.user)
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>

<h1>Admin Page</h1>

{#if $page.data.user}
	<p>
		Welcome {$page.data.user.name.toUpperCase()}! Your profile is: {$page.data
			.user.role}
	</p>
{/if}
