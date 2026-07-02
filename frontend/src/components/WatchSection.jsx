// ===============================
// TODO:
// Add Netflix TV video animation
// after completing the landing page.
// ===============================


import React from "react";
import "./WatchSection.css";

import device from "../assets/images/device-pile-in.png";

// Uncomment this when you add the TV video animation
// import tvVideo from "../assets/videos/video-tv.m4v";


function WatchSection() {
  return (
    <section className="watch-section">
      <div className="watch-text">
        <h2>Watch everywhere</h2>

        <p>
            Stream unlimited movies and TV shows on your
            phone, tablet, laptop and TV.
        </p>
      </div>

      <div className="watch-image">
        <img src={device} alt="Device pile" />

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

export default WatchSection;