// ACTION TYPES
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";

// ACTION CREATORS
export const setLoginSuccess = user => ({
  type: SET_LOGIN_SUCCESS,
  payload: user
});
