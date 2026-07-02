import React from "react";

// CSS for this component only
import "./DownloadSection.css";

// Phone image
import mobile from "../assets/images/mobile-0819.jpg";

// Stranger Things poster (small image inside download card)
import boxshot from "../assets/images/boxshot.png";

function DownloadSection() {
  return (
    /*
      =====================================================
      DOWNLOAD SECTION

      LEFT  : Phone image + Download Card
      RIGHT : Heading + Description

      This is one of Netflix's most famous landing page
      sections.

      New concepts:
      - position: relative
      - position: absolute
      - Flexbox
      =====================================================
    */

    <section className="download-section">

      {/* ==========================
          LEFT SIDE
      ========================== */}

      <div className="download-image">

        {/* Phone image */}

        <img
          src={mobile}
          alt="Netflix Mobile"
        />

        {/* -----------------------------------------
            DOWNLOAD CARD

            This card sits ON TOP of the phone image.

            That's why we'll use:

            position:absolute

            inside CSS.
        ------------------------------------------ */}

        <div className="download-card">

          {/* Stranger Things poster */}

          <img
            src={boxshot}
            alt="Stranger Things"
            className="boxshot"
          />

          {/* Download information */}

          <div className="download-info">

            <h4>Stranger Things</h4>

            <span>Downloading...</span>

          </div>

          {/* Download icon */}

          <div className="download-icon">

            ⬇

          </div>

        </div>

      </div>

      {/* ==========================
          RIGHT SIDE
      ========================== */}

      <div className="download-text">

        <h2>

          Download your shows
          to watch offline

        </h2>

        <p>

          Save your favourites easily
          and always have something to
          watch.

        </p>

      </div>

    </section>
  );
}

export default DownloadSection;