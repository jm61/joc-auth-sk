import { db } from '$lib/database'
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const products = await db.product.findMany()
	const category = await db.category.findMany()
	const data = { products, category }
	return data
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const name = data.get('name')
		const price = data.get('price').toString()
		const quantity = data.get('quantity').toString()
		const categoryId = data.get('categoryId').toString()

		console.log(...data)
		await db.product.create({
			data: {
				name,
				price,
				quantity,
				categoryId,
			},
		})

		throw redirect(303, '/products')
	},
}
