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
  image: {height: responsiveHeight(150), width: responsiveWidth(160)},
  imageView: {},
  main: {flex: 1, justifyContent: 'center', paddingHorizontal: 12},
  email: {marginTop: 30, marginBottom: 10},
  password: {marginBottom: 10},
  rememberMe: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgetText: {marginRight: 5},
  forgetView: {flexDirection: 'row'},
  createView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  createBtn: {marginLeft: 5},
});
