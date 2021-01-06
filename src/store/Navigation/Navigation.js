//import { navigate } from 'components/RootNavigation';
import { NAVIGATE } from './Navigation.actions';

const initialState = {
  screen: null,
  params: null,
};

const navigationReducer = (state = initialState, action) => {
  if (action.type === NAVIGATE) {
    const newState = {
      ...state,
      ...{
        screen: action.screen,
        params: action.params,
      },
    };

    navigate(action.screen, action.params);
    return newState;
  }
  return state;
};

export default navigationReducer;
