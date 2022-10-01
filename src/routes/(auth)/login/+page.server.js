import { invalid, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import { db } from '$lib/database'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	// redirect to `/` if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		if (
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			!username ||
			!password
		) {
			return invalid(400, { invalid: true })
		}

		const user = await db.user.findUnique({ where: { username } })

		if (!user) {
			return invalid(400, { credentials: true })
		}

		const userPassword = await bcrypt.compare(password, user.passwordHash)

		if (!userPassword) {
			return invalid(400, { credentials: true })
		}

		cookies.set('session', user.userAuthToken, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after one day
			maxAge: 60 * 60 * 24 * 1,
		})
	},
}
