import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Text from '../Text';
import {styles} from './styles';
import {BaseColor} from '../../config/theme';

const Index = ({disabled, text, onPress, loading, style}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btnView,
        {
          backgroundColor: disabled ? BaseColor.secondary : BaseColor.primary,
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={BaseColor.whiteColor} />
      ) : (
        <Text medium title5 whiteColor>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Index;
