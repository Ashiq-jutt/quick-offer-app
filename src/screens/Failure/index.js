import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {BaseColor} from '../../config/theme';
import Text from '../../components/Text';

import {Button, Icon, Icons} from '../../components';
import styles from './styles';
import {bags} from '../../assets/images';
import {FailureBag} from '../../assets/svg/Category';
import {CART} from '../../navigation/routes';

const Index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.content}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={BaseColor.whiteColor}
        translucent={false}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <Icon
            name={Icons.ARROW_BACK}
            type={'MaterialCommunity'}
            size={28}
            color={BaseColor.text}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}>
        <FailureBag />
        <Text
          blackColor
          bold
          title2
          style={{
            marginTop: 20,
          }}>
          Failure!
        </Text>
        <Text
          textGrey
          textAlign={'center'}
          body1
          style={{
            marginTop: 20,
          }}>
          We're sorry, but your payment didn't work. Here is the error message
          that our secure payment system sent us:
        </Text>
      </View>
      <Button
        style={styles.btn}
        onPress={() => navigation.navigate(CART.PAYMENT)}
        text={'Back payment'}></Button>
    </SafeAreaView>
  );
};

export default Index;
