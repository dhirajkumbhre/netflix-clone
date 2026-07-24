// ============================================================
// MovieCard Component
// ------------------------------------------------------------
// Purpose:
// Displays a single movie thumbnail.
//
// Features:
// • Netflix-style landscape thumbnail
// • Lazy image loading
// • Movie title and rating
// • Navigates to Movie Details page
// ============================================================

import React from "react";
import { Link } from "react-router-dom";

import "./MovieCard.css";

function MovieCard({ movie }) {

  // ----------------------------------------------------------
  // Use backdrop image whenever available.
  // If it doesn't exist, use the poster image instead.
  // ----------------------------------------------------------

  const imagePath =
    movie.backdrop_path || movie.poster_path;

  return (

    <Link
      to={`/movie/${movie.id}`}
      className="movie-link"
    >

      <div className="movie-card">

        {/* Movie Thumbnail */}

        <img
          src={`https://image.tmdb.org/t/p/w780${imagePath}`}
          alt={movie.title}
          loading="lazy"
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