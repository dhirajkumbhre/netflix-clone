
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getTrendingMovies = async () => {
  const response = await api.get("/movies/trending");
  return response.data;
};

export const getPopularMovies = async () => {
  const response = await api.get("/movies/popular");
  return response.data;
};

export const getTopRatedMovies = async () => {
  const response = await api.get("/movies/top-rated");
  return response.data;
};

export const getUpcomingMovies = async () => {
  const response = await api.get("/movies/upcoming");
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movies/movie/${movieId}`);
  return response.data;
};


export const searchMovies = async (query) => {
  const response = await api.get(`/movies/search?query=${query}`);
  return response.data;
};




export const addToWatchlist = async (movie) => {
  const response = await api.post("/watchlist", movie);
  return response.data;
};

export const getWatchlist = async (email) => {
  const response = await api.get(`/watchlist/${email}`);
  return response.data;
};


// ==========================================
// Remove a movie from the user's watchlist
//
// Calls:
// DELETE /api/watchlist/{email}/{movie_id}
// ==========================================

export const removeFromWatchlist = async (email, movieId) => {
  const response = await api.delete(`/watchlist/${email}/${movieId}`);
  return response.data;
};

// ============================================================
// Get Movie Trailer / Videos
// ============================================================

export async function getMovieVideos(movieId) {
  const response = await api.get(`/movies/movie/${movieId}/videos`);
  return response.data;
}

export default api;