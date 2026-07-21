import React from "react";
import EmailSignup from "./EmailSignup";

function Hero() {
  return (
    <section className="hero">
      <h1>Unlimited movies, TV shows and more</h1>

      <h2>Watch anywhere. Cancel anytime.</h2>

      <EmailSignup />
    </section>
  );
}

export default Hero;
