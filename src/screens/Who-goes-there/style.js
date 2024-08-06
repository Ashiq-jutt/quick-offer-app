import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 15, 
    justifyContent:'center'
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
body:{
  justifyContent:'center',alignItems:'center',flex:1, 
},
headerLine1: {
  height: 3,
  width: '45%',
  backgroundColor: '#3C63EE',
},
headerLine2: {
  height: 3,
  width: '45%',
  backgroundColor: 'lightgray',
},
btnNext:{
  width: '100%', shadowColor:'#D32626',elevation:5,shadowOpacity:'70%'
}
 
  
  
   
});
export {styles};
