import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Text from '../Text';
import StarRating from 'react-native-star-rating';
import {BaseColor} from '../../config/theme';

const Index = ({
  image,
  itemCat,
  itemName,
  rating,
  userRated,
  price,
  onPressProduct,
  type = 'rating',
  lowestPrice,
}) => {
  return (
    <TouchableOpacity onPress={onPressProduct} style={styles.main}>
      <View style={styles.imageView}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.data}>
        <Text caption2 regular textGrey numberOfLines={1} style={{marginVertical:3}}>
          {itemCat}
        </Text>
        <Text body1 semibold text numberOfLines={1} style={{marginVertical:3}}>
          {itemName}
        </Text>
        {type === 'rating' ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={rating}
              selectedStar={rating => null}
              emptyStarColor={BaseColor.textGrey}
              fullStarColor={BaseColor.stars}
              halfStarColor={BaseColor.stars}
              starSize={13}
            />
            <Text caption2 regular textGrey numberOfLines={1}>
              {`(${userRated})`}
            </Text>
          </View>
        ) : (
          <>
            <Text caption2 regular textGrey numberOfLines={1}>
              {`Starting from $${lowestPrice}`}
            </Text>
          </>
        )}
        <Text body1 bold text numberOfLines={1}>{`$${price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Index;
