import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import Text from '../../components/Text';
import {Button, Icon, Icons, Header} from '../../components';

const Index = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.content}>
        <Header
          firstIcon={'Back'}
          onPressFirstIcon={() => navigation.goBack()}
          titleText
          title={'Contact Us'}
          showLike={false}
          lastIcon={false}
        />

        <View style={styles.main}>
          
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
