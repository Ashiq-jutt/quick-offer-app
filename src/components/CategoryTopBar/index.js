import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {BaseColor} from '../../config/theme';

const Index = ({categoryData, selectedCategory, setSelected, style}) => {
  return (
    <View style={[styles.main, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sliderView}>
        {categoryData?.length > 0 &&
          categoryData.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={[
                  item === selectedCategory
                    ? styles.selectedBtn
                    : styles.notSelectedBtn,
                ]}
                key={`'${index}'`}>
                <Text
                  style={
                    item === selectedCategory
                      ? {color: BaseColor.primary}
                      : {color: BaseColor.textGrey}
                  }>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Index;
