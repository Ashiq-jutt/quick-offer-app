import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Icon, Icons} from '..';
import {BaseColor} from '../../config/theme';
import Text from '../Text';
import {styles} from './styles';

const ProductDetailModal = props => {
  const {
    visible,
    data,
    onSwipeComplete,
    swipeDown = true,
    onBackdropPress = false,
  } = props;

  const [selectCondition, setSelectCondition] = useState(0);
  const [selectStorage, setSelectStorage] = useState(0);
  const [selectColor, setSelectColor] = useState('Black');

  const isProductAlreadyAdded = async productId => {
    try {
      const existingProducts = await AsyncStorage.getItem('savedProducts');
      const parsedExistingProducts = JSON.parse(existingProducts) || [];

      return parsedExistingProducts.some(
        item => item?.product?.id === productId,
      );
    } catch (error) {
      console.error('Error checking if product is already added:', error);
      return false;
    }
  };

  const handleAddToCart = async () => {
    const productId = data?.product?.id;

    // Check if the product is already added to the local storage
    const alreadyAdded = await isProductAlreadyAdded(productId);

    if (alreadyAdded) {
      Alert.alert('Product is already added to the cart!');
    } else {
      try {
        const existingProducts = await AsyncStorage.getItem('savedProducts');
        const parsedExistingProducts = JSON.parse(existingProducts) || [];
        const updatedProducts = [...parsedExistingProducts, data];
        await AsyncStorage.setItem(
          'savedProducts',
          JSON.stringify(updatedProducts),
        );

        Alert.alert('Product added to the cart!');
      } catch (error) {
        console.error('Error adding product to the cart:', error);
      }
    }
  };

  const Line = () => {
    return (
      <View
        style={{
          height: 70,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          borderBottomWidth: 1,
          borderColor: 'lightgray',
        }}>
        <View style={{flex: 0.2}}></View>
        <View style={{flex: 0.6, alignItems: 'center'}}>
          <Text regular body2 bold textGrey>
            {data?.product?.name}
          </Text>
        </View>
        <TouchableOpacity style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Icon name={Icons?.CROSS} size={22} color={BaseColor.textGrey} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      isVisible={visible}
      {...(swipeDown ? {swipeDirection: 'down'} : {})}
      style={styles.bottomModal}
      backdropOpacity={0.5}
      onBackdropPress={() => {
        onBackdropPress && onSwipeComplete();
      }}
      onSwipeComplete={() => onSwipeComplete()}>
      <SafeAreaView
        style={[
          styles.boxContainer,
          {backgroundColor: BaseColor.backgroundWhite},
        ]}>
        {swipeDown === true && <Line />}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalStyle}>
          <View style={[styles.firstView]}>
            <Text regular body2 semibold textGrey>{`Condition`}</Text>
            <Text
              regular
              body2
              bold
              style={{textDecorationLine: 'underline'}}>{`Learn more`}</Text>
          </View>
          <View>
            {/* <FlatList
              data={conditions}
              numColumns={3}
              keyExtractor={(item, index) => `'${index}'`}
              columnWrapperStyle={styles.columWrapper}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: selectCondition === index ? 2 : 1,
                    borderRadius: 5,
                    flex: 1,
                    marginHorizontal: 2,
                    backgroundColor: BaseColor.whiteColor,
                    borderColor: 'gray',
                  }}
                  onPress={() => setSelectCondition(index)}>
                  <Text regular body2 bold textAlign={'center'}>
                    {item.value}
                  </Text>
                  <Text regular body2 textAlign={'center'}>
                    {item.price}
                  </Text>
                </TouchableOpacity>
              )}
            /> */}
          </View>
          {data?.fair && (
            <TouchableOpacity
              style={[
                styles.btnCondtition,
                {
                  borderWidth:
                    selectCondition === data?.fair?.appearance ? 2 : 1,
                },
              ]}
              onPress={() => setSelectCondition(data?.fair?.appearance)}>
              <Text regular body2 bold textAlign={'center'}>
                {data?.fair?.appearance}
              </Text>
              <Text regular body2 textAlign={'center'}>
                {data?.fair?.price}
              </Text>
            </TouchableOpacity>
          )}
          {data?.good && (
            <TouchableOpacity
              style={[
                styles.btnCondtition,
                {
                  borderWidth:
                    selectCondition === data?.good?.appearance ? 2 : 1,
                },
              ]}
              onPress={() => setSelectCondition(data?.good?.appearance)}>
              <Text regular body2 bold textAlign={'center'}>
                {data?.good?.appearance}
              </Text>
              <Text regular body2 textAlign={'center'}>
                {data?.good?.price}
              </Text>
            </TouchableOpacity>
          )}
          {data?.excellent && (
            <TouchableOpacity
              style={[
                styles.btnCondtition,
                {
                  borderWidth:
                    selectCondition === data?.excellent?.appearance ? 2 : 1,
                },
              ]}
              onPress={() => setSelectCondition(data?.excellent?.appearance)}>
              <Text regular body2 bold textAlign={'center'}>
                {data?.excellent?.appearance}
              </Text>
              <Text regular body2 textAlign={'center'}>
                {data?.excellent?.price}
              </Text>
            </TouchableOpacity>
          )}

          <View style={[styles.firstView]}>
            <Text regular body2>{`Storage (GB)`}</Text>
          </View>
          <View>
            <FlatList
              scrollEnabled={false}
              data={data?.product?.storages}
              numColumns={3}
              keyExtractor={(item, index) => `'${index}'`}
              columnWrapperStyle={styles.columWrapper}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={[
                    styles.btnCondtition,
                    {borderWidth: selectStorage === item.storage.name ? 2 : 1},
                  ]}
                  onPress={() => setSelectStorage(item?.storage?.name)}>
                  <Text regular body2 bold textAlign={'center'}>
                    {item?.storage?.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={[styles.firstView]}>
            <Text regular body2>{`Color`}</Text>
          </View>
          <View>
            <FlatList
              scrollEnabled={false}
              data={data?.product?.colors}
              numColumns={3}
              keyExtractor={(item, index) => `'${index}'`}
              columnWrapperStyle={styles.columWrapper}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={[
                    styles.btnCondtition,
                    {
                      borderWidth: selectColor === item.color.name ? 2 : 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}
                  onPress={() => setSelectColor(item.color.name)}>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 11,
                      backgroundColor: item.color.code,
                      borderWidth: 1,
                      borderColor: BaseColor.text,
                      marginRight: 5,
                    }}></View>
                  <Text regular body2 bold textAlign={'center'}>
                    {item.color.name.slice(0, 5)}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <Button
            text={'Add to Cart'}
            style={{marginTop: 50}}
            onPress={handleAddToCart}
          />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default ProductDetailModal;
