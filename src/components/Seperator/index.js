import React from 'react';
import {View} from 'react-native';
import {BaseColor} from '../../config/theme';

const Index = ({height, color, marginVertical}) => {
  return (
    <View
      style={{
        borderTopWidth: height ? height : 10,
        
        marginVertical: marginVertical ? marginVertical : 20,
         borderColor:'#F9F9F9'
       
      }}
    />
  );
};

export default Index;
