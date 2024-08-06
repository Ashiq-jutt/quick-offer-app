import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 15,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {alignSelf: 'center', marginLeft: 15},
  body: {marginTop: 20,flex:1},

  rw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {position:'absolute',
  bottom:0,
    width: '100%',
    backgroundColor: 'blue',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end',
    backgroundColor:"#3C63EE"
  },
  line:{
    width:'100%',
    borderTopWidth:0.2,borderColor:'lightgray',marginVertical:10
  }
});
export {styles};
