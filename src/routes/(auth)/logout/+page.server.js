import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies, locals }) => {
	// redirect to `/` if not logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}

	// eat the cookie
	cookies.set('session', '', {
		path: '/',
		expires: new Date(0),
	})
}
