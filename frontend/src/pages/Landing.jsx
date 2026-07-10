import MovieRow from "../components/MovieRow";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movieService";

import React from "react";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import FeatureSection from "../components/FeatureSection";

import DownloadSection from "../components/DownloadSection";

import WatchSection from "../components/WatchSection";

import KidsSection from "../components/KidsSection";

import FaqSection from "../components/FaqSection";

function Landing() {

  return (

    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      <MovieRow title="Trending Now" fetchMovies={getTrendingMovies} />

      <MovieRow title="Popular" fetchMovies={getPopularMovies} />

      <MovieRow title="Top Rated" fetchMovies={getTopRatedMovies} />

      <MovieRow title="Upcoming" fetchMovies={getUpcomingMovies} />

      {/* Feature 1 */}
      <FeatureSection />

      {/* Feature 2 */}
      <DownloadSection />

      <WatchSection />

      <KidsSection />

      <FaqSection />

    </>

  );

}

export default Landing;