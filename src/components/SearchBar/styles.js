import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  main: {
    width: '100%',
    
  },
  catogory: {
    height: responsiveHeight(60),
    borderColor: BaseColor.primary,
    borderWidth: 1,
    borderRadius: responsiveWidth(35),
    alignItems: 'center',
    flexDirection: 'row',
     
  },
  catogoryInput: {
    flex: 1,
    height: responsiveHeight(60),
    borderTopLeftRadius: responsiveWidth(35),
    borderBottomLeftRadius: responsiveWidth(35),
    borderRadius: 0,
    borderRightWidth: 1,
    borderColor: BaseColor.primary,
    
  },
  catDropdown: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    borderTopRightRadius: responsiveWidth(35),
    borderBottomRightRadius: responsiveWidth(35),
  },
  dropdown: {flex: 0.8},
  arrow: {
    flex: 0.2,
    backgroundColor: BaseColor.primary,
    borderTopRightRadius: responsiveWidth(35),
    borderBottomRightRadius: responsiveWidth(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalSearch: {
    height: responsiveHeight(48),
    borderWidth: 1,
    borderColor: 'lightgray',
    
    overflow: 'hidden', elevation:1,shadowColor:'black'
     
  },
  normalSearchView:{
     padding:2,shadowColor:'#999999',elevation:5,
     shadowOffset: { width: 0, height: 0 },shadowOpacity: 0.3,
     shadowRadius: 5,
     
  }
});
