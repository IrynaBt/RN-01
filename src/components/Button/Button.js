import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import {
  buttonStyles,
  googleButtonIconStyle,
  googleButtonStyle,
  googleButtonTextStyle,
  facebookButtonStyle,
  facebookButtonTextStyle,
  facebookButtonIconStyle,
  logoutButtonStyle,
  logoutButtonTextStyle,
  logoutButtonIconStyle,
} from './Button.styles';

const Button = ({
  onPress,
  children,
  buttonStyle,
  icon,
  textStyle,
  testID,
  disabled,
  disabledStyle = buttonStyles.disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} testID={testID} disabled={disabled} style={disabled ? disabledStyle : null}>
      <View style={buttonStyle}>
        {icon}
        <Text style={textStyle}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const GoogleSignInButton = ({ onPress, text }) => (
  <Button
    onPress={onPress}
    buttonStyle={googleButtonStyle}
    icon={<Image source={require('../../resources/images/btn_google.png')} style={googleButtonIconStyle} />}
    textStyle={googleButtonTextStyle}
  >
    {text}
  </Button>
);

export const FacebookSignInButton = ({ onPress, text }) => (
  <Button
    onPress={onPress}
    buttonStyle={facebookButtonStyle}
    textStyle={facebookButtonTextStyle}
  >
    {text}
  </Button>
);


export const LogoutButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress} testID="logoutID">
    <View style={logoutButtonStyle}>
      <Text style={logoutButtonTextStyle}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
