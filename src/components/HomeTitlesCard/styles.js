import {StyleSheet} from 'react-native';
import {responsiveHeight} from '../../utils/responsiveness';

export default StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(15),
    alignItems:'center'
  },
});
