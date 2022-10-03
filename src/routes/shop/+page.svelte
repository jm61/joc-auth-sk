<script>
	/** @type {import('./$types').PageData} */
	export let data
	//console.log(data.products)
</script>

<svelte:head>
	<title>Shopping</title>
</svelte:head>

<details open>
	<summary>PRODUCTS</summary>
	{#each data.products.products as product}
		<div>
			<a href="/shop/{product.id}" data-sveltekit-prefetch
				><h3>{product.title}</h3></a
			>
			<p>{product.description}</p>
		</div>
	{/each}
</details>
<details>
	<summary>USERS</summary>
	{#each data.users.users as user}
		<div>
			<h3>{user.firstName}</h3>
			<p>{user.birthDate}</p>
			<img src={user.image} alt="pic" />
		</div>
	{/each}
</details>
