import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '../../components/Text';
import styles from './styles';
import {Icon, Icons} from '../../components';
import {SidebarLogo} from '../../assets/images';
import {WalletIcon} from '../../assets/svg';
import {BaseColor} from '../../config/theme';
import {MAIN} from '../routes';

const CustomDrawerContent = props => {
  const {navigation} = props;

  const drawerScreens = [
    {
      tabBarLabel: 'Home',
      navigateTo: '',
    },
    {
      tabBarLabel: 'Shop',
      navigateTo: '',
    },
    {
      tabBarLabel: 'Iphone',
      navigateTo: '',
    },
    {
      tabBarLabel: 'Cell Phones',
      navigateTo: '',
    },
    {
      tabBarLabel: 'Smart Watches',
      navigateTo: '',
    },
    {
      tabBarLabel: 'MacBook',
      navigateTo: '',
    },
    {
      tabBarLabel: 'Laptops',
      navigateTo: '',
    },
  ];
  const mainNavigation = [
    {
      tabBarLabel: 'About Us',
      navigateTo: MAIN.ABOUT_US,
    },
    {
      tabBarLabel: 'Contact',
      navigateTo: MAIN.CONTACT_US,
    },
    {
      tabBarLabel: 'FAQS',
      navigateTo: MAIN.ABOUT_US,
    },
    {
      tabBarLabel: 'Terms & Conditions',
      navigateTo: MAIN.ABOUT_US,
    },
    {
      tabBarLabel: 'Wishlists',
      navigateTo: MAIN.ABOUT_US,
    },
  ];
  return (
    <SafeAreaView style={styles.drawerSafeArea}>
      <View style={styles.main}>
        <View style={styles.headerView}>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()}>
              <Icon name={Icons.CROSS} color={'#fff'} size={22} />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <Image source={SidebarLogo} style={{height: 30, width: 186}} />
            <Text semibold title3 whiteColor>
              {'User Name'}
            </Text>
          </View>
        </View>

        <ScrollView style={styles.itemView}>
          <Text semibold text>
            {`CATEGORIES`}
          </Text>

          {drawerScreens.map((item, index) => {
            return (
              <TouchableOpacity
                key={`'${index}'`}
                activeOpacity={0.6}
                //   onPress={() => navigation.navigate(item.navigateTo)}
                style={styles.itemBtn}>
                <WalletIcon />
                <Text text headline regular style={styles.itemText}>
                  {item.tabBarLabel}
                </Text>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Icon
                    name={Icons.CHEVRON_DOWN}
                    type={'Entypo'}
                    size={15}
                    color={BaseColor.text}
                  />
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={styles.seperator} />

          <Text semibold text>
            {`MAIN NAVIGATION`}
          </Text>

          {mainNavigation.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.navigateTo)}
                activeOpacity={0.6}
                key={`'${index}'`}
                style={styles.itemBtn}
                onPress={()=>navigation.navigate('TradeInView')}
                >
                <Text text headline regular style={styles.itemText}>
                  {item.tabBarLabel}
                </Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {}}
            style={styles.itemBtn}>
            <Icon
              name={Icons.LOGOUT}
              type={'ant'}
              size={15}
              color={BaseColor.primary}
            />
            <Text primary headline regular style={styles.itemText}>
              {`Logout`}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
