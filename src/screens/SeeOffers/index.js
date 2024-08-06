import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Back, BackIconBlue} from '../../assets/svg/TradeIn';
import Text from '../../components/Text';
import {Button} from '../../components';
import RadioButtonRN from 'radio-buttons-react-native';
const SeeOffers = ({navigation}) => {
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Back />
      
      
        <Text style={{marginLeft: 70}} title2>
          {'See The Offer'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerLine2}></View>
      </View>
      <View style={styles.form}>
        <Text title3>{'Hey!'}</Text>
        <Text title5 textGrey>
          {
            'We found the best price offered among our partners. The refurbisher is ready to pay: $396.00 for your Apple iPhone 14, 128 GB, unlocked.'
          }
        </Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn2}>
          <Text textGrey>No Thanks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1}>
          <Text whiteColor>Accept</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: 10}}>
        <Text title3>{'Details :'}</Text>
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
          <Text>{'unlock'}</Text>
        </View>
        <View style={styles.details}>
          <Text>{'Screen'}</Text>
          <Text>{'used'}</Text>
        </View>
        <View style={styles.details}>
          <Text>{'Size'}</Text>
          <Text>{'good'}</Text>
        </View>
      </View>

      <View style={{marginVertical: 10}}>
        <Text title4 style={{marginVertical: 5}}>
          {'Next Step :'}
        </Text>
        <Text title5 textGrey>
          {
            'We found the best price offered among our partners. The refurbisher is ready to pay: $396.00 for your Apple iPhone 14, 128 GB, unlocked.'
          }
        </Text>
      </View>
      <View>
        <Text title4  style={{marginVertical: 5}}>
          {'One Last Thing . . .'}
        </Text>
        <Text title5 textGrey>
          {
            'We found the best price offered among our partners. The refurbisher is ready to pay: $396.00 for your Apple iPhone 14, 128 GB, unlocked.'
          }
        </Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn2}>
          <Text textGrey>No Thanks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => {
            console.log('aws');
            navigation.navigate('WhoGoesThere');
          }}>
          <Text whiteColor>Accept</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SeeOffers;
