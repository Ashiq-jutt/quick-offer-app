import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BaseColor} from '../config/theme';
import {CART, COMMON, MAIN} from './routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import CustomDrawerContent from './components/CustomDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AboutUs,
  ContactUs,
  CreateAccount,
  Failure,
  Login,
  Procceding,
  ProductDetail,
  ResetPassword,
  Splash,
  Succes,
  Function,
  TradeInCareer,
  TradeInCondition,
  TradeInDevice,
  TradeInSides,
  TradeInView,
  SeeOffers,
  WhoGoesThere,
  SelectCategory,
  SelectSubCategory,
  Result,
  AddCart,
  Shipping,
  Payment,
  Success
} from '../screens';
import TradeInCash from '../components/appComponents/TradeInCash';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Index = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={BaseColor.primary}
          translucent={false}
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={MAIN.SPLASH} component={Splash} />
          <Stack.Screen name={MAIN.LOGIN} component={Login} />
          <Stack.Screen name={MAIN.SIGNUP} component={CreateAccount} />
          <Stack.Screen name={MAIN.RESET_PASSWORD} component={ResetPassword} />
          <Stack.Screen name={MAIN.ABOUT_US} component={AboutUs} />
          <Stack.Screen name={MAIN.CONTACT_US} component={ContactUs} />
          <Stack.Screen name={MAIN.PRODUCT_DETAIL} component={ProductDetail} />
          <Stack.Screen name={MAIN.DRAWER} component={DrawerIndex} />
          <Stack.Screen name={'TradeInView'} component={TradeInView} />
          <Stack.Screen name={'TradeInCareer'} component={TradeInCareer} />
          <Stack.Screen name={'TradeInCash'} component={TradeInCash} />
          <Stack.Screen name={'TradeInDevice'} component={TradeInDevice} />
          <Stack.Screen name={'TradeInSides'} component={TradeInSides} />
          <Stack.Screen name={'SeeOffers'} component={SeeOffers} />
          <Stack.Screen name={'WhoGoesThere'} component={WhoGoesThere} />
          <Stack.Screen name={'SelectingCategory'} component={SelectCategory} />
          <Stack.Screen name={'SelectSubCategory'} component={SelectSubCategory} />
          <Stack.Screen name={'Result'} component={Result} />
          <Stack.Screen name={CART.CART_TAB} component={AddCart} />
      <Stack.Screen name={CART.SHIPPING} component={Shipping} />
      <Stack.Screen name={CART.PAYMENT} component={Payment} />
      <Stack.Screen name={CART.PAY_FAIL} component={Failure} />
      <Stack.Screen name={CART.PAY_SUCCESS} component={Success} />

          <Stack.Screen
            name={'TradeInCondition'}
            component={TradeInCondition}
          />
          <Stack.Screen name={'Function'} component={Function} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Index;

const DrawerIndex = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={BaseColor.primary}
        translucent={false}
      />

<Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={COMMON.TABS} component={BottomTabNavigator} />
    </Stack.Navigator>
      {/* <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {width: '80%'},
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}> */}
        {/* <Drawer.Screen name={COMMON.TABS} component={BottomTabNavigator} /> */}
      {/* </Drawer.Navigator> */}
    </>
  );
};
