<script>
	import { applyAction, enhance } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import { page } from '$app/stores'
	import '../styles/app.css'
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/movies" data-sveltekit-prefetch>Movies</a>
	<a href="/shop" data-sveltekit-prefetch>Shopping</a>
	<a href="/products" data-sveltekit-prefetch>Products</a>
	{#if !$page.data.user}
		<a href="/login" class="login">Login</a>
		<a href="/register" class="register">Register</a>
	{/if}

	{#if $page.data.user?.role === 'ADMIN'}
		<a href="/admin">Admin</a>
	{/if}
	{#if $page.data.user}
		<form
			class="logout"
			action="/logout"
			method="POST"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll()
					await applyAction(result)
				}
			}}
		>
			<button type="submit">Log out</button>
		</form>
	{/if}
</nav>

<main>
	<slot />
</main>

<style>
	.login {
		margin-left: auto;
	}
	.register {
		margin-right: 2rem;
	}
	.logout {
		margin: 0;
	}
	button {
		background-color: lightblue;
		color: rgb(14, 1, 1);
	}
</style>
