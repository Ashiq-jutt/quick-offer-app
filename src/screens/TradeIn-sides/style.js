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
     
    alignItems:'center',
    justifyContent:'space-between'
  },
  headerLine1: {
    height: 3,
    width: '80%',
    backgroundColor: '#3C63EE',
  },
  headerLine2: {
    height: 3,
    width: '80%',
    backgroundColor: 'lightgray',
  },
  form: {
    marginVertical: 30,
  },
  dropdown:{
    marginVertical:10,
  },
  dropView:{
    borderWidth:1,borderColor:'gray',padding:5,marginVertical:5
  },
  details:{
    flexDirection:'row',justifyContent:'space-between',marginVertical:0.3,padding:15,backgroundColor:"white"
  }
});
export {styles};
