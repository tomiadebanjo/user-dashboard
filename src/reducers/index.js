import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import organizationReducer from './organization.reducer';

const welcomeReducer = (state = 'welcome', action) => {
  return state;
};

const rootReducer = combineReducers({
  app: welcomeReducer,
  auth: authReducer,
  organizations: organizationReducer
});

export default rootReducer;
