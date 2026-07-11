// ============================================================
// Netflix Navbar
//
// Purpose:
// - Display the Netflix logo.
// - Show navigation links after login.
// - Show Sign In before login.
// - Allow Logout.
// ============================================================

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

  // React Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // ==========================================================
  // Check if user is logged in
  //
  // If token exists in localStorage,
  // user is considered authenticated.
  // ==========================================================
  const isLoggedIn = localStorage.getItem("token");

  // ==========================================================
  // Logout
  //
  // Remove saved login information
  // then return to Landing Page.
  // ==========================================================
  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");

    navigate("/");

  };

  return (

    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "20px 50px",

        background: "#111",

        color: "white",

        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >

      {/* =====================================================
          Left Side
      ====================================================== */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >

        {/* =====================================================
            Netflix Logo

            If user is logged in:
            NETFLIX -> /home

            Otherwise:
            NETFLIX -> Landing Page
        ====================================================== */}

        <h1
          style={{
            color: "#E50914",
            cursor: "pointer",
            margin: 0,
          }}
          onClick={() => {

            if (isLoggedIn) {

              navigate("/home");

            } else {

              navigate("/");

            }

          }}
        >
          NETFLIX
        </h1>

        {/* =====================================================
            Navigation Links

            Only visible after Login.
        ====================================================== */}

        {isLoggedIn && (

          <>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/home")}
            >
              Home
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/search")}
            >
              Search
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/watchlist")}
            >
              Watchlist
            </span>

          </>

        )}

      </div>

      {/* =====================================================
          Right Side
      ====================================================== */}

      {isLoggedIn ? (

        // Show Logout after Login
        <button
          className="signin-btn"
          onClick={logout}
        >
          Logout
        </button>

      ) : (

        // Show Sign In only when not already on Login page
        location.pathname !== "/login" && (

          <button
            className="signin-btn"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>

        )

      )}

    </nav>

  );

}

export default Navbar;