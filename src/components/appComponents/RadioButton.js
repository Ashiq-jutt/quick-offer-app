import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioEmpty, RadioFill} from '../../assets/svg/TradeIn';
 
const RadioButton = ({desccription, label, check}) => {
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        {check ? (
          <TouchableOpacity>
            <RadioFill />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <RadioEmpty />
          </TouchableOpacity>
        )}

        <Text>{label}</Text>
      </View>
      <View style={styles.desc}>
        <Text>
       {desccription}
        </Text>
      </View>
    </View>
  );
};
export default RadioButton;
const styles = StyleSheet.create({
  main: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginVertical:10,
    backgroundColor:'white'
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    marginHorizontal: 32,
  },
});
