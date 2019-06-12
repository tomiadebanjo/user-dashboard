import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.SET_LOGGED_IN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case types.LOG_OUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
