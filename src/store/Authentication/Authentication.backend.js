import { Alert } from 'react-native';
//import auth from '@react-native-firebase/auth';

//import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

//import { isNotNull } from 'check-tool';

//import { googleConfig } from '../../integrations/config';

//import AuthenticationError from '../../common/AuthenticationError';

//GoogleSignin.configure(googleConfig);

const file = 'store/Authentication/Authentication.backend';


/**
 * Implements a user login using facebook
 */
const loginWithFacebook = async () => {
  return new Promise((resolve, reject) => {
    /*LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then((loginResult) => {
        if (loginResult.isCancelled) {
          reject(new AuthenticationError('Login was cancelled', 'loginWithFacebook.cancelled'));
          return;
        }

        AccessToken.getCurrentAccessToken()
          .then((data) => {
            const credentials = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

            auth()
              .signInWithCredential(credentials)
              .then((result) => {
                if (isNotNull(result.user)) {
                  // TODO: get data after login
                  resolve(result);
                  return;
                }
                const error = new AuthenticationError('Unable to obtain user data', 'loginWithFacebook.loginError');
                reject(error);
              })
              .catch((error) => {
                reject(new AuthenticationError(error.message, 'loginWithFacebook.loginErrorThirdParty'));
              });
          })
          .catch((error) => {
            reject(new AuthenticationError(error.message, 'loginWithFacebook.loginErrorThirdParty'));
          });
      })
      .catch((error) => {
        reject(new AuthenticationError(error.message, 'loginWithFacebook.loginErrorThirdParty'));
      });
      */
     resolve({});
  });
};

/**
 * Implements a user login using google
 * @param {Object} options optional options (not used for now)
 */
const loginWithGoogle = async () => {
  return new Promise((resolve, reject) => {
    /*GoogleSignin.hasPlayServices({
      // Check if device has Google Play Services installed.
      // Always resolves to true on iOS.
      showPlayServicesUpdateDialog: true,
    }).then((hasPlayServices) => {
      if (!hasPlayServices) {
        const error = new AuthenticationError(
          'Google Play service is not available',
          'loginWithGoogle.playServiceNotAvailable',
        );
        reject(error);
        return;
      }

      GoogleSignin.signIn()
        .then((userInfo) => {
          // create a new firebase credential with the token
          const credentials = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);

          auth()
            .signInWithCredential(credentials)
            .then((result) => {
              if (isNotNull(result.user)) {
                // TODO: get data after login
                resolve(result);
                return;
              }
              const error = new AuthenticationError(
                'Unable to obtain user data from login',
                'loginWithGoogle.loginError',
              );
              reject(error);
            })
            .catch((error) => {
              Alert.alert(error.message);
              reject(new AuthenticationError(error.message, 'loginWithGoogle.loginErrorThirdParty'));
            });
        })
        .catch((error) => {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            reject(new AuthenticationError('Login was cancelled', 'loginWithGoogle.cancelled'));
            return;
          }
          Alert.alert(error.message);
          reject(new AuthenticationError(error.message, 'loginWithGoogle.loginErrorThirdParty'));
        });
    });*/
    resolve({})
  });
};

const logout = async () => {
  /*return new Promise((resolve, reject) => {
    if (!isNotNull(auth().currentUser)) {
      reject(new AuthenticationError('User is already logged out', 'logout.alreadyLoggedOutError'));
      return;
    }

    auth()
      .signOut()
      .then(() => {
        if (auth().currentUser) {
          reject(new AuthenticationError('Unable to logout user', 'logout.logoutError'));
          return;
        }
        resolve({});
      })
      .catch((error) => {
        reject(new AuthenticationError(error.message, 'logout.logoutErrorThirdParty'));
      });
  });*/
};

const getCurrentUser = () => auth().currentUser;

export { loginWithFacebook, loginWithGoogle, logout, getCurrentUser };
