/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const fetchProducts = async () => {
		const resProducts = await fetch('https://dummyjson.com/products?limit=10')
		const products = await resProducts.json()
		return products
	}

	const fetchUsers = async () => {
		const resUsers = await fetch('https://dummyjson.com/users?limit=5')
		const users = await resUsers.json()
		return users
	}

	return {
		products: await fetchProducts(),
		users: await fetchUsers(),
	}
}
