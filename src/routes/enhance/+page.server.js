/** @type {import('./$types').PageServerLoad} */

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData()
		const name = data.get('name')
		const password = data.get('password')

		return { success: true, name: name, password: password }
	},
}
