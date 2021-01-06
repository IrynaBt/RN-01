import React from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { isEmpty } from 'check-tool';

import { GoogleSignInButton, FacebookSignInButton } from '../../components/Button';
import { loginWithFacebook, loginWithGoogle } from '../../store/Authentication/Authentication.backend';

import { NavigationActions, AuthenticationActions } from '../../store/actions';

import stylesSignIn from './SignIn.styles';


export const SignIn = ({ actions, user, error, provider }) => {
  if (!isEmpty(user)) {
    //actions.navigate('Films');
    return null;
  }
  const renderError = () => {
    if (isEmpty(error) || error.message === 'Login was cancelled' || isEmpty(error.message)) {
      return null;
    }
    return (
      <View>
        <Text>{error.name + ': ' + error.message + ' (' + provider + ')'}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderError()}
      <View>
          <View style={{ marginVertical: 100 }}>
            <Text style={{textAlign: 'center', fontSize: 32}}>Sign in</Text>
          </View>
            <View style={stylesSignIn.buttonBlock}>
              <FacebookSignInButton
                onPress={() =>
                  loginWithFacebook()
                    .then((result) => {
                      actions.loginSuccess('facebook', result);
                    })
                    .catch((err) => {
                      actions.loginError('facebook', err);
                    })
                }
                text='Sign in with Facebook'
              />
            </View>
            <View style={stylesSignIn.buttonBlock}>
              <GoogleSignInButton
                onPress={() =>
                  loginWithGoogle()
                    .then((result) => {
                      actions.loginSuccess('google', result);
                    })
                    .catch((err) => {
                      actions.loginError('google', err);
                    })
                }
                text='Sign in with Google'
              />
            </View>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  user: state.authentication.user,
  error: state.authentication.error,
  provider: state.authentication.provider,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      navigate: NavigationActions.navigate,
      loginSuccess: AuthenticationActions.loginSuccess,
      loginError: AuthenticationActions.loginError,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
