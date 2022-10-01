// get `locals.user` and pass it to the `page` store
/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ locals }) => {
	return {
		user: locals.user,
	}
}
