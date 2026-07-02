// ===============================
// TODO:
// Add Netflix TV video animation
// after completing the landing page.
// ===============================


import React from "react";
import "./FeatureSection.css";

import tv from "../assets/images/TVnetflix.png";

// Uncomment this when you add the TV video animation
// import tvVideo from "../assets/videos/video-tv.m4v";


function FeatureSection() {
  return (
    <section className="feature">
      <div className="feature-text">
        <h2>Enjoy on your TV</h2>

        <p>
          Watch on smart TVs, PlayStation, Xbox,
          Chromecast, Apple TV, Blu-ray players and more.
        </p>
      </div>

      <div className="feature-image">
        <img src={tv} alt="TV" />

        {/*
        ====================================================
        TV VIDEO ANIMATION (FutAre Upgrade)
        ====================================================

        1. Download video-tv.m4v
        2. Put it inside:
           src/assets/videos/

        3. Uncomment this import:
           import tvVideo from "../assets/videos/video-tv.m4v";

        4. Uncomment the code below.
        ====================================================

        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={tvVideo} type="video/mp4" />
        </video>

        */}
      </div>
    </section>
  );
}

export default FeatureSection;