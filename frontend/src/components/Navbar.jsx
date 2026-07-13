// ============================================================
// Netflix Navbar
//
// Purpose:
// - Navigation
// - Profile
// - Logout
// ============================================================

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("token");

  // ==========================================
  // Logout
  // ==========================================

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");

    navigate("/");

  };

  return (

    <nav className="navbar">

      {/* Left */}

      <div className="nav-left">

        <h1
          className="logo"
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

        {isLoggedIn && (

          <div className="nav-links">

            <span onClick={() => navigate("/home")}>
              Home
            </span>

            <span onClick={() => navigate("/search")}>
              Search
            </span>

            <span onClick={() => navigate("/watchlist")}>
              Watchlist
            </span>

          </div>

        )}

      </div>

      {/* Right */}

      <div className="nav-right">

        {isLoggedIn ? (

          <>

            <div
              className="profile-btn"
              onClick={() => navigate("/profile")}
            >
              👤
            </div>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </>

        ) : (

          location.pathname !== "/login" && (

            <button
              className="logout-btn"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>

          )

        )}

      </div>

    </nav>

  );

}

export default Navbar;