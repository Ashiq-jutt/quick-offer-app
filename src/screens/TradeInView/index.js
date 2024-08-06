import React from 'react';
import {View,ScrollView, TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import {styles} from './style';
import TradeInCash from '../../components/appComponents/TradeInCash';
import { Temp } from '../../assets/svg/TradeIn';
const TradeInView = ({navigation}) => {
  const tradeInCashData = [
    {
      title: 'Get into cash',
      desc: 'use your trade in cash to buy your dream device or just pocket it',
    },
    {
      title: 'Turn Tech into Cash',
      desc: 'use your trade in cash to buy your dream device or just pocket it',
    },
    {
      title: 'Turn Tech into Cash',
      desc: 'use your trade in cash to buy your dream device or just pocket it',
    },
  ];
  const tradeInData = [
    {
      heading: 'smart phone',
      price: 120,
    },
    {
      heading: 'Mac book',
      price: 400,
    },
    {
      heading: 'Pc',
      price: 208,
    },
    {
      heading: 'Mac book',
      price: 400,
    },
    {
      heading: 'Pc',
      price: 208,
    },
  ];
  const renderTradeIn = item => {
    
    return (
      <View style={styles.renderTradeIn}>
         
          <View style={styles.right}>
           
              <Text>{item.heading}</Text>
              <Text>{'up to $'+item.price}</Text>
          </View>
          <Temp/>
         
         
      </View>
    );
  };

  return (
    <View style={{flex:1}}>
    <ScrollView style={styles.main}>
      <View style={styles.upper}>
        <Text title2 semibold>{'Turn Tech Into Cash'}</Text>
        <Text style={{marginVertical:10}}>{'use Your Trade-in Cash to buy your dream device or just pocket it'}</Text>
        
          {tradeInCashData.map(item => {
            return (
              <TradeInCash logo={null} title={item.title} desc={item.desc} />
            );
          })}
          
      </View>

      <View style={styles.lower}>
        <Text title3 semibold>{'Whatcha Trading in?'}</Text>
<View style={{marginVertical:20}}>

{tradeInData.map(item => {
          return(
            renderTradeIn(item)
          )
         
        })}

</View>
       
       
      </View>
    
    </ScrollView>
    <View  style={styles.btnView}>
    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('TradeInDevice')}>
        <Text style={styles.txt}>{'Get an offer'}</Text>
       </TouchableOpacity>
       </View>
    </View>
  );
};
export default TradeInView;
