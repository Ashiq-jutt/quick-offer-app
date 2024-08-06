import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {phone, tv} from '../../assets/images';
import {BackNew, Dropdown} from '../../assets/svg/Category';
import {Button} from '../../components';
import Text from '../../components/Text';
import {BaseColor} from '../../config/theme';
import styles from './styles';
import {CART} from '../../navigation/routes';

const Index = ({navigation}) => {
  const [cartData, setCartData] = useState([]);
  let [condition, setcondition] = useState([
    {
      id: 1,
      text: 'iPhone 11',
      brand: 'Apple',
      Color: 'Balck',
      Storage: '128Gb',
      price: '$250.00',
      rate: '(10)',
      path: phone,
    },
    {
      id: 2,
      text: 'MacBook Air',
      brand: 'Mac',
      Color: 'Balck',
      Storage: '128Gb',
      price: '$250.00',
      rate: '(0)',
      path: tv,
    },
  ]);
  useEffect(() => {
    const handleAddToCart = async () => {
      try {
        const existingProducts = await AsyncStorage.getItem('savedProducts');
        const parsedExistingProducts = JSON.parse(existingProducts) || [];
        setCartData(parsedExistingProducts);
      } catch (error) {
        console.error('Error adding product to the cart:', error);
      }
    };
    handleAddToCart();
  }, []);

  const onPress = async item => {
    navigation.navigate(CART.SHIPPING);
  };
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={BaseColor.whiteColor}
        translucent={false}
      />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}>
            <BackNew />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.yourCart}>Your Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10}}>
          <FlatList
            data={cartData}
            renderItem={({item}) => {
              return (
                <View style={styles.cardNew}>
                  <View style={styles.imgView}>
                    <Image
                      source={tv}
                      style={styles.img}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.dataView}>
                    <Text semibold>{item?.product?.name + '-' + 'Black'}</Text>
                    <Text style={{marginVertical: 3}}>
                      {item?.fair
                        ? 'Fair'
                        : item?.good
                        ? 'Good'
                        : item?.excellent
                        ? 'Excellent'
                        : ''}
                    </Text>
                    <Text>{'comes with : ' + item?.product?.come_with}</Text>
                    <View style={styles.priceRow}>
                      <Text style={{marginVertical: 3}} bold>
                        {'$' + item?.product?.price + '.00'}
                      </Text>
                      <TouchableOpacity style={styles.count}>
                        <Text bold>{item?.lowest?.quantity}</Text>
                        <Dropdown style={{marginHorizontal: 10}} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        {cartData?.length > 0 ? (
          <View style={styles.belowData}>
            <View style={styles.rw}>
              <Text>{'SubTotal'}</Text>
              <Text>{'$239.25'}</Text>
            </View>
            <View style={styles.rw}>
              <Text>{'Quality Assurance Fee'}</Text>
              <Text>{'$3.99'}</Text>
            </View>
            <View style={styles.rw}>
              <Text bold>{'Total'}</Text>
              <Text bold>{'$243.24'}</Text>
            </View>
          </View>
        ) : (
          <Text style={{alignSelf: 'center', color: 'red'}}>
            no cart here to display
          </Text>
        )}
        <Button
          style={styles.btn}
          disabled={cartData?.length === 0}
          onPress={onPress}
          text={'Proceed to checkout'}
        />
      </SafeAreaView>
    </>
  );
};

export default Index;
