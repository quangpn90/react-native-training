import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  main: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding.lg
  },

  errorMessage: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.small,
    color: Colors.textRed
  },

  forgotPasswordWrap: {
    marginTop: Metrics.margin.xxl,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: Metrics.margin.lg
  },

  forgotPassword: {
    fontFamily: 'Inter_400Regular',
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    color: Colors.textRed
  },

  rememberMeWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.margin.lg
  },

  rememberMeText: {
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    fontSize: Fonts.size.small,
    lineHeight: Fonts.lineHeight.xs,
    color: Colors.textBlack
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  footerTextWrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Metrics.margin.lg,
    marginBottom: Metrics.margin.xl
  },

  condition: {
    textAlign: 'center',
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
    fontSize: Fonts.size.small,
    lineHeight: Fonts.lineHeight.sm
  },

  Term: {
    color: Colors.textBlack,
    fontFamily: Fonts.fontFamily.Inter_500Medium
  }
});

export default styles;
