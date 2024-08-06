import {StyleSheet} from 'react-native';
import {responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export const styles = StyleSheet.create({
  columWrapper: {
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(10),
  },
  btnCondtition: {
    paddingVertical: 10,
    width: 105,
    borderRadius: 5,
    backgroundColor: BaseColor.whiteColor,
    borderColor: 'gray',
  },
  firstView: {
    marginTop: 24,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondView: {
    marginBottom: 23,
  },
  tInput: {
    marginBottom: 14,
  },
  loginBtn: {
    borderRadius: 5,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  loginBtnTxt: {
    fontWeight: '800',
    fontSize: 18,
  },
  thirdView: {
    marginTop: 10,
  },
  fpTxt: {},
  lastTxt: {
    marginBottom: 15,
  },
  liveChatTxt: {
    fontWeight: '800',
    fontSize: 14,
  },
  liveChatBtn: {
    width: 104,
    height: 30,
    borderRadius: 5,
    marginTop: 17,
  },
  image: {
    height: 54,
    width: '60%',
  },
  lastView: {
    marginBottom: 15,
  },
  createAccountBtn: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeBtn: {
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  boxContainer: {
    borderRadius: 6,
    paddingBottom: 100,
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: 7,
    marginBottom: 14,
  },
  horizontalStyle: {
    marginHorizontal: 16,
  },
});
