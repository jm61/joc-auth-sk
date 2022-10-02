<script>
	import { enhance } from '$app/forms'
	import { notifications } from '$lib/notification'
	import Toast from '$lib/components/Toast.svelte'
	console
	let loading = false

	/** @type {import('./$types').PageData} */
	export let data
	console.log(data)
	/** @type {import('./$types').ActionData} */
	export let form
	console.log(form)

	function formResult(result) {
		console.log('enhance')
	}
</script>

<section>
	<h2>Form enhance</h2>
	<form action="?/login" use:enhance>
		<label for="name">Name</label>
		<input type="text" name="name" required />
		<label for="password">Password</label>
		<input type="password" name="password" required />
		<button>Login</button>
	</form>
</section>
