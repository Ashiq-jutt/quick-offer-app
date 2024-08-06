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
    backgroundColor: BaseColor.backgroundWhite,
  },
  header: {
    width: wp(90),
    height: hp(7),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  shareHeart: {
    flexDirection: 'row',
  },
  slider: {
    width: wp(90),
    alignSelf: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tv: {
    width: wp(49),
    height: hp(30),
    alignSelf: 'center ',
  },
  sheet: {
    width: wp(100),
    height: hp(100),

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  overView: {
    width: wp(90),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    borderColor: 'lightgray',
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 0.2,
  },
  pDetail: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  condtiopn: {
    fontSize: 16,
  },
  smallView: {
    marginTop: 20,
  },
  threeView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp(90),
    alignSelf: 'center',
  },
  choice: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: 20,
  },
  btndevice: {
  
    alignItems: 'center',
    width: '90%',
    borderWidth: 0.3,
    borderColor: 'lightgray',
    margin: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  rw: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
