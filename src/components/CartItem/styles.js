import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
    height: responsiveHeight(100),
    padding: responsiveWidth(10),
    alignItems: 'center',
    marginBottom: responsiveWidth(10),
  },
  imageView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: responsiveHeight(80),
    width: responsiveWidth(76),
  },
  discrip: {flex: 0.5},
  btnView: {flex: 0.2, alignItems: 'center'},
  btn: {
    backgroundColor: BaseColor.primary,
    height: responsiveHeight(33),
    width: responsiveWidth(33),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
