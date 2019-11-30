import { setAnimeList } from "./actions";

export const tryFetchAnimes = nextLink => async (dispatch, getState, service) => {
  let response;
  if (nextLink)
    response = await service.fetchAnimeApi({
      absoluteURL: nextLink,
      method: "GET"
    });
  else
    response = await service.fetchAnimeApi({
      path: "/anime",
      method: "GET"
    });

  try {
    const values = await response.json();

    dispatch(setAnimeList(values));

    return Promise.resolve();
  } catch (error) {
    return Promise.reject("Sometthing went wrong!");
  }
};
