<script>
import { enhance } from '$app/forms'
/** @type {import('./$types').PageData} */
export let form
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<h1>Register</h1>

<form method="POST" use:enhance action="?/register">
	{#if form?.user}
		<p class="error">Username is taken.</p>
	{/if}

	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	{#if form?.user}
		<p class="error">Username is taken.</p>
	{/if}

	<button type="submit">Register</button>
</form>
