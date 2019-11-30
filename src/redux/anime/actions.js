// ACTION TYPES
export const SET_ANIME_LIST = "SET_ANIME_LIST";

// ACTION CREATORS
export const setAnimeList = animes => ({
  type: SET_ANIME_LIST,
  payload: animes
});
