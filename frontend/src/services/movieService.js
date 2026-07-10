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

export default api;