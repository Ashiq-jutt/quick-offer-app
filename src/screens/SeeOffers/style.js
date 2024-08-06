import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 15,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  headerLine2: {
    height: 3,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  form: {
    marginVertical: 10,padding:10
  },
  dropdown: {
    marginVertical: 10,
  },
  dropView: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginVertical: 5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.3,
    backgroundColor:'white',
    padding:15
  },
  btn1: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#3C63EE',
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '30%',
    height: 48,
    justifyContent:'center',alignItems:"center",
    borderRadius:10
  },
  btn2: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '30%',
    height: 48,
    justifyContent:'center',alignItems:"center",
    borderRadius:10
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical:10
  },
});
export {styles};
