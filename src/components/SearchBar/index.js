import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {Icon, Icons, TextInput} from '..';
import {BaseColor} from '../../config/theme';

const Index = ({value, onChangeText, placeholder, isCat = false, catData}) => {
  return (
    <View style={styles.main}>
      {isCat ? (
        <View style={styles.catogory}>
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={text => onChangeText(text)}
            style={styles.catogoryInput}
            backgroundColor={'transparent'}
          />
          <View style={styles.catDropdown}>
            <View style={styles.dropdown}>{/* catData */}</View>
            <View style={styles.arrow}>
              <Icon
                name={Icons.SEARCH}
                size={16}
                type={'ant'}
                color={BaseColor.whiteColor}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.normalSearchView}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={text => onChangeText(text)}
          style={styles.normalSearch}
          icon={
            <Icon
              name={Icons.SEARCH}
              size={16}
              type={'ant'}
              color={BaseColor.textGrey}
            />
          }
        />
        </View>
      )}
    </View>
  );
};

export default Index;
