import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoryItems, Home} from '../../../screens';
import {HOME} from '../../routes';

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME.HOME_TAB} component={Home} />
      <Stack.Screen name={HOME.CATEGORY_ITEMS} component={CategoryItems} />
      
    </Stack.Navigator>
  );
};

export default Index;
