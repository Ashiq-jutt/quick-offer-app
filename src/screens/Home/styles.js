import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BaseColor.whiteColor,
  },
  scrolView: {paddingHorizontal: 12},
  searchView: {marginVertical: 20},
  sliderView: {},
  bestSellingView: {},
  bestSellingSlider: {},
  latestView: {},
  latestSlider: {},
  columWrapper: {
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(20),
  },
  banner: {
    width: '100%',
    backgroundColor: '#FFBA49',
     
    borderRadius: 10,
    padding:20,
elevation:5,marginVertical:5
  },
  mobile:{
    alignSelf:'center',
    marginVertical:20
  },
  button:{
    backgroundColor:'white',
    padding:20,alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginVertical:20,
    borderRadius:10,
    
  }
});
