import { SET_ANIME_LIST } from "./actions";

const INITIAL_STATE = {
  animeList: [],
  nextLink: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ANIME_LIST:
      return {
        ...state,
        animeList: action.payload.data,
        nextLink: action.payload.links.next
      };

    default:
      return state;
  }
};
