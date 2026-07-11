import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

import ProtectedRoute from "./routes/ProtectedRoute";

import Watchlist from "./pages/Watchlist";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/movie/:id"
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/search"
        element={
        <Search />} 
      />
<Route
  path="/watchlist"
  element={
    <ProtectedRoute>
      <Watchlist />
    </ProtectedRoute>
  }
/>

    </Routes>
  );
}

export default App;