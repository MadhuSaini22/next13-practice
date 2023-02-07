"use client";

import { useState, useEffect } from "react";
import Movie from "../movie";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    console.log("Hello useEffect");

    // fetch(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&${process.env.REACT_APP_IMAGE_END}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "data");
    //     setUpcomingMovies(data.results);
    //   });
  });
  console.log("effect rule");
  return (
    <div>
      <h1>Hello</h1>
      <main>
        {/* <div className="grid gap-4 py-12 grid-cols-fluid">
          sdgdfh
          {upcomingMovies.map((movie) => (
            <div className="flex" key={movie.id}>
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
        </div> */}
      </main>
    </div>
  );
}
