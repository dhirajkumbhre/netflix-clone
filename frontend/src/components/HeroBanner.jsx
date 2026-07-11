// ============================================================
// Hero Banner
//
// Displays one featured movie at the top of Home.
//
// Props:
// movie -> One movie object
// ============================================================

import React from "react";
import { useNavigate } from "react-router-dom";

function HeroBanner({ movie }) {

  const navigate = useNavigate();

  // If movie hasn't loaded yet
  if (!movie) return null;

  return (
    <div
      style={{
        height: "80vh",
        backgroundImage: `linear-gradient(
          rgba(0,0,0,.3),
          rgba(0,0,0,.8)
        ),
        url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,

        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        alignItems: "center",

        padding: "60px",

        color: "white",
      }}
    >

      <div
        style={{
          maxWidth: "600px",
        }}
      >

        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          {movie.title}
        </h1>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          {movie.overview}
        </p>

        <button
          onClick={() => navigate(`/movie/${movie.id}`)}
          style={{
            padding: "14px 28px",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          ▶ Play
        </button>

        <button
          onClick={() => navigate(`/movie/${movie.id}`)}
          style={{
            padding: "14px 28px",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            background: "#555",
            color: "white",
          }}
        >
          ℹ More Info
        </button>

      </div>

    </div>
  );
}

export default HeroBanner;