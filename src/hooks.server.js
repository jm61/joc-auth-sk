import { db } from '$lib/database'

// custom redirect
/** @param {string} location */
function redirect(location) {
	return new Response(undefined, {
		status: 303,
		headers: { location },
	})
}

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session')

	// if there is no session
	if (!session) {
		// redirect protected pages
		if (event.url.pathname === '/admin' || event.url.pathname === '/products') {
			console.log('protected page')
			return redirect('/')
		}

		// or load page as normal
		return await resolve(event)
	}

	// find the user based on the session
	const user = await db.user.findUnique({
		where: { userAuthToken: session },
		select: { username: true },
	})

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = user.username
	} else {
		// make sure nothing weird is going on
		if (event.url.pathname === '/admin') {
			return redirect('/')
		}
	}

	// load page as normal
	return await resolve(event)
}
