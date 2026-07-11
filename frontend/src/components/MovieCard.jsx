// ============================================================
// MovieCard Component
//
// Purpose:
// Displays one movie just like Netflix.
//
// Reusable in:
// ✅ Home
// ✅ Search
// ✅ Watchlist
// ✅ Future Recommendation pages
// ============================================================

import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {

  // ==========================================================
  // movie is an object received from the parent component.
  //
  // Example:
  //
  // {
  //   id: 550,
  //   title: "Fight Club",
  //   poster_path: "...",
  //   vote_average: 8.7
  // }
  // ==========================================================

  return (

    // Clicking the card opens Movie Details
    <Link
      to={`/movie/${movie.id}`}
      style={{
        textDecoration: "none",
        color: "white",
      }}
    >

      <div
        style={{
          transition: "0.3s",
          cursor: "pointer",
        }}
      >

        {/* ==========================
            Movie Poster
        =========================== */}

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "180px",
            borderRadius: "10px",
          }}
        />

        {/* Movie Name */}

        <h3
          style={{
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          {movie.title}
        </h3>

        {/* Movie Rating */}

        <p>
          ⭐ {movie.vote_average}
        </p>

      </div>

    </Link>

  );
}

export default MovieCard;