import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Apple, Back, BackIconBlue, Gmail} from '../../assets/svg/TradeIn';
import Text from '../../components/Text';
import {Button, TextInput} from '../../components';
import RadioButtonRN from 'radio-buttons-react-native';

const WhoGoesThere = ({navigation}) => {
  return (
    <View style={styles.main} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
      <TouchableOpacity style={{borderRadius:20, padding:10,backgroundColor:"white"}}>

        <Back />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text title2>{'Who goes there'}</Text>
        <TextInput placeholder="Gmail" style={{marginVertical:20}}/>
        <Button text={'Next'} style={styles.btnNext} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            justifyContent: 'space-between',
            width: '100%',
          
          }}>
          <View style={styles.headerLine2}></View>

          <Text>OR</Text>
          <View style={styles.headerLine2}></View>
        </View>

        <Text>{'login Your Account With'}</Text>

        <View style={{flexDirection:'row',marginVertical:10}}>
          <Gmail style={{marginHorizontal:10}}/>
          <Apple/>

        </View>
      </View>
    </View>
  );
};

export default WhoGoesThere;
