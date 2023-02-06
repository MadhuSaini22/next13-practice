import React from "react";
import Movie from "../movie";

async function Trendy() {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  // https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );

  const response = await data.json();
  console.log(response.results, "response");

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

export default Trendy;
