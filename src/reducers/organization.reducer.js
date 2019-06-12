import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const organizationReducer = (state = initialState.organizations, action) => {
  switch (action.type) {
    case types.FETCH_ORGANIZATION_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case types.FETCH_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organizationsList: action.payload,
      };
    case types.FETCH_ORGANIZATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default organizationReducer;
