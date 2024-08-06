import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginBottom: 60,
  },
  upper: {
    width: '100%',
    padding: 20,
    backgroundColor: 'thistle',
  },
  lower: {
    padding: 10,
    marginVertical: 10,
  },
  renderTradeIn: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnView: {
    width: '100%',
 
    position: 'absolute',
    bottom: 2,
    alignSelf: 'center',
    justifyContent: 'center',
 padding:10,
    borderWidth: 0.5,
    borderColor: 'lightgray',

    marginVertical: 20,
  },
  btn: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  txt: {
    color: 'white',
  },
});
export {styles};
