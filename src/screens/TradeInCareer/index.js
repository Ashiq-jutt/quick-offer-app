import React, {useState} from 'react';
import {View,ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Back, BackIconBlue} from '../../assets/svg/TradeIn';
import Text from '../../components/Text';
import {Button} from '../../components';
import RadioButtonRN from 'radio-buttons-react-native';
import { PlusUse, RadioFill } from '../../assets/svg/Category';
const TradeInCareer = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const data = [
    {
      label: 'Unlocked ',
    },
    {
      label: 'At & T',
    },
    {
      label: 'Unlocked ',
    },
    {
      label: 'Varizon',
    },
    {
      label: 'T Mobile',
    },
    {
      label: 'At & T',
    },
  ];

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Back />
        <Text style={{marginLeft: 70}} title2>
          {'2/5  Career'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerLine1}></View>
        <View style={styles.headerLine2}></View>
      </View> 
      <View style={styles.form}>
        <View style={styles.dropdown} >
          <Text title3>
            {'Is your device unlocked or locked to a specific carrier?'}
          </Text>
          <RadioButtonRN data={data} selectedBtn={e => console.log(e)} 
        
          icon={
           
             <RadioFill/> 
          }
          />
        </View>
      </View>
      <TouchableOpacity  onPress={()=>{navigation.navigate('TradeInCondition')}}>
      <Text title2>{'Details :'}</Text>
      </TouchableOpacity>
      <View style={styles.details}>
        <Text>{'Model'}</Text>
        <Text>{'I Phone 14'}</Text>
      </View>
      <View style={styles.details}>
        <Text>{'Storage'}</Text>
        <Text>{'128 gb'}</Text>
      </View>
      <View style={styles.details}>
        <Text>{'Career'}</Text>
        <Text>{'UnLocked'}</Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical:10
        }}
       
        >
          
          <BackIconBlue />
        <Text title4 style={{marginHorizontal: 10, color: '#3C63EE'}}>
          {'Back'}
        </Text>
         
       
      </TouchableOpacity>
    </ScrollView>
  );
};
export default TradeInCareer;
