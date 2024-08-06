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
  header: {
    width: wp(90),
    height: hp(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  card:{
    width:wp(90),height:hp(50),justifyContent:'center',alignItems:'center'
  },
  shareHeart: {
    width:wp(50),height:hp(30),alignSelf:'center'
  },
  btn: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
