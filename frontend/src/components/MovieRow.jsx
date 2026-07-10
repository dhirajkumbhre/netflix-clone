import React, { useEffect, useState } from "react";
import "./MovieRow.css";
import MovieModal from "./MovieModal";

function MovieRow({ title, fetchMovies }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
    <>
      <div className="movie-row">
        <h2>{title}</h2>

        <div className="movie-list">
          {movies.slice(0, 10).map((movie) => (
            <div
              className="movie-card"
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default MovieRow;