import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';
import { MenuTabIcon, ProfileTabIcon } from '../../assets/svg';
import { Temp } from '../../assets/svg/TradeIn';

const TradeInCash = ({logo,title,desc}) => {
  return(
<View style={styles.main}>
  <View style={{marginHorizontal:5}}>
  <Temp/>
  </View>
 <View  style={{marginHorizontal:10}}>
    <Text title5 semibold>{title}</Text>
    <Text>{desc}</Text>
 </View>
</View>
  ) 
};
export default TradeInCash;

const styles=StyleSheet.create({
    main:{
        width:'90%',flexDirection:'row',alignItems:'center',marginVertical:10,paddingVertical:10,
         
    },
})
