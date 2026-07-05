import React from "react";
import "./EmailSignup.css";

function EmailSignup() {
  return (
    <div className="email-signup">

      {/* Small description */}

      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      {/* Email input and button */}

      <div className="email-form">

        <input
          type="email"
          placeholder="Email address"
        />

        <button>

          Get Started &gt;

        </button>

      </div>

    </div>
  );
}

export default EmailSignup;