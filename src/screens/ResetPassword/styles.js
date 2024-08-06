import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BaseColor.backgroundWhite,
  },
  borderDown: {
    width: '40%',
    height: responsiveHeight(5),
    backgroundColor: BaseColor.primary,
    alignSelf: 'center',
    marginBottom: responsiveHeight(8),
    borderRadius: responsiveWidth(3),
  },
  image: {height: responsiveHeight(166), width: responsiveWidth(225)},
  imageView: {
    alignSelf: 'center',
    marginTop: responsiveHeight(40),
    marginBottom: responsiveHeight(20),
  },
  main: {flex: 1, paddingHorizontal: responsiveWidth(12)},
  email: {marginTop: responsiveHeight(30), marginBottom: responsiveHeight(10)},
  backBtn: {
    height: 45,
    width: 45,
    backgroundColor: BaseColor.lightGrey,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 12,
  },
});
