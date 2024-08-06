import {StyleSheet} from 'react-native';
import {BaseColor} from '../../../config/theme';
import {responsiveHeight} from '../../../utils/responsiveness';

export default StyleSheet.create({
  main: {
    height: responsiveHeight(74),
    backgroundColor: BaseColor.primary,
  },
  focusedTab: {
    backgroundColor: BaseColor.primary,
    height: 40,
    width: 40,
    borderRadius: 25,
    bottom:20,
    borderWidth:2,
    borderColor:BaseColor.whiteColor,
    padding:5
  },
});
