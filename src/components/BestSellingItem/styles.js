import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';

export default StyleSheet.create({
  main: {
    width: responsiveWidth(119),
    marginHorizontal:5,
    backgroundColor:'#F9F9F9',
    marginVertical:5,
    padding:20,
    borderRadius:6,
    shadowColor:'gray',
    elevation:3,
    


  },
  imageView: {alignItems: 'center'},
  image: {
    height: 98,
    width: 85,
    borderRadius: 4,
  },
});
