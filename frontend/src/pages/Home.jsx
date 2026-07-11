// ============================================================
// Home Page
//
// Purpose:
// - Fetch movie categories from FastAPI.
// - Pick one random trending movie.
// - Display Hero Banner.
// - Display Trending, Popular, Top Rated and Upcoming rows.
//
// ============================================================

import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movieService";

function Home() {

  // ===============================
  // React State
  // ===============================

  const [heroMovie, setHeroMovie] = useState(null);

  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  // ===============================
  // Load movies once
  // ===============================

  useEffect(() => {

    async function loadMovies() {

      try {

        const trendingData = await getTrendingMovies();
        const popularData = await getPopularMovies();
        const topRatedData = await getTopRatedMovies();
        const upcomingData = await getUpcomingMovies();

        setTrending(trendingData.results);
        setPopular(popularData.results);
        setTopRated(topRatedData.results);
        setUpcoming(upcomingData.results);

        // Pick random Hero movie
        const random =
          trendingData.results[
            Math.floor(Math.random() * trendingData.results.length)
          ];

        setHeroMovie(random);

      } catch (err) {

        console.error(err);

      }

    }

    loadMovies();

  }, []);

  // ===============================
  // Loading Screen
  // ===============================

  if (!heroMovie) {

    return (

      <div
        style={{
          background: "#000",
          color: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >

        Loading Netflix...

      </div>

    );

  }

  // ===============================
  // UI
  // ===============================

  return (

    <div
      style={{
        background: "#111",
        minHeight: "100vh",
      }}
    >

      <Navbar />

      <HeroBanner movie={heroMovie} />

      <MovieRow
        title="Trending Now"
        movies={trending}
      />

      <MovieRow
        title="Popular"
        movies={popular}
      />

      <MovieRow
        title="Top Rated"
        movies={topRated}
      />

      <MovieRow
        title="Upcoming"
        movies={upcoming}
      />

    </div>

  );

}

export default Home;