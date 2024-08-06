import React from 'react';
import { StatusBar, ScrollView} from 'react-native';
import {BaseColor} from '../../config/theme';
import Shipping from './Shipping';
import Payment from './Payment';

const Index = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={BaseColor.whiteColor}
        translucent={false}
      />
      <ScrollView>
        <Shipping />

        {/* <Payment/> */}
      </ScrollView>
    </>
  );
};

export default Index;
