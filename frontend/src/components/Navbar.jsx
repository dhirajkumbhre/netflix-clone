// ==========================================================
// Netflix Navbar Component
// ==========================================================
//
// Responsibilities
// ----------------------------------------------------------
// • Display the application logo
// • Show navigation links for authenticated users
// • Display Profile and Logout buttons
// • Show Sign In button for guests
// • Change navbar appearance while scrolling
// • Handle user logout
//
// ==========================================================

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  // ==========================================================
  // React Router Hooks
  // ==========================================================
  // navigate()
  // Used for programmatic page navigation.
  //
  // location
  // Gives access to the current URL.
  // Useful for conditionally rendering UI.
  // ==========================================================

  const navigate = useNavigate();
  const location = useLocation();

  // ==========================================================
  // Authentication
  // ==========================================================
  // If a token exists inside localStorage,
  // the user is considered authenticated.
  // ==========================================================

  const isLoggedIn = localStorage.getItem("token");

  // ==========================================================
  // Navbar Background State
  // ==========================================================
  // false → Transparent navbar
  // true  → Dark navbar after scrolling
  // ==========================================================

  const [showBackground, setShowBackground] = useState(false);

  // ==========================================================
  // Scroll Effect
  // ==========================================================
  // Watches the window scroll position.
  //
  // After scrolling more than 80px:
  // • Add dark background
  // • Improve text visibility
  //
  // Cleanup removes the event listener
  // when the component unmounts.
  // ==========================================================

  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 80) {

        setShowBackground(true);

      } else {

        setShowBackground(false);

      }

    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // ==========================================================
  // Logout Function
  // ==========================================================
  // Removes authentication data
  // and redirects the user
  // to the landing page.
  // ==========================================================

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");

    navigate("/");

  };

  // ==========================================================
  // Component UI
  // ==========================================================

  return (

    <nav
      className={`navbar ${showBackground ? "navbar-black" : ""}`}
    >

      {/* ======================================================
          Left Section
          ----------------------------------------------------
          Logo
          Navigation Links
      ======================================================= */}

      <div className="nav-left">

        {/* Logo */}

        <h1
          className="logo"
          onClick={() => {

            // Redirect based on authentication

            if (isLoggedIn) {

              navigate("/home");

            } else {

              navigate("/");

            }

          }}
        >
          NETFLIX
        </h1>

        {/* ================================================
            Navigation Menu

            Visible only for authenticated users.
        ================================================= */}

        {isLoggedIn && (

          <div className="nav-links">

            {/* Home */}

            <span
              onClick={() => navigate("/home")}
            >
              Home
            </span>

            {/* Search */}

            <span
              onClick={() => navigate("/search")}
            >
              Search
            </span>

            {/* Watchlist */}

            <span
              onClick={() => navigate("/watchlist")}
            >
              Watchlist
            </span>

          </div>

        )}

      </div>

      {/* ======================================================
          Right Section
          ----------------------------------------------------
          Profile
          Logout
          Sign In
      ======================================================= */}

      <div className="nav-right">

        {isLoggedIn ? (

          <>

            {/* User Profile Button */}

            <div
              className="profile-btn"
              onClick={() => navigate("/profile")}
            >
              👤
            </div>

            {/* Logout Button */}

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </>

        ) : (

          // Don't show Sign In button
          // while already on the Login page.

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
