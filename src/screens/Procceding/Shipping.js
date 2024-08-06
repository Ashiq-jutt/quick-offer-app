//import liraries
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {Button, Icon, Icons, TextInput} from '../../components';
import {BaseColor} from '../../config/theme';
import {line1} from '../../assets/images';
import PhoneInput from 'react-native-phone-number-input';
import {CART} from '../../navigation/routes';
import { CheckBox } from '../../assets/svg/Category';

// create a component
const Shipping = ({navigation}) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [address, setaddress] = useState('');
  const [value, setValue] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  const goToPayment = () => {
    navigation.navigate(CART.PAYMENT);
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
              <Text style={styles.yourCart}>1/3 Shipping</Text>
            </TouchableOpacity>
          </View>

          {/* <Image source={line1} style={styles.line1} /> */}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.blueLine}></View>
          <View style={styles.GrayLine}></View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Text style={{color: BaseColor.blackColor, fontSize: 18}}>
            Shipping address
          </Text>

          <View style={styles.inputCard}>
            <TextInput
              title={`First Name`}
              placeholder="jhone"
              onChangeText={setFname}
              value={fname}
            />
          </View>

          <View style={styles.inputCard}>
            <TextInput
              title={`Last name`}
              placeholder="Due"
              onChangeText={setLname}
              value={lname}
            />
          </View>

          {/* <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            placeholder={'Phone Number'}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme={false}
            withShadow
            containerStyle={[styles.inputCard3]}
            textContainerStyle={{backgroundColor: 'white'}}
          /> */}

          <Text style={{color: BaseColor.primary, marginTop: 20}}>
            + Add Company name & address
          </Text>
          <View style={styles.inputCard}>
            <TextInput
              placeholder="address (number and name)"
              placeholderTextColor={BaseColor.textGrey}
              style={styles.inpute}
              onChangeText={setaddress}
              value={address}
            />
          </View>

          <Text style={{color: BaseColor.primary, marginTop: 10}}>
            + Add apartment, suite, etc.
          </Text>
          <View style={styles.flex}>
            <View style={[styles.inputCard2]}>
              <TextInput
                placeholder="Zip code"
                placeholderTextColor={BaseColor.textGrey}
                onChangeText={setZip}
                value={zip}
              />
            </View>
            <View style={[styles.inputCard2]}>
              <TextInput
                placeholder="City"
                placeholderTextColor={BaseColor.textGrey}
                onChangeText={setCity}
                value={city}
              />
            </View>
          </View>

          <View style={styles.inputCard}>
            <TextInput
              placeholder="State/Province/Region"
              placeholderTextColor={BaseColor.textGrey}
            />
          </View>
          <View style={styles.inputCard}>
            <TextInput
              placeholder="Select country"
              placeholderTextColor={BaseColor.textGrey}
            />
          </View>

          <Text style={{color: BaseColor.textGrey, marginTop: 20}}>
            Just in case we need to reach you about delivery.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <CheckBox />
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>
              Same Billing Address
            </Text>
          </View>
          <Button
            style={styles.btn}
            onPress={goToPayment}
            text={'Next'}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default Shipping;
