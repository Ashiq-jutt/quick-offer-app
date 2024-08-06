/**
 * bottom tab navigator.
 * all bottom tab screens are handled from here.
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import TabsScreens from './config';
import {BaseColor} from '../../../config/theme';

const TabBar = createBottomTabNavigator();

const Index = () => {
  return (
    <TabBar.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: BaseColor.whiteColor,
        // tabBarInactiveTintColor: BaseColor.whiteColor,
        tabBarInactiveTintColor: BaseColor.zinc400,
        tabBarStyle: styles.main,
      }}>
      {Object.keys(TabsScreens).map(name => {
        const {component, options, listener} = TabsScreens[name];

        return (
          <TabBar.Screen
            key={name}
            name={name}
            component={component}
            listeners={listener}
            options={options}
          />
        );
      })}
    </TabBar.Navigator>
  );
};

export default Index;

/** bottom tabbar component */
function MyTabBar(props) {
  const {state, descriptors, navigation} = props;
  return (
    <View
      style={{
        backgroundColor: BaseColor.primary,
        height: Platform.OS === 'android' ? 50 : 60,
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              activeOpacity={0.1}
              key={index.toString()}
              accessibilityRole="button"
              accessibilityStates={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                isFocused ? styles.focusedTab : {},
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              {options.tabBarIcon(isFocused)}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
