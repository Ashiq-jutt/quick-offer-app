import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/Text/index';
import {
  BackIcon,
  Cross,
  Mobile,
  MoobilePhone,
  Plus,
  Search,
} from '../../../assets/svg/Category';
import {styles} from './style';
const Result = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Cross />
        <Text style={styles.txt} textGrey>{'Clear'}</Text>
      </View>
      


      <View style={styles.body}>
      <View style={styles.line}/>
        <View style={styles.rw}>
          <Text body1 textGrey>
            {'200 result '}
          </Text>
          <Plus />
        </View>
        <View style={styles.line}/>
        <View style={styles.rw}>
          <Text body1 textGrey>
            {'price'}
          </Text>
          <Plus />
        </View>
        <View style={styles.line}/>
        <View style={styles.rw}>
          <Text body1 textGrey>
            {'Release Year'}
          </Text>
          <Plus />
        </View>
        <View style={styles.line}/>
        <View style={styles.rw}>
          <Text body1 textGrey>
            {'Year'}
          </Text>
          <Plus />
        </View>
        <View style={styles.line}/>
        <TouchableOpacity style={styles.btn}>
          <Text whiteColor bold title5>See Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Result;
