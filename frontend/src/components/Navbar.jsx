import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  // ==========================================================
  // Check whether the user is logged in.
  //
  // If a token exists in localStorage,
  // the user is considered logged in.
  // ==========================================================
  const isLoggedIn = localStorage.getItem("token");

  // ==========================================================
  // Logout
  //
  // Removes login information and
  // returns the user to the Landing page.
  // ==========================================================
  const logout = () => {

    // Remove saved JWT token
    localStorage.removeItem("token");

    // Remove saved email
    localStorage.removeItem("email");

    // Redirect to Landing page
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Netflix Logo */}
      <h1
        className="logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        NETFLIX
      </h1>

      {/* Right Side Button */}
      {isLoggedIn ? (

        // If logged in show Logout
        <button
          className="signin-btn"
          onClick={logout}
        >
          Logout
        </button>

      ) : (

        // If not logged in show Sign In
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