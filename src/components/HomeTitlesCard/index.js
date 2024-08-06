import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Text from '../Text';

const Index = ({
  title,
  isViewAll = true,
  viewAllText = 'view all',
  onPressViewAll,
}) => {
  return (
    <View style={styles.main}>
      <Text title4 regular text numberOfLines={1}>
        {title}
      </Text>
      {isViewAll && (
        <TouchableOpacity onPress={onPressViewAll}>
          <Text caption2 regular textGrey numberOfLines={1}>
            {viewAllText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Index;
