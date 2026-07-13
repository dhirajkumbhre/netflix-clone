// ============================================================
// Movie Details Page
//
// Features
// ✅ Movie Details
// ✅ Trailer
// ✅ Watchlist
// ✅ Modern Two Column Layout
// ============================================================

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getMovieDetails,
  addToWatchlist,
  getMovieVideos,
} from "../services/movieService";

import TrailerModal from "../components/TrailerModal";

import "./MovieDetails.css";

function MovieDetails() {

  const { id } = useParams();

  // ==========================================================
  // State
  // ==========================================================

  const [movie, setMovie] = useState(null);

  const [trailerKey, setTrailerKey] = useState("");

  const [showTrailer, setShowTrailer] = useState(false);

  // ==========================================================
  // Load Movie
  // ==========================================================

  useEffect(() => {

    async function loadMovie() {

      try {

        const data = await getMovieDetails(id);

        setMovie(data);

      }

      catch(err){

        console.error(err);

      }

    }

    loadMovie();

  }, [id]);

  // ==========================================================
  // Add Watchlist
  // ==========================================================

  const saveMovie = async () => {

    try{

      const email = localStorage.getItem("email");

      const response = await addToWatchlist({

        user_email: email,

        movie_id: Number(id),

      });

      if(response.success){

        alert("Added to Watchlist ❤️");

      }

    }

    catch(err){

      console.error(err);

      alert("Failed to add movie.");

    }

  };

  // ==========================================================
  // Play Trailer
  // ==========================================================

  const playTrailer = async () => {

    try{

      const data = await getMovieVideos(id);

      const trailer = data.results.find(

        video =>

          video.site === "YouTube" &&

          video.type === "Trailer"

      );

      if(!trailer){

        alert("Trailer not available.");

        return;

      }

      setTrailerKey(trailer.key);

      setShowTrailer(true);

    }

    catch(err){

      console.error(err);

      alert("Failed to load trailer.");

    }

  };

  // ==========================================================
  // Loading
  // ==========================================================

  if(!movie){

    return(

      <div
        style={{
          minHeight:"100vh",
          background:"#111",
          color:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:"28px"
        }}
      >

        Loading...

      </div>

    );

  }

  // ==========================================================
  // UI
  // ==========================================================

  return(

    <div className="movie-details-page">

      <div className="movie-details-container">

        {/* Poster */}

        <div className="movie-poster">

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

        {/* Right Side */}

        <div className="movie-content">

          <h1>

            {movie.title}

          </h1>

          <div className="movie-meta">

            <span>

              ⭐ {movie.vote_average.toFixed(1)}

            </span>

            <span>

              📅 {movie.release_date}

            </span>

            <span>

              🌍 {movie.original_language.toUpperCase()}

            </span>

          </div>

          <p className="movie-overview">

            {movie.overview}

          </p>

          <div className="movie-buttons">

            <button
              className="watchlist-btn"
              onClick={saveMovie}
            >

              ❤️ Add to Watchlist

            </button>

            <button
              className="trailer-btn"
              onClick={playTrailer}
            >

              ▶ Play Trailer

            </button>

          </div>

        </div>

      </div>

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