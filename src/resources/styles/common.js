import { StyleSheet } from 'react-native';

export const colors = {
  grayLight: '#EEEEEE',
  main: '#B3B3BB',
  active: '#007aff',
  buttonMain: '#1DA664',
  facebookLogin: '#4267B2',
  emailLogin: '#BD2026',
  phoneLogin: '#6AC2A7',
  green: '#3F7A63',
  pink: '#F29089',
  iqGrayText: '#C4C4C4',
  iqGrayDark: '#979797',
  iqGray: '#D8D8D8',
  iqGreen: '#3F7A63',
  iqPink: '#F29089',
  iqWhite: '#FFFFFF',
  iqBlack: '#000000',
};
export const fontSizes = {
  tiny: 12,
  small: 14,
  normal: 16,
  medium: 18,
  large: 24,
  big: 32,
  huge: 48,
};
export const fontWeights = {
  bold: '700',
  medium: '600',
  normal: '400',
  light: '200',
};
export const spaces = {
  tiny: 4,
  small: 8,
  default: 12,
  medium: 16,
  large: 24,
  big: 32,
  extraBig: 48,
  huge: 64,
};

export const containerStyles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
  },
  containerGrayFullWidth: {
    width: '100%',
    backgroundColor: colors.grayLight,
  },
  containerFullScreen: {
    width: '100%',
    height: '100%',
    padding: spaces.default,
  },
  containerGrayFullScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.iqGray,
    padding: spaces.default,
  },
  containerTansparentMB10: {
    flex: 1,
    marginBottom: spaces.default,
  },
  containerWhiteMV10: {
    marginVertical: spaces.default,
    backgroundColor: colors.iqWhite,
  },
  containerWhiteMB10: {
    marginBottom: spaces.default,
    backgroundColor: colors.iqWhite,
  },
  containerWhitePadding10: {
    padding: spaces.default,
    backgroundColor: colors.iqWhite,
  },
  containerWhiteM10Flex: {
    margin: spaces.default,
    backgroundColor: colors.iqWhite,
    flex: 1,
  },
});

export default StyleSheet.create({
  center: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  left: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  directionRow: {
    flexDirection: 'row',
  },
  flexDirectionRow: {
    flexDirection: 'row',
    flex: 1,
  },
  marginTop10: {
    marginTop: spaces.default,
  },
  paddingTopSmall: {
    paddingTop: spaces.small,
  },
  paddingTop10: {
    paddingTop: spaces.default,
  },
  paddingTop40: {
    paddingTop: 40,
  },
  paddingRight5: {
    paddingRight: 5,
  },
  paddingLeft5: {
    paddingLeft: 5,
  },
  padding10: {
    padding: spaces.default,
  },
  whiteBackground: {
    backgroundColor: colors.iqWhite,
  },
  grayBackground: {
    backgroundColor: colors.iqGray,
  },
  padding10WithoutTop: {
    paddingLeft: spaces.default,
    paddingRight: spaces.default,
    paddingBottom: spaces.default,
  },
  errorBlock: {
    backgroundColor: colors.pink,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  errorText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.iqBlack,
    fontSize: fontSizes.normal,
  },
  textTitle: {
    fontSize: fontSizes.medium,
    color: colors.iqGreen,
    fontWeight: fontWeights.medium,
  },
  textTitleWhite: {
    fontSize: fontSizes.large,
    color: colors.iqWhite,
    fontWeight: fontWeights.medium,
    textAlign: 'center',
    paddingTop: 10,
  },
  blockBack: {
    backgroundColor: colors.iqWhite,
    width: '100%',
    height: 63,
    paddingVertical: 22,
  },
  inputWrap: {
    flex: 1,
  },
  headerTitle: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: fontSizes.small,
    color: colors.green,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    height: '100%',
  },
  adsBlock: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.iqWhite,
    paddingVertical: 5,
    borderRadius: 15,
    marginVertical: 10,
  },
  adsBlock2: {
    alignItems: 'center',
    backgroundColor: colors.iqWhite,
    paddingVertical: 5,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
