// ============================================================
// movieService.js
//
// Purpose:
// This file contains all functions that communicate with
// our FastAPI backend.
//
// React Components
//        │
//        ▼
// movieService.js
//        │
//        ▼
// FastAPI Backend
//        │
//        ▼
// TMDB API / MongoDB
// ============================================================

import axios from "axios";

// ============================================================
// Axios Instance
//
// Every request automatically starts with:
//
// http://127.0.0.1:8000/api
// ============================================================

const api = axios.create({
  baseURL: "https://netflix-clone-4c4d.onrender.com/api",
});

// ============================================================
// Trending Movies
//
// GET /api/movies/trending
// ============================================================

export const getTrendingMovies = async () => {
  const response = await api.get("/movies/trending");
  return response.data;
};

// ============================================================
// Popular Movies
//
// GET /api/movies/popular
// ============================================================

export const getPopularMovies = async () => {
  const response = await api.get("/movies/popular");
  return response.data;
};

// ============================================================
// Top Rated Movies
//
// GET /api/movies/top-rated
// ============================================================

export const getTopRatedMovies = async () => {
  const response = await api.get("/movies/top-rated");
  return response.data;
};

// ============================================================
// Upcoming Movies
//
// GET /api/movies/upcoming
// ============================================================

export const getUpcomingMovies = async () => {
  const response = await api.get("/movies/upcoming");
  return response.data;
};

// ============================================================
// Get Complete Movie Details
//
// GET /api/movies/movie/{movieId}
//
// Returns:
// Title
// Poster
// Overview
// Rating
// Release Date
// etc.
// ============================================================

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movies/movie/${movieId}`);
  return response.data;
};

// ============================================================
// Search Movies
//
// GET /api/movies/search
// ============================================================

export const searchMovies = async (query) => {
  const response = await api.get(`/movies/search?query=${query}`);
  return response.data;
};

// ============================================================
// Add Movie To Watchlist
//
// POST /api/watchlist
// ============================================================

export const addToWatchlist = async (movie) => {
  const response = await api.post("/watchlist", movie);
  return response.data;
};

// ============================================================
// Get User Watchlist
//
// GET /api/watchlist/{email}
// ============================================================

export const getWatchlist = async (email) => {
  const response = await api.get(`/watchlist/${email}`);
  return response.data;
};

// ============================================================
// Remove Movie From Watchlist
//
// DELETE /api/watchlist/{email}/{movieId}
// ============================================================

export const removeFromWatchlist = async (email, movieId) => {
  const response = await api.delete(`/watchlist/${email}/${movieId}`);
  return response.data;
};

// ============================================================
// Get Movie Trailer / Videos
//
// GET /api/movies/movie/{movieId}/videos
//
// Returns all available videos from TMDB.
// We'll later select the official YouTube trailer.
// ============================================================

export const getMovieVideos = async (movieId) => {
  const response = await api.get(`/movies/movie/${movieId}/videos`);
  return response.data;
};

// ============================================================
// Export Axios Instance
// ============================================================

export default api;