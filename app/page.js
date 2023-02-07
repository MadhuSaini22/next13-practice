import Movie from "./movie";

export default async function Home() {
  const data = await fetch(
    `${process.env.REACT_APP_API_SLUG}popular?api_key=${process.env.REACT_APP_TMDB_KEY}&${process.env.REACT_APP_IMAGE_END}`
  );
  const response = await data.json();
  console.log(response.results);

  return (
    <main>
      <div className="grid gap-4 py-12 grid-cols-fluid">
        {response &&
          response.results.map((movie) => (
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
