import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Service from "./fetchService";

import authReducer from "./auth/reducer";
import animeReducer from "./anime/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  combineReducers({
    auth: authReducer,
    anime: animeReducer
  }),
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(Service)))
);
