import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getMovieDetails,
  addToWatchlist,
  getMovieVideos,
} from "../services/movieService";

import TrailerModal from "../components/TrailerModal";

function MovieDetails() {
  const { id } = useParams();

  // ==========================
  // Movie State
  // ==========================
  const [movie, setMovie] = useState(null);

  // ==========================
  // Trailer State
  // ==========================
  const [trailerKey, setTrailerKey] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);

  // ==========================
  // Load Movie Details
  // ==========================
  useEffect(() => {
    async function loadMovie() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadMovie();
  }, [id]);

  // ==========================
  // Add Movie To Watchlist
  // ==========================
  const saveMovie = async () => {
    try {
      const email = localStorage.getItem("email");

      const response = await addToWatchlist({
        user_email: email,
        movie_id: Number(id),
      });

      if (response.success) {
        alert("Added to Watchlist ❤️");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to add movie.");
    }
  };

  // ==========================
  // Play Trailer
  // ==========================
  const playTrailer = async () => {
    try {
      const data = await getMovieVideos(id);

      const trailer = data.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      );

      if (!trailer) {
        alert("Trailer not available.");
        return;
      }

      setTrailerKey(trailer.key);
      setShowTrailer(true);
    } catch (err) {
      console.error(err);
      alert("Failed to load trailer.");
    }
  };

  // ==========================
  // Loading
  // ==========================
  if (!movie) {
    return (
      <div
        style={{
          background: "#000",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  // ==========================
  // UI
  // ==========================
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#fff",
        padding: "40px",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "250px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <h1>{movie.title}</h1>

      <h3>⭐ {movie.vote_average}</h3>

      <p>{movie.overview}</p>

      <p>
        <strong>Release:</strong> {movie.release_date}
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={saveMovie}
          style={{
            background: "#E50914",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ❤️ Add to Watchlist
        </button>

        <button
          onClick={playTrailer}
          style={{
            background: "white",
            color: "black",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ▶ Play Trailer
        </button>
      </div>

      {/* Trailer Popup */}
      {showTrailer && (
        <TrailerModal
          trailerKey={trailerKey}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
  );
}

export default MovieDetails;