import React from "react";
import "./card.css";

function card() {
  return (
    <div id="Card">
      <img className="anime-cover" />
      <div className="info-area">
        <p>Anime Name</p>
        <p>anime Point</p>
      </div>
      <div className="action-container">
        <div id="Button">
          <span>Favorite</span>
        </div>
      </div>
    </div>
  );
}
export default card;
