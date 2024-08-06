import {StyleSheet, Platform} from 'react-native';
import {FontWeight} from '../../config/typography';
import {BaseColor} from '../../config/theme';
import {
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveness';

export default StyleSheet.create({
  headerTitle: {
    fontSize: responsiveFont(24),
    fontWeight: FontWeight.bold,
    color: BaseColor.whiteColor,
  },
  header: {
    backgroundColor: BaseColor.primary,
  },
  headerIconMobile: {
    height: responsiveFont(24),
    width: responsiveWidth(105),
  },
  headerIconWeb: {
    height: responsiveWidth(32),
    width: responsiveWidth(140.86),
  },
  drawerStyle: {
    width: '100%',
  },
  tabBarStyle: {
    backgroundColor: BaseColor.primary,
  },
  headerLeft: {
    marginLeft: responsiveWidth(24),
  },
  headerRight: {
    marginRight: responsiveWidth(24),
  },
  menuText: {
    // lineHeight: responsiveHeight(20),
    marginBottom: responsiveHeight(10),
  },
  mainDrawerStyle: {width: '100%'},
  drawerSafeArea: {flex: 1, backgroundColor: BaseColor.whiteColor},
  main: {flex: 1},
  headerView: {
    padding: responsiveWidth(20),
    height: responsiveHeight(200),
    backgroundColor: BaseColor.primary,
  },
  itemView: {margin: responsiveWidth(24)},
  itemBtn: {flexDirection: 'row', alignItems: 'center',},
  itemText: {
    marginVertical: responsiveHeight(8),
    marginLeft: responsiveHeight(10),
  },
  seperator: {
    height: responsiveHeight(1),
    backgroundColor: BaseColor.primary,
    marginVertical: responsiveHeight(20),
  },
});
