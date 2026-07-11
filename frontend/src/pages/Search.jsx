import React, { useState , useEffect } from "react";
import { searchMovies } from "../services/movieService";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>Search Movies</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{
          padding: "10px",
          width: "300px",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
        }}
      >
        Search
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,200px)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="180"
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;