<script>
/** @type {import('./$types').PageData} */
export let data
//console.log(data)
const base_url = 'http://image.tmdb.org/t/p/w185/'
</script>

<svelte:head>
	<title>Movies</title>
</svelte:head>

<details>
	<summary>MOVIES</summary>
	{#each data.movies as movie}
		<div>
			<h3>{movie.title}</h3>
			<p>{movie.overview}</p>
			<img src="{`${base_url}${movie.poster_path}`}" alt="pic" />
		</div>
	{/each}
</details>
