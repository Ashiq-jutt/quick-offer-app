import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../utils/responsiveness';
import {BaseColor} from '../../config/theme';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BaseColor.whiteColor,
  },
  main: {
    paddingHorizontal: responsiveWidth(12),
    backgroundColor: BaseColor.lightGrey,
    flex: 1,
  },
  searchBar: {marginVertical: responsiveHeight(15)},
  itemsView: {marginTop: responsiveHeight(20)},
  card1: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: BaseColor.whiteColor,
    marginTop: 20,
    marginBottom: 10,
  },
  card2: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: BaseColor.whiteColor,
    marginBottom: 10,
  },
  edit: {
    position: 'absolute',
    bottom: responsiveHeight(10),
    right: responsiveWidth(10),
    padding: responsiveWidth(8),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    flex: 1,
    marginVertical: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 10,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '93%',
  },
  closeModal: {position: 'absolute', right: 10, top: 10},
  inputView:{
    padding:10
  }
});
