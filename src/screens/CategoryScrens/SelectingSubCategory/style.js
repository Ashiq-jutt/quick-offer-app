import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  main: {
    flex: 1,
     
    marginVertical: 20,
  },
  header: {
    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {alignSelf: 'center', marginLeft: 15},
  body: {margin:15,marginBottom:100 },
  heading: {
    marginTop: 15,
     
  },
  button: {
    paddingVertical:10,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
    marginVertical: 20,
    shadowColor: 'black',
    borderRadius:5,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -5 }, // Shadow moves upward
    shadowOpacity: 0.2,
    shadowRadius: 5,
     
    
  },
  box: {
    width: '98%',
    backgroundColor: 'white',
    justifyContent: 'center',
     
    padding: 20,
     
    borderRadius:10,
    elevation:2,
    borderBottomWidth:3,
   
    shadowColor:'gray',
    borderRightWidth:2,borderColor:'lightgray'
  },
  rw: {
    flexDirection: 'row',
  },
  icon:{alignSelf:'center', },
  line:{
borderTopWidth:1,borderColor:'black',width:'100%'
  }
});
export {styles};
