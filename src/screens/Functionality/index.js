import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Back, BackIconBlue} from '../../assets/svg/TradeIn';
import Text from '../../components/Text';
import {Button} from '../../components';
import RadioButtonRN from 'radio-buttons-react-native';
import RadioButton from '../../components/appComponents/RadioButton';

const Function = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const data = [
    {
      label: 'yes',
    },
    {
      label: 'No',
    },
  ];

  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Back />
        <Text style={{marginLeft: 70}} title2>
          {'5/5  Functionality'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerLine1}></View>
        <View style={styles.headerLine2}></View>
      </View>
      <View style={styles.form}>
        <Text title3>{'is it Functional?'}</Text>
        <Text title5 textGrey>
          {
            'The device turns on, turns off, and charges. It has a battery, case, and SIM drawer The front and rear cameras work perfectly. The speakers and microphones work perfAll other features incl sconnected whether your item is functional or not. We dont accept bent and/or oxidized items.'
          }
        </Text>
      </View>
      <View style={styles.dropdown}>
         
        <RadioButtonRN data={data} selectedBtn={e => console.log(e)} />
      </View>
      <Button text={'See the Offer'} onPress={()=>navigation.navigate('SeeOffers')}/>
    </ScrollView>
  );
};
export default Function;
