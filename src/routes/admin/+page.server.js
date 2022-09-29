/** @type {import('cookie').CookieParseOptions} */
export const load = ({ cookies, request }) => {
	const test = cookies.get('session')
	console.log(test)
	const data = request.headers.get('cookie')
	return { data }
}
