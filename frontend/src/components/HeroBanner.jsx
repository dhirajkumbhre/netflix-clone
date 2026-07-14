// ============================================================
// Hero Banner
//
// Displays one featured movie at the top of Home.
//
// Features
//  cinematic Hero
// Responsive
// sable Layout
// ============================================================

import React from "react";
import { useNavigate } from "react-router-dom";

import "./HeroBanner.css";

function HeroBanner({ movie }) {

  const navigate = useNavigate();

  if (!movie) return null;

  return (

    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >

      {/* Dark overlay */}

      <div className="hero-overlay"></div>

      {/* Hero content */}

      <div className="hero-content">

        {/* movie Title */}

        <h1 className="hero-title">

          {movie.title}

        </h1>

        {/* Movie info */}

        <div className="hero-info">

          <span>⭐ {movie.vote_average.toFixed(1)}</span>

          <span>📅 {movie.release_date?.split("-")[0]}</span>

          <span>{movie.original_language.toUpperCase()}</span>

        </div>

        {/* Description */}

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

    </section>

  );

}

export default HeroBanner;