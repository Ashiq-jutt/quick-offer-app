import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BaseColor.whiteColor,
  },
  main: {paddingHorizontal: responsiveWidth(12)},
  searchBar: {marginVertical: responsiveHeight(15)},
  itemsView: {marginTop: responsiveHeight(20)},
});
