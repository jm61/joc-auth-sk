<script>
	import { page } from '$app/stores'
	console.log($page.data.user)
</script>

<svelte:head>
	<title>User Page</title>
</svelte:head>

<h1>User Page</h1>

{#if $page.data.user}
	<p>
		Welcome {$page.data.user.name.toUpperCase()}! Your profile is: {$page.data
			.user.role}
	</p>
{/if}

{#if $page.data.user.role === 'ADMIN'}
	<form action="/logout" method="POST">
		<button type="submit">Log out</button>
	</form>
{/if}
