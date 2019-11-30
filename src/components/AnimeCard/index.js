import React from "react";
import { Card, Button } from "antd";

import "./styles.css";

function AnimeCard({ isFavoriteCard, anime }) {
  const { posterImage, titles, status, averageRating, synopsis } = anime.attributes;

  return (
    <Card className="animes-card" bordered={false}>
      <img src={posterImage ? posterImage.large : ""} alt={`${anime.id}-cover-img`} className="anime-card-img" />

      <div className="anime-card-content-container">
        <p className="anime-title">{titles ? titles.en_jp : ""}</p>

        <div className="genre-score-container">
          <span className="genre-text">{status}</span>
          <span className="rating-text">{averageRating}</span>
        </div>

        <p className="anime-desc">{synopsis}</p>

        <div className="favorite-button-container">
          {isFavoriteCard ? (
            <Button icon="delete" className="button delete-button">
              Delete
            </Button>
          ) : (
            <Button icon="heart" className="button favorite-button">
              Favorite
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default AnimeCard;
