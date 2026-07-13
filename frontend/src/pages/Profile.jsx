// ============================================================
// Profile Page
//
// Purpose:
// - Display logged-in user's information.
// - Show watchlist count.
// - Navigate to Watchlist.
// - Allow Logout.
// ============================================================

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWatchlist } from "../services/movieService";

function Profile() {

  const navigate = useNavigate();

  // ==========================================================
  // React State
  // ==========================================================

  const [watchlistCount, setWatchlistCount] = useState(0);

  // Logged-in user's email
  const email = localStorage.getItem("email");

  // ==========================================================
  // Load Watchlist Count
  // ==========================================================

  useEffect(() => {

    async function loadWatchlist() {

      if (!email) return;

      try {

        const watchlist = await getWatchlist(email);

        // Save number of movies
        setWatchlistCount(watchlist.length);

      } catch (err) {

        console.error(err);

      }

    }

    loadWatchlist();

  }, [email]);

  // ==========================================================
  // Logout
  // ==========================================================

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");

    navigate("/");

  };

  // ==========================================================
  // UI
  // ==========================================================

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <div
        style={{
          background: "#1b1b1b",
          padding: "40px",
          borderRadius: "12px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.4)",
        }}
      >

        {/* Avatar */}

        <div
          style={{
            fontSize: "80px",
            marginBottom: "20px",
          }}
        >
          👤
        </div>

        {/* Email */}

        <h2>{email}</h2>

        <p
          style={{
            color: "#bbb",
            marginBottom: "30px",
          }}
        >
          NetflixX Member
        </p>

        {/* Watchlist Count */}

        <h3>
          ❤️ Watchlist Movies: {watchlistCount}
        </h3>

        {/* Buttons */}

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >

          <button
            onClick={() => navigate("/watchlist")}
            style={{
              padding: "12px",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          >
            🎬 Go To Watchlist
          </button>

          <button
            onClick={logout}
            style={{
              padding: "12px",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              background: "#E50914",
              color: "white",
              fontSize: "16px",
            }}
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

}

export default Profile;