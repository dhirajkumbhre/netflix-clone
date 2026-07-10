import React from "react";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "800px",
          background: "#181818",
          borderRadius: "10px",
          overflow: "hidden",
          color: "white",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "25px" }}>
          <h1>{movie.title}</h1>

          <p>
            ⭐ {movie.vote_average}
            &nbsp;&nbsp;&nbsp;
            📅 {movie.release_date}
          </p>

          <p style={{ marginTop: "20px", lineHeight: "1.7" }}>
            {movie.overview}
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
            }}
          >
            <button>▶ Play</button>

            <button>+ My List</button>

            <button onClick={onClose}>✕ Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;