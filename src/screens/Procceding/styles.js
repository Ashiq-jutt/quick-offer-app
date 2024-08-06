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
    width: '100%',

    alignSelf: 'center',
  
    padding: 10,
  },
  blueLine: {
    backgroundColor: BaseColor.primary,
    height: 2,
    marginVertical: 10,
    width: '33%',
  },
  blueLine2: {
    backgroundColor: BaseColor.primary,
    height: 2,
    marginVertical: 10,
    width: '66%',
  },
  upper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  GrayLine:{
    backgroundColor: 'lightgray',
    height: 2,
    marginVertical: 10,
    width: '67%',
  },
  GrayLine2:{
    backgroundColor: 'lightgray',
    height: 2,
    marginVertical: 10,
    width: '34%',
  },
  shareHeart: {
    flexDirection: 'row',
    width: wp(60),
    justifyContent: 'space-between',
  },
  yourCart: {
    fontSize: 19,
    color: BaseColor.blackColor,
  },
  line1: {
    width: wp(90),
    height: 7,
    marginTop: 20,
  },
  card: {
    width: wp(90),
    paddingVertical: 10,
    alignSelf: 'center',
  },
  inputCard: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: BaseColor.textGrey,
    borderRadius:5
  },
  inpute: {},
  inputCard2: {
    width: wp(40),
    marginTop: 10,
    borderWidth: 1,
    borderColor: BaseColor.textGrey,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: wp(90),
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputCard3: {
    width: wp(90),
    backgroundColor: BaseColor.whiteColor,
    marginTop: 10,
    paddingHorizontal: 10,
    height: hp(10),
    borderWidth: 1,
    borderColor: BaseColor.textGrey,
  },
  visa: {
    width: wp(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ditCard: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems:"center"
  },
  inputCard4: {
    width: wp(90),
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BaseColor.textGrey,
  },
  paymentMethod:{

  },
  rw:{
    flexDirection:"row",alignItems:'center'
  }
});
