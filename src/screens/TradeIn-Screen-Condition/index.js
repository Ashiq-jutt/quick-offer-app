import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Back, BackIconBlue} from '../../assets/svg/TradeIn';
import Text from '../../components/Text';
import {Button} from '../../components';
import RadioButtonRN from 'radio-buttons-react-native';
import RadioButton from '../../components/appComponents/RadioButton';

const TradeInCondition = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const data = [
    {
      label: 'Unlocked ',
      data: 'abvfas',
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
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Back />
        <Text style={{marginLeft: 70}} title2>
          {'3/5 Screen Condition'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerLine1}></View>
        <View style={styles.headerLine2}></View>
      </View>
      <View style={styles.form}>
        <Text title3>{'How Does the Screen Look?'}</Text>

        <RadioButton
          label={'used'}
          desccription={
            'Has one or more cracks and may or may not be 100% functional. Note a screen that is 100% functional has no defective pixels (e.g. ghost touch, screen burn-in, dead pixels) and the touchscreen works.'
          }
          check={true}
        />
        <RadioButton
          label={'cracked'}
          desccription={
            'Has one or more cracks and may or may not be 100% functional. Note a screen that is 100% functional has no defective pixels (e.g. ghost touch, screen burn-in, dead pixels) and the touchscreen works.'
          }
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TradeInSides');
        }}>
        <Text title2>{'Details :'}</Text>
      </TouchableOpacity>
      <View style={{marginTop: 15}}>
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
        <View style={styles.details}>
          <Text>{'Screen'}</Text>
          <Text>{'UnLocked'}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <BackIconBlue />
        <Text title4 style={{marginHorizontal: 10, color: '#3C63EE'}}>
          {'Back'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default TradeInCondition;
