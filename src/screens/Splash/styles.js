import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BaseColor.primary,
  },
  borderDown: {
    width: '40%',
    height: responsiveHeight(5),
    backgroundColor: BaseColor.whiteColor,
    alignSelf: 'center',
    marginBottom: responsiveHeight(8),
    borderRadius: responsiveWidth(3),
  },
  image: {height: responsiveHeight(50), width: responsiveWidth(309)},
  imageView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
