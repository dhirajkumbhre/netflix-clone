import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Send login request to backend
      const res = await login(email, password);

      console.log("LOGIN RESPONSE:", res);

      if (res.success) {
        console.log("TOKEN:", res.access_token);

        // Save JWT token
        localStorage.setItem("token", res.access_token);

        // Save email for Watchlist
        localStorage.setItem("email", email);

        alert("Login Successful!");

        // Go to Home page
        navigate("/home");
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Invalid Email or Password");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "350px",
        }}
      >
        <h1 style={{ color: "white" }}>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;