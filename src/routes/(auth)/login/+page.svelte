<script>
	import { applyAction, enhance } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	/** @type {import('./$types').PageData} */
	export let form
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<form
	method="POST"
	action="?/login"
	use:enhance={() => {
		return async ({ result }) => {
			// rerun the `load` function for the page
			// https://kit.svelte.dev/docs/modules#$app-navigation-invalidateall
			invalidateAll()

			// since we're customizing the default behaviour
			// we don't want to reimplement what `use:enhance` does
			// so we can use `applyResult` and pass the `result`
			await applyAction(result)
		}
	}}
>
	{#if form?.invalid}
		<p class="error">Username and password are required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" required />
	</div>

	<div>
		{#if form?.password}
			<p class="error">You have entered the wrong password.</p>
		{/if}

		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	<button type="submit">Log in</button>
</form>
