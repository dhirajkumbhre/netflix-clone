// ============================================================
// MovieRow Component
//
// Purpose:
// Displays one horizontal Netflix-style movie row.
//
// Features:
// ✅Left / Right scroll buttons
//✅ Smooth scrolling
// ✅ Reusable
// ============================================================

import React, { useRef } from "react";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {

  // Reference to the scrolling container
  const rowRef = useRef(null);

  // Scroll Left
  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -800,
      behavior: "smooth",
    });
  };

  // Scroll Right
  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 800,
      behavior: "smooth",
    });
  };

  return (

    <div
      style={{
        marginBottom: "60px",
        position: "relative",
      }}
    >

      {/* ==========================
          Row Title
      ========================== */}

      <h2
        style={{
          color: "white",
          marginLeft: "25px",
          marginBottom: "20px",
          fontSize: "28px",
        }}
      >
        {title}
      </h2>

      {/* Left Arrow */}

      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "45px",
          height: "90px",
          background: "rgba(0,0,0,.65)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "28px",
          borderRadius: "6px",
        }}
      >
        ❮
      </button>

      {/* Movies */}

      <div
        ref={rowRef}
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          padding: "0 45px",
        }}
      >

        {movies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

      {/* Right Arrow */}

      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "45px",
          height: "90px",
          background: "rgba(0,0,0,.65)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "28px",
          borderRadius: "6px",
        }}
      >
        ❯
      </button>

    </div>

  );

}

export default MovieRow;