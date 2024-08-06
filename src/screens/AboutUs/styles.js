import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BaseColor.whiteColor,
  },
  main: {paddingHorizontal: responsiveWidth(12)},
  card: {marginTop: 20},
});
