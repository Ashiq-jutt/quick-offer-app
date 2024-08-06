import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';

export default StyleSheet.create({
  main: {
    width: '48%',
  },
  imageView: {alignItems: 'center'},
  image: {
    height: responsiveHeight(184),
    width: '100%',
    borderRadius: 15,
  },
  data:{
    marginTop:20
  }
});
