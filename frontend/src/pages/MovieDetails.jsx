// ==========================
// Import React hooks
// ==========================

// React is the library used to build the UI.
// useEffect runs code after the component is rendered.
// useState stores data that can change.
import React, { useEffect, useState } from "react";


// ==========================
// Import React Router hook
// ==========================

// useParams() reads values from the URL.
// Example:
// localhost:5173/movie/550
// id becomes "550"
import { useParams } from "react-router-dom";


// ==========================
// Import API functions
// ==========================

// This function asks our FastAPI backend
// to return all information about one movie.
import { getMovieDetails } from "../services/movieService";

// This function sends a request to save a movie
// into the logged-in user's watchlist.
import { addToWatchlist } from "../services/movieService";


// =======================================================
// MovieDetails Component
// =======================================================

function MovieDetails() {

  // Read the movie id from the URL.
  // Example:
  // /movie/550
  // id = "550"
  const { id } = useParams();


  // movie state stores the complete movie object
  // returned from the backend.
  //
  // Initially:
  // movie = null
  //
  // Later:
  // movie = {
  //    title,
  //    poster_path,
  //    overview,
  //    vote_average,
  //    release_date,
  //    ...
  // }
  const [movie, setMovie] = useState(null);



  // =======================================================
  // Save Movie To Watchlist
  // =======================================================

  const saveMovie = async () => {

    try {

      // Read the logged in user's email
      // from browser localStorage.
      //
      // We saved it during login.
      const email = localStorage.getItem("email");


      // Send this data to the backend.
      //
      // Backend receives:
      //
      // {
      //    user_email: "...",
      //    movie_id: 550
      // }
      //
      // The backend then stores it in MongoDB.
      const response = await addToWatchlist({

        user_email: email,

        // URL parameter is a string.
        // MongoDB stores movie id as number.
        // Number() converts:
        //
        // "550"
        //
        // into
        //
        // 550
        movie_id: Number(id),

      });


            // Show success message

      if(response.success) {
        alert("Added to Watchlist ❤️");


      }




    }

    catch (err) {

      // Print error if something fails
      console.error(err);
      alert("Failed to add to movie");

    }

  };



  // =======================================================
  // Load Movie Details
  // =======================================================

  useEffect(() => {

    async function loadMovie() {

      try {

        // Ask backend:
        //
        // GET /api/movies/movie/550
        //
        // Backend fetches data from TMDB
        // and returns movie details.
        const data = await getMovieDetails(id);

        // Save movie inside React state.
        setMovie(data);

      }

      catch (error) {

        console.error(error);

      }

    }

    // Run the function
    loadMovie();

    // Runs again only if URL id changes.
  }, [id]);



  // =======================================================
  // Loading Screen
  // =======================================================

  // While waiting for backend response.
  // movie is still null.
  //
  // Show Loading...
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



  // =======================================================
  // main UI
  // =======================================================

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#fff",
        padding: "40px",
      }}
    >

      {/* Movie poster */}

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "250px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />



      {/* Movie Title */}

      <h1>{movie.title}</h1>



      {/* Movie Rating */}

      <h3>

        ⭐ {movie.vote_average}

      </h3>



      {/* Movie Description */}

      <p>

        {movie.overview}

      </p>



      {/* Release Date */}

      <p>

        <strong>Release:</strong>

        {movie.release_date}

      </p>



      {/* Save Movie Button */}

      <button

        onClick={saveMovie}

        style={{

          background: "#e50914",

          color: "white",

          border: "none",

          padding: "12px 24px",

          borderRadius: "5px",

          cursor: "pointer",

          marginTop: "20px",

        }}

      >

        ❤️ Add to Watchlist

      </button>

    </div>

  );

}

export default MovieDetails;