// =========================================================
// Watchlist Page
//
// Purpose:
// - Load the logged-in user's watchlist from MongoDB.
// - Fetch full movie details from TMDB.
// - Display saved movies.
// - Remove movies from watchlist.
//
// =========================================================

import React, { useEffect, useState } from "react";

import {
  getWatchlist,
  getMovieDetails,
  removeFromWatchlist,
} from "../services/movieService";

import { Link } from "react-router-dom";

function Watchlist() {

  // Stores all movie objects
  const [movies, setMovies] = useState([]);

  // =========================================================
  // Load Watchlist
  // =========================================================

  useEffect(() => {

    async function load() {

      // Logged in user's email
      const email = localStorage.getItem("email");

      if (!email) return;

      // Get saved movie IDs from MongoDB
      const watchlist = await getWatchlist(email);

      // Fetch full movie details from TMDB
      const movieDetails = await Promise.all(
        watchlist.map(async (item) => {
          return await getMovieDetails(item.movie_id);
        })
      );

      // Save into React state
      setMovies(movieDetails);
    }

    load();

  }, []);

  // =========================================================
  // Remove Movie
  // =========================================================

  const removeMovie = async (movieId) => {

    try {

      const email = localStorage.getItem("email");

      // Delete movie from MongoDB
      await removeFromWatchlist(email, movieId);

      // Remove movie instantly from UI
      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== movieId)
      );

      alert("Movie removed from Watchlist");

    } catch (err) {

      console.error(err);

      alert("Failed to remove movie");

    }

  };

  // =========================================================
  // UI
  // =========================================================

  return (

    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
      }}
    >

      <h1>❤️ My Watchlist</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {movies.map((movie) => (

          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >

            <div>

              {/* Movie Poster */}

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "180px",
                  borderRadius: "10px",
                }}
              />

              {/* Movie Title */}

              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "18px",
                }}
              >
                {movie.title}
              </h3>

              {/* Movie Rating */}

              <p>⭐ {movie.vote_average}</p>

              {/* Remove Movie */}

              <button
                onClick={(e) => {

                  // Prevent opening Movie Details
                  e.preventDefault();

                  removeMovie(movie.id);

                }}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  background: "#e50914",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                🗑 Remove
              </button>

            </div>

          </Link>

        ))}

      </div>

    </div>

  );

}

export default Watchlist;