import { combineReducers } from 'redux';

const welcomeReducer = (state = 'welcome', action) => {
  return state;
};

const rootReducer = combineReducers({
  app: welcomeReducer,
});

export default rootReducer;
