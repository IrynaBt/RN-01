import { StyleSheet } from 'react-native';
import { colors, spaces, fontSizes, fontWeights } from '../../resources/styles/common';

export default StyleSheet.create({
  loginImage: {
    alignSelf: 'center',
    flex: 1,
    width: 221,
    height: 182,
    opacity: 1,
  },
  buttonBlock: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  appleButton: {
    width: '100%',
    height: 45,
    alignSelf: 'center',
  },
  containerFullScreen: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    margin: spaces.default,
    backgroundColor: colors.iqWhite,
    borderRadius: 25,
    opacity: 0.9,
    flex: 1,
  },
  title: {
    fontSize: fontSizes.large,
    textAlign: 'center',
    color: colors.iqGreen,
    fontWeight: fontWeights.normal,
  },
  content: {
    fontSize: fontSizes.normal,
    textAlign: 'center',
    color: colors.iqBlack,
    paddingTop: 10,
    paddingBottom: 20,
  },
});
