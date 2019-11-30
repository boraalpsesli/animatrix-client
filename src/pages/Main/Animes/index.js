import React, { useEffect, useCallback } from "react";
import { Button, message } from "antd";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AnimeCard from "../../../components/AnimeCard";
import { tryFetchAnimes } from "../../../redux/anime/api";

import "../styles.css";

function Animes() {
  const dispatch = useDispatch();
  const animeList = useSelector(state => state.anime.animeList);
  const nextLink = useSelector(state => state.anime.nextLink);

  const loggedIn = useSelector(state => state.auth.loggedIn);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        await dispatch(tryFetchAnimes());
      } catch (error) {
        message.error("patladık moruk");
      }
    };

    fetchAnimes();
  }, [dispatch]);

  const handleRefresh = useCallback(
    e => {
      e.preventDefault();
      const fetchAnimes = async () => {
        try {
          await dispatch(tryFetchAnimes(nextLink));
        } catch (error) {
          message.error("patladık moruk");
        }
      };

      fetchAnimes();
    },
    [nextLink, dispatch]
  );

  if (!loggedIn) return <Redirect to="/login" />;

  return (
    <>
      <div className="main-header-container">
        <p className="main-title">Hold on to your seats ...</p>

        <Button type="primary" icon="reload" className="button" onClick={handleRefresh}>
          Refresh
        </Button>
      </div>

      <div className="main-card-container">
        {animeList.map(anime => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
      </div>
    </>
  );
}

export default Animes;
