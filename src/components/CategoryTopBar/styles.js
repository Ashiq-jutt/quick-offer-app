import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  main: {
    width: '100%',
  },
  sliderView: {},
  selectedBtn: {
    borderBottomWidth: responsiveHeight(2),
    borderBottomColor: BaseColor.primary,
    padding: responsiveWidth(10),
  },
  notSelectedBtn: {padding: responsiveWidth(10)},
});
