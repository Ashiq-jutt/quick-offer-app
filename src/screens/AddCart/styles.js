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
    
  },
  header: {
    width: wp(90),
    height: hp(7),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical:10
  },
  shareHeart: {
    flexDirection: 'row',
  },
  yourCart: {
    fontSize: 19,
  },
  card: {
    width: wp(90),
    backgroundColor: BaseColor.whiteColor,
    paddingVertical: 20,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    elevation: 5,
  },
  img: {
    width: '100%',
    height: 70,

    alignSelf: 'center',
  },
  innerCard: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  innerFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(50),
    backgroundColor: 'pink',
  },
  card2: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btn: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    position:"absolute",
    bottom:5
  },
  card3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  card4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardNew: {
    flexDirection: 'row',

    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    padding: 10,
  },
  imgView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  dataView: {
    flex: 5,

    padding: 10,
  },
  priceRow: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  count: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  belowData: {
    padding: 10,
    
    
  },
  rw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:5
  },
});
