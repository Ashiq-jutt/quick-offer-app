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
  main: {
    flex: 1,
    paddingHorizontal: responsiveWidth(12),
    marginTop: responsiveHeight(20),
  },
  email: {marginBottom: responsiveHeight(10)},
  name: {
    marginTop: responsiveHeight(30),
    marginBottom: responsiveHeight(10),
  },
  password: {marginBottom: responsiveHeight(10)},
  createView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  createBtn: {marginLeft: 5},
});
