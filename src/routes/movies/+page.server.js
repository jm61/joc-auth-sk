import { MOVIE_DBv3 } from '$env/static/private'
/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const fetchMovies = await fetch(
		`https://api.themoviedb.org/3/trending/movie/week?api_key=${MOVIE_DBv3}`
	)
	const movies = await fetchMovies.json()
	//console.log(movies.results)
	return { movies: movies.results }
}
