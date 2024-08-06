import React, {useEffect} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './styles';
import {SplashLogo} from '../../assets/images';
import {MAIN} from '../../navigation/routes';

const Index = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(MAIN.LOGIN);
    }, 2000); // 2000 milliseconds (2 seconds)
  }, []);
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.imageView}>
        <Image source={SplashLogo} style={styles.image} />
      </View>
      <View style={styles.borderDown} />
    </SafeAreaView>
  );
};

export default Index;
