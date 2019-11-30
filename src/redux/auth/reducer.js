import { SET_LOGIN_SUCCESS } from "./actions";

const INITIAL_STATE = {
  loggedIn: false,
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      };

    default:
      return state;
  }
};
