import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {BaseColor} from '../../config/theme';
import {Button, Icon, Icons} from '../../components';
import styles from './styles';
import {bags} from '../../assets/images';
import Text from '../../components/Text';
import { CART } from '../../navigation/routes';

const Index = ({navigation}) => {
  const pressContinue=()=>{
    navigation.navigate(CART.PAY_FAIL)
  }
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
        <Image source={bags} style={styles.shareHeart} />
        <Text
          blackColor
          bold
          title2
          style={{
            marginTop: 20,
          }}>
          Success!
        </Text>
        <Text
          textGrey
          textAlign={'center'}
          body1
          style={{
            marginTop: 20,
          }}>
          Your order will be delivered soon. Thank you for choosing our app!
        </Text>
      </View>
      <Button
        style={styles.btn}
        text={'Continue Shopping'}
        onPress={pressContinue}></Button>
    </SafeAreaView>
  );
};

export default Index;
