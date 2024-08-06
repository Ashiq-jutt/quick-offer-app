import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {BaseColor} from '../../config/theme';
import {Icon, Icons} from '..';

const Index = ({image, title, specs, price, onAddToCart}) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageView}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.discrip}>
        <Text text regular overline>
          {title}
        </Text>
        <Text text regular title4>
          {specs}
        </Text>
        <Text primary regular body2>
          {`$${price}`}
        </Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={onAddToCart} style={styles.btn}>
          <Icon
            name={Icons.PLUS}
            type={'Entypo'}
            size={25}
            color={BaseColor.whiteColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
