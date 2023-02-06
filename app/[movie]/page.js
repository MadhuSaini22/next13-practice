import Image from "next/image";
import React from "react";

async function Movie({ params }) {
  console.log(params);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );

  const response = await data.json();
  const img_path = IMAGE_PATH + response.backdrop_path;

  return (
    <main>
      <div className="text-2xl items-center py-12 justify-center text-center">
        <div>{response.title}</div>
        <div>{response.release_date}</div>
        <h2>Runtime: {response.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-2 rounded-xl">
          {response.status}
        </h2>
        <div className="flex items-center justify-center">
          <Image
            src={`${img_path}`}
            width={900}
            height={900}
            alt={response.title}
            priority
            className="my-12"
          />
        </div>
        <p> {response.overview}</p>
      </div>
    </main>
  );
}

export default Movie;
