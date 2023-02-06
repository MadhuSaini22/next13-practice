import Movie from "./movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  const response = await data.json();

  return (
    <main>
      <div className="grid gap-4 py-12 grid-cols-fluid">
        {response.results.map((movie) => (
          <div className="flex">
            <div>
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
