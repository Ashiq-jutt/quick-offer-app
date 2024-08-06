import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {IMAGE_BASE_URL} from '../../services/ROUTES';

const Index = ({image, itemCat, itemsCount, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.main}>
      <View style={styles.imageView}>
        <Image source={{uri: IMAGE_BASE_URL + image}} style={styles.image} />
      </View>
      <View style={styles.detailView}>
        <Text
          caption1
          bold
          numberOfLines={1}
          style={{marginTop: 10, color: 'gray'}}>
          {itemCat}
        </Text>
        {/* <Text small regular textGrey numberOfLines={1}>
          {`${itemsCount} ${itemsCount > 1 ? 'items' : 'item'}`}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default Index;
