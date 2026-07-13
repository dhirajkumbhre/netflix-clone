// ============================================================
// Trailer Modal
//
// Purpose:
// - Display a YouTube trailer in a popup.
// - Close when the user clicks the × button.
// ============================================================

import React from "react";

function TrailerModal({ trailerKey, onClose }) {

  // Don't render anything if no trailer exists
  if (!trailerKey) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80%",
          maxWidth: "900px",
        }}
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-45px",
            right: "0",
            background: "#E50914",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          ✕
        </button>

        {/* YouTube Trailer */}

        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          allowFullScreen
          style={{
            border: "none",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default TrailerModal;