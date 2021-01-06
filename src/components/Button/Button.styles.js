import { StyleSheet } from 'react-native';
import styles, { colors, fontSizes, spaces } from '../../resources/styles/common';

const buttonStyles = StyleSheet.create({
  defaultSize: {
    height: 52,
    width: '100%',
    alignSelf: 'stretch',
  },
  defaultText: {
    alignSelf: 'center',
    color: colors.iqWhite,
    fontSize: fontSizes.small,
  },
  buttonIcon: {
    paddingTop: spaces.default,
    paddingHorizontal: spaces.medium,
    alignSelf: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

const defaultButtonStyle = StyleSheet.flatten([styles.center, buttonStyles.defaultSize]);

const defaultButtonTextStyle = buttonStyles.defaultText;

const defaultLoginButtonStyle = StyleSheet.flatten([styles.directionRow, defaultButtonStyle]);

const googleButtonStyle = StyleSheet.flatten([
  defaultLoginButtonStyle,
  { backgroundColor: colors.iqWhite, borderRadius: 6 },
]);

const googleButtonTextStyle = {
  color: colors.iqBlack,
  alignSelf: 'center',
  fontSize: fontSizes.normal,
  fontWeight: '500',
};

const googleButtonIconStyle = {
  marginTop: spaces.default,
  marginRight: spaces.default,
  marginLeft: spaces.default,
  width: spaces.large,
  height: spaces.large,
};

const facebookButtonStyle = StyleSheet.flatten([
  defaultLoginButtonStyle,
  { backgroundColor: colors.facebookLogin, borderRadius: 6 },
]);

const facebookButtonTextStyle = {
  alignSelf: 'center',
  color: colors.iqWhite,
  fontSize: fontSizes.normal,
  fontWeight: '500',
};

const facebookButtonIconStyle = { ...buttonStyles.buttonIcon, marginRight: spaces.default };


const logoutButtonStyle = StyleSheet.flatten([styles.directionRow, { marginRight: 5 }]);

const logoutButtonTextStyle = StyleSheet.flatten([
  {
    fontSize: fontSizes.normal,
    color: colors.iqPink,
    marginTop: -2,
  },
]);

const logoutButtonIconStyle = {
  left: 0,
  top: 0,
  marginHorizontal: spaces.small,
};


export {
  buttonStyles,
  defaultButtonStyle,
  defaultButtonTextStyle,
  googleButtonStyle,
  googleButtonTextStyle,
  googleButtonIconStyle,
  facebookButtonStyle,
  facebookButtonTextStyle,
  facebookButtonIconStyle,
  logoutButtonStyle,
  logoutButtonTextStyle,
  logoutButtonIconStyle,
};
