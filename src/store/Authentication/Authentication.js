import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './Authentication.actions';


export const initialState = {
  provider: null,
  jwt: null,
  user: null,
  error: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED: {
      return {
        ...state,
        error: null,
        jwt: null,
      };
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          error: null,
          provider: action.provider,
          user: action.user,
          jwt: action.jwt,
        },
      };
    case LOGIN_ERROR: {
      return {
        ...state,
        ...{
          provider: action.provider,
          error: action.error,
          jwt: null,
        },
      };
    }
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
