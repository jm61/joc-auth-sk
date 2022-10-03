<script>
	import { applyAction, enhance } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import { notifications } from '$lib/notification'
	import Toast from '$lib/components/Toast.svelte'
	/** @type {import('./$types').PageData} */
	export let form
	console.clear()
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<form
	method="POST"
	action="?/login"
	use:enhance={() => {
		return async ({ result, form }) => {
			if (result.type === 'success') {
				notifications.success('Login successful!')
				setTimeout(() => {
					form.reset()
					invalidateAll()
				}, 1500)
				await applyAction(result)
				return
			}
			notifications.danger('Login failed!')
			setTimeout(() => {
				form.reset()
				invalidateAll()
			}, 1500)
			return
		}
		// rerun the `load` function for the page
		// https://kit.svelte.dev/docs/modules#$app-navigation-invalidateall
		// since we're customizing the default behaviour
		// we don't want to reimplement what `use:enhance` does
		// so we can use `applyResult` and pass the `result`
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

<Toast />
