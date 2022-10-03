/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
	const fetchProduct = async () => {
		const resProducts = await fetch(
			`https://dummyjson.com/products/${params.id}`
		)
		const products = await resProducts.json()
		return products
	}

	return {
		product: await fetchProduct(),
	}
}
