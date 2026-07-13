// ============================================================
// MovieCard Component
//
// Purpose:
// Displays one movie card.
//
// Used in:
// Home
// search
// Watchlist
// ============================================================

import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {

  return (

    <Link
      to={`/movie/${movie.id}`}
      style={{
        textDecoration: "none",
      }}
    >

      <div className="movie-card">

        {/* Movie Poster */}

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        {/* Movie Information */}

        <div className="movie-info">

          <div className="movie-title">
            {movie.title}
          </div>

          <div className="movie-rating">
            ⭐ {movie.vote_average.toFixed(1)}
          </div>

        </div>

      </div>

    </Link>

  );

}

export default MovieCard;