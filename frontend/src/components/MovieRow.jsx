import React, { useEffect, useState } from "react";
import "./MovieRow.css";

function MovieRow({ title, fetchMovies }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    loadMovies();
  }, [fetchMovies]);

  return (
    <div className="movie-row">
      <h2>{title}</h2>

      <div className="movie-list">
        {movies.slice(0, 10).map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;