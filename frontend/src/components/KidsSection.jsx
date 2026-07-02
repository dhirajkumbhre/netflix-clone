import React from "react";

// CSS for this component only
import "./KidsSection.css";

// Image used in this section
import children from "../assets/images/children.png";

function KidsSection() {
  return (

    /*
      =======================================================
      KIDS SECTION

      Layout
      ----------------------------
      | Image | Heading + Text   |
      ----------------------------

      Left  -> Kids image

      Right -> Heading + Paragraph
      =======================================================
    */

    <section className="kids-section">

      {/* ==========================
          LEFT SIDE : Image
      ========================== */}

      <div className="kids-image">

        <img
          src={children}
          alt="Kids Netflix"
        />

      </div>

      {/* ==========================
          RIGHT SIDE : Text
      ========================== */}

      <div className="kids-text">

        <h2>
          Create profiles for kids
        </h2>

        <p>
          Send children on adventures with their favourite
          characters in a space made just for them—free with
          your membership.
        </p>

      </div>

    </section>

  );
}

export default KidsSection;