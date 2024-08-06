import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  main: {
    // height: responsiveHeight(130),
    width: responsiveWidth(285),
    borderRadius: responsiveWidth(15),
    padding: responsiveWidth(20),
    marginHorizontal: 5,
  },
  shopNowBtn: {
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseColor.whiteColor,
    borderRadius: responsiveWidth(10),
    // height: responsiveHeight(38),
    marginRight: responsiveHeight(10),
  },
  imageView: {},
  image: {
    height: responsiveHeight(80),
    width: responsiveWidth(140),
  },
});
