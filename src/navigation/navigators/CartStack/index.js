import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AddCart,
  CategoryItems,
  Failure,
  Payment,
  Shipping,
  Success,
} from '../../../screens';
import {CART, HOME} from '../../routes';

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME.CATEGORY_ITEMS} component={CategoryItems} />

      {/* <Stack.Screen name={CART.CART_TAB} component={AddCart} />
      <Stack.Screen name={CART.SHIPPING} component={Shipping} />
      <Stack.Screen name={CART.PAYMENT} component={Payment} />
      <Stack.Screen name={CART.PAY_FAIL} component={Failure} />
      <Stack.Screen name={CART.PAY_SUCCESS} component={Success} /> */}
    </Stack.Navigator>
  );
};

export default Index;
