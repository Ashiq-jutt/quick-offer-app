//import liraries
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import styles from './styles';
import {Button, Icon, Icons} from '../../components';
import {BaseColor} from '../../config/theme';
import {
  cardicon,
  checkRadio,
  expi,
  line1,
  lock,
  person,
  visa,
} from '../../assets/images';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Text from '../../components/Text';
import {CART} from '../../navigation/routes';
import { CheckBox, RadioEmpty } from '../../assets/svg/Category';

// create a component
const Payment = ({navigation}) => {
  const onConfirm = () => {
    navigation.navigate(CART.PAY_SUCCESS);
  };
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header}>
        <View style={styles.upper}>
          <View style={styles.shareHeart}>
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
            <TouchableOpacity>
              <Text style={styles.yourCart}>2/3 Shipping</Text>
            </TouchableOpacity>
          </View>

          {/* <Image source={line1} style={styles.line1} /> */}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.blueLine2}></View>
          <View style={styles.GrayLine2}></View>
        </View>
      </View>
      <View style={styles.card}>
        <Text blackColor style={{fontSize: 18}}>
          Choose payment method
        </Text>
        <View style={[styles.visa, {marginBottom: 30}]}>
          <View style={styles.ditCard}>
            <Image source={checkRadio} style={{width: 25, height: 25}} />
            <Text textGrey style={{marginHorizontal: 5}}>
              Credit or debit card
            </Text>
          </View>
          <Image
            source={visa}
            style={{width: 100, height: 25, marginTop: 20}}
          />
        </View>

        <View style={styles.inputCard4}>
          <TextInput
            placeholder="Card Number"
            style={[styles.inpute, {width: widthPercentageToDP(70)}]}
            placeholderTextColor={'grey'}
          />
          <Image source={cardicon} style={{width: 30, height: 25}} />
        </View>

        <View style={[styles.flex, {marginTop: 10}]}>
          <View
            style={[
              styles.inputCard2,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextInput
              placeholder="Expire..."
              placeholderTextColor={BaseColor.textGrey}
              style={[styles.inpute, {width: widthPercentageToDP(25)}]}
            />
            <Image source={expi} style={{width: 30, height: 27}} />
          </View>
          <View
            style={[
              styles.inputCard2,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextInput
              placeholder="CSV"
              placeholderTextColor={BaseColor.textGrey}
              style={[styles.inpute, {width: widthPercentageToDP(25)}]}
            />
            <Image source={lock} style={{width: 30, height: 27}} />
          </View>
        </View>
        <View style={styles.inputCard4}>
          <TextInput
            placeholder="Card holder"
            style={{width: widthPercentageToDP(70)}}
            placeholderTextColor={'grey'}
          />
          <Image source={person} style={{width: 30, height: 27}} />
        </View>
        <Text textAlign="right" textGrey style={{marginVertical: 10}}>
          {'what is this cvv?'}
        </Text>

        <View style={styles.paymentMethod}>
          <View style={styles.rw}>
            <RadioEmpty />
            <Text textGrey style={{marginHorizontal: 5}}>
              {'PayPal'}
            </Text>
          </View>
          <View style={styles.rw}>
            <RadioEmpty />
            <Text textGrey style={{marginHorizontal: 5}}>
              {'withdraw'}
            </Text>
          </View>
          <View style={styles.rw}>
            <RadioEmpty />
            <Text textGrey style={{marginHorizontal: 5}}>
              {'Cash'}
            </Text>
          </View>
        </View>
        <Button
          style={styles.btn}
          text={'Confirm and pay'}
          onPress={onConfirm}></Button>
      </View>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default Payment;
