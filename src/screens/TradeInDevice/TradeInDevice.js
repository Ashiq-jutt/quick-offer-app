import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './style';
import {Back, BackIconBlue} from '../../assets/svg/TradeIn';
import Text from '../../components/Text';
import {Picker} from '@react-native-picker/picker';
import {Button} from '../../components';
const TradeInDevice = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Back />
        <Text style={{marginLeft: 70}} title2>
          {'1/5  Your Device'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerLine1}></View>
        <View style={styles.headerLine2}></View>
      </View>
      <View style={styles.form}>
        <View style={styles.dropdown}>
          <Text title3>{'What brand is your smart phone?'}</Text>
          <View style={styles.dropView}>
            <Text title10>{'please select anyone'}</Text>

            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Apple" value="java" />
              <Picker.Item label="Oppo" value="js" />
            </Picker>
          </View>
        </View>

        <View style={styles.dropdown}>
          <Text title3>{'What is the exact modal'}</Text>
          <View style={styles.dropView}>
            <Text title10>{'Modal'}</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="IPhone 14" value="java" />
              <Picker.Item label="Oppo f-21" value="js" />
            </Picker>
          </View>
        </View>

        <View style={styles.dropDown}>
          <Text title3>{'What is the Storage capacity'}</Text>
          <View style={styles.dropView}>
            <Text title10>{' Storage capacity'}</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="IPhone 14" value="java" />
              <Picker.Item label="Oppo f-21" value="js" />
            </Picker>
          </View>
        </View>

        <Button
          text="Next"
          onPress={() => {
            navigation.navigate('TradeInCareer');
          }}
          style={{backgroundColor: '#3C63EE', marginVertical: 20}}
        />
      </View>
      <Text title2>{'Details :'}</Text>
      <View style={styles.details}>
        <Text>{'Model'}</Text>
        <Text>{'I Phone 14'}</Text>
      </View>
      <View style={styles.details}>
        <Text>{'Storage'}</Text>
        <Text>{'128 gb'}</Text>
      </View>
      <View
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
      </View>
    </ScrollView>
  );
};
export default TradeInDevice;
