import React from 'react';
import {View, Pressable} from 'react-native';
import {styles} from './styles';
import {Icons, Text, Icon} from '..';
//import {useTheme} from '../../config/theme';

const RadioButton = props => {
  const {containerStyle, onPressRadio, isSelected, desc} = props;
 // const colors = useTheme();

  return (
    <View style={[containerStyle]}>
      <Pressable style={styles.pressable} onPress={() => onPressRadio()}>
        <View
          style={[
            styles.mainView,
            {
              borderColor: isSelected ? 'red' : 'gray',
            },
          ]}>
          {isSelected && (
            <Icon name={Icons.CHECK} color={'red'} size={10} />
          )}
        </View>

        <Text
          numberOfLines={2}
          body1
          regular
          style={[
            {
              color: isSelected ? 'yellow' : 'green',
            },
          ]}>
          {desc ? desc : 'Some text'}
        </Text>
      </Pressable>
    </View>
  );
};

export default RadioButton;
