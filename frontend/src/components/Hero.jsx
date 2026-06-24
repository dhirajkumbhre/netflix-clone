import React from "react";
function Hero() {
  return (
    <section className="hero">
      <h1>Unlimited movies, TV shows and more</h1>

      <h2>Watch anywhere. Cancel anytime.</h2>

      <p>
        Ready to watch? Enter your email to create
        or restart your membership.
      </p>

      <div className="email-box">
        <input
          type="email"
          placeholder="Email address"
        />

        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;