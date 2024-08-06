import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  main: {
     
    width:'48.5%',
    backgroundColor: '#F9F9F9',
     elevation:2,
    borderColor: BaseColor.textGrey,
    borderRadius: responsiveWidth(8),
    padding: responsiveWidth(20),
  },
  imageView: {alignItems: 'center'},
  image: {
    height: responsiveHeight(110),
    width: responsiveWidth(105),
    borderRadius: responsiveWidth(15),
  },
  detailView: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
