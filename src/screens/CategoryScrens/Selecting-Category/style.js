import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsiveness';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 15,
    marginVertical: 20,
  },
  body: {},
  heading: {
    marginTop: 15,
  },
  image: {
    height: responsiveHeight(60),
    width: responsiveWidth(30),
    resizeMode: 'contain',
    borderRadius: responsiveWidth(4),
  },
  button: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  rw: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
export {styles};
