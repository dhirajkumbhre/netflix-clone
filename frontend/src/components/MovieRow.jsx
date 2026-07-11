// ============================================================
// MovieRow Component
//
// Purpose:
// Displays a horizontal row of movies.
//
// Reusable for:
// ✅ Trending
// ✅ Popular
// ✅ Top Rated
// ✅ Upcoming
//
// Props:
// title  -> Row title
// movies -> Array of movie objects
// ============================================================

import React from "react";

// Import reusable Movie Card
import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {

  return (

    <div
      style={{
        marginBottom: "50px",
      }}
    >

      {/* =====================================
          Row Title
      ====================================== */}

      <h2
        style={{
          color: "white",
          marginBottom: "20px",
          marginLeft: "20px",
        }}
      >
        {title}
      </h2>

      {/* =====================================
          Horizontal Movie List
      ====================================== */}

      <div
        style=
        {{
          display: "flex",
          gap: "20px",

          // Allow horizontal scrolling like Netflix
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "10px",

          padding: "0 20px",

          // Prevent movies from wrapping
          whiteSpace: "nowrap",

          scrollbarWidth: "none",
        }}
      >

        {/* =====================================
            Render one MovieCard for each movie
        ====================================== */}

        {movies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

    </div>

  );

}
export default MovieRow;