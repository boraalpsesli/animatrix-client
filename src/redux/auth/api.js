import { setLoginSuccess } from "./actions";

export const tryLogin = config => async (dispatch, getState, service) => {
  const response = await service.fetchMyApi({
    path: "/auth/login",
    method: "POST",
    body: config
  });

  try {
    const values = await response.json();
    if (values.accessToken) await service.setToken(values.accessToken);
    if (values.user) dispatch(setLoginSuccess(values.user));

    return Promise.resolve();
  } catch (error) {
    return Promise.reject("Sometthing went wrong!");
  }
};

export const tryRegister = config => async (dispatch, getState, service) => {
  await service.fetchMyApi({
    path: "/auth/register",
    method: "POST",
    body: config
  });

  Promise.resolve();
};
