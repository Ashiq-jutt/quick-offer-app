import {StyleSheet} from 'react-native';

import {responsiveHeight, responsiveWidth} from '../utils/responsiveness';

/**
 * Common basic style defines
 */
export const BaseStyle = StyleSheet.create({
  textInput: {
    height: responsiveHeight(60),
    borderRadius: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(10),
    width: '100%',
    justifyContent: 'space-between',
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(16),
  },
});
