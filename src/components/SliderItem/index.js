import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {BaseColor} from '../../config/theme';
import Text from '../Text';
import {SliderImage1} from '../../assets/images';

const Index = ({cardColor, cardTitle, cardDisc, cardImage}) => {
  return (
    <View
      style={[
        styles.main,
        {
          backgroundColor: cardColor ? cardColor : 'BaseColor.primary',
        },
      ]}>
      <View style={{}}>
        <Text body1 bold whiteColor>
          {cardTitle}
        </Text>
        <Text small bold whiteColor>
          {cardDisc}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.shopNowBtn}>
          <Text body1 bold primary>
            {'Shop Now'}
          </Text>
        </TouchableOpacity>

        <View style={{}}>
          <Image
            source={cardImage ? cardImage : SliderImage1}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
