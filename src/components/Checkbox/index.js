import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Text from '../Text';

export default CheckBox = ({check = false, func, label = '', color, size}) => {
  return (
    <View>
      {check ? (
        <TouchableOpacity
          onPress={func}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="checksquare" size={size} color={color} />
          {label !== '' && (
            <Text
              text
              body2
              semibold
              style={{
                paddingLeft: 10,
              }}>
              {label}
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={func}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="square" size={size} color={color} />
          {label !== '' && (
            <Text
              text
              body2
              semibold
              style={{
                paddingLeft: 10,
              }}>
              {label}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
