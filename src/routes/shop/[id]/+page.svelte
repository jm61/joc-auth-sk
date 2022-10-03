<script>
	/** @type {import('./$types').PageData} */
	export let data
	const { product } = data
	//console.log(data.product)
</script>

<svelte:head>
	<title>{product.title}</title>
</svelte:head>

<pre>{JSON.stringify(product, null, 2)}</pre>
