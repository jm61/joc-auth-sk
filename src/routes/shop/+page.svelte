<script>
	/** @type {import('./$types').PageData} */
	export let data
	//console.log(data)
</script>

<svelte:head>
	<title>Shopping</title>
</svelte:head>

<details>
	<summary>PRODUCTS</summary>
	{#each data.products.products as product}
		<div>
			<h3>{product.title}</h3>
			<p>{product.description}</p>
			<img src={product.thumbnail} alt="pic" />
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
