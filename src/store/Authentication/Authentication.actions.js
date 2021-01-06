import { isDefined, isNotEmpty } from 'check-tool';
import { Alert } from 'react-native';
//import auth from '@react-native-firebase/auth'; // TODO: install



import BackendError, { USER_NOT_FOUND, UNCOMPLETE_USER_PROFILE } from '../../common/BackendError';

import { navigate } from '../../store/Navigation/Navigation.actions';

const file = 'store/Authentication/Authentication.actions';

const LOGIN_STARTED = 'LOGIN_STARTED';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT = 'LOGOUT';

const loginSuccess = (provider, authData) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_STARTED, provider });

    Alert.alert('CALL loginSuccess action');

    /*const jwt = await auth().currentUser.getIdToken();
    let backendUser;
    try {
      backendUser = await getUser(authData.user.uid); // -> TODO
      dispatch({
        type: LOGIN_SUCCESS,
        provider,
        user: backendUser,
        jwt,
      });
    } catch (error) {
      if (error instanceof BackendError) {
        switch (error.code) {
          case USER_NOT_FOUND: {
            backendUser = {
              uid: authData.user.uid,
              displayName: authData.user.displayName ? authData.user.displayName : '',
              email: authData.user.email,
              photoURL: authData.user.photoURL ? authData.user.photoURL : '',
              nameFirst: '',
              nameLast: '',
              dateModified: new Date(),
            };

            if (isDefined(authData.additionalUserInfo) && isDefined(authData.additionalUserInfo.profile)) {
              // eslint-disable-next-line camelcase
              const { given_name, family_name } = authData.additionalUserInfo.profile;
              if (isNotEmpty(given_name)) {
                backendUser.nameFirst = given_name; // eslint-disable-line camelcase
              }
              if (isNotEmpty(family_name)) {
                backendUser.nameLast = family_name; // eslint-disable-line camelcase
              }
            }

            // await saveUserBackend(backendUser); -> TODO

            dispatch({
              type: LOGIN_SUCCESS,
              provider,
              user: backendUser,
              jwt,
            });
            break;
          }
          case UNCOMPLETE_USER_PROFILE: {

            dispatch({
              type: LOGIN_SUCCESS,
              provider,
              user: backendUser,
              jwt,
            });
            break;
          }
          default: {
            dispatch(
              loginError(
                provider,
                'We bumped on some error with your profile. It was reported to our team and we will fix it ASAP',
              ),
            );
          }
        }
      } else {
        dispatch(loginError(provider, 'We bumped on some error. It was reported to our team and we will fix it ASAP'));
      }
    }*/
  };
};

const loginError = (provider, error) => ({ type: LOGIN_ERROR, provider, error });

const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
    dispatch(navigate('Root', { screen: homeTab.page }));
  };
};


export {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  loginSuccess,
  loginError,
  logout,
};
