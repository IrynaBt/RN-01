import { combineReducers } from 'redux';

import { AuthenticationReducer } from '../store/Authentication';
import { NavigationReducer } from '../store/Navigation';

export default combineReducers({
  authentication: AuthenticationReducer,
  navigation: NavigationReducer,
});
