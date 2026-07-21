import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailSignup.css";

function EmailSignup() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/register", {
      state: { email },
    });
  }

  return (
    <div className="email-signup">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="email-form">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleGetStarted}>
          Get Started &gt;
        </button>
      </div>
    </div>
  );
}

export default EmailSignup;
