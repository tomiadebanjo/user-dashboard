import * as types from './action.types.js';
import AuthService from '../services/Auth.service';
import setAuthHeader from '../utils/setAuthHeader.js';
import TokenHelpers from '../utils/TokenHelpers.js';

const loginRequest = isLoading => ({
  type: types.LOGIN_REQUEST,
  payload: isLoading,
});

const loginSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

const loginError = error => ({
  type: types.LOGIN_ERROR,
  payload: error,
});

export const setLoggedInUser = token => {
  // Decode token
  const user = TokenHelpers.decodeToken(token);
  setAuthHeader(token);
  return {
    type: types.SET_LOGGED_IN_USER,
    payload: user,
  };
};

export const logOutUser = () => {
  TokenHelpers.deleteToken();
  return {
    type: types.LOG_OUT_USER,
  };
};

export const login = payload => async dispatch => {
  try {
    dispatch(loginRequest(true));

    console.log(payload, 'I reach redux oo');

    const { data } = await AuthService.login(payload);
    console.log(data, '+++++++');
    const token = data['access_token'];

    setAuthHeader(token);
    TokenHelpers.addTokenToLocalStorage(token);
    const user = TokenHelpers.decodeToken(token);

    dispatch(loginRequest(false));
    dispatch(loginSuccess(user));
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data, 'data error');
      console.log(error.response.status, 'data status');
      console.log(error.response.headers, 'data status');
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request, 'request');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
    dispatch(loginRequest(false));
    dispatch(loginError(error));
  }
};
