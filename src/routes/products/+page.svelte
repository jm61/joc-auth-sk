<script>
	/** @type {import('./$types').PageData} */
	export let data
	const products = data.products
	const category = data.category
	/** @type {Object}*/
	export let form
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<h1>Products</h1>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<div class="cont">
	{#each products as product}
		<div class="card">
			<h4>{product.name}</h4>
			Price:<small>€{product.price}</small>
			<p>
				cat:{category
					.filter((el) => el.id === product.categoryId)
					.map((el) => el.name)}
			</p>
			<hr />
		</div>
	{/each}
</div>

<form method="POST">
	{#if form?.invalid}
		<p class="error">Name, Price and Quantity are required.</p>
	{/if}

	<div>
		<label for="name">Name</label>
		<input id="name" name="name" type="text" required />
	</div>
	<div>
		<label for="price">Price</label>
		<input id="price" name="price" type="number" required />
	</div>
	<div>
		<label for="quantity">Quantity</label>
		<input id="quantity" name="quantity" type="number" required />
	</div>
	<div>
		<label for="categoryId">Category</label>
		<select id="categoryId" name="categoryId" required>
			{#each category as cat}
				<option value={cat.id}>{cat.name}</option>
			{/each}
		</select>
	</div>
	<button type="submit">Add Product</button>
</form>

<style>
	.cont {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-gap: 1rem;
	}
	.card {
		background-color: darkolivegreen;
		border-radius: 0.5rem;
		padding: 0 1rem;
		box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
			inset -2px -2px 3px rgba(0, 0, 0, 0.6);
	}
</style>
