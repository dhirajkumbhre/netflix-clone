// ============================================================
// Hero Banner
//
// Displays one featured movie at the top of Home.
//
// Props:
// movie -> Featured movie object
// ============================================================

import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroBanner.css";

function HeroBanner({ movie }) {
  const navigate = useNavigate();

  // Don't render until movie loads
  if (!movie) return null;

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Movie Title */}
        <h1 className="hero-title">{movie.title}</h1>

        {/* Movie Information */}
        <div className="hero-info">
          <span>⭐ {movie.vote_average.toFixed(1)}</span>

          <span>📅 {movie.release_date?.split("-")[0]}</span>

          <span>🌍 {movie.original_language.toUpperCase()}</span>
        </div>

        {/* Movie Description */}
        <p className="hero-description">
          {movie.overview}
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button
            className="hero-play"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            ▶ Play
          </button>

          <button
            className="hero-info-btn"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;