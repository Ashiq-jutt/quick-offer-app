import {TABS} from '../../routes';
import HomeNavigator from '../HomeStack';
import CartNavigator from '../CartStack';
import {
  HomeTabIcon,
  CartTabIcon,
  MenuTabIcon,
  ProfileTabIcon,
} from '../../../assets/svg';
import {Menu, MyProfile, TradeInView} from '../../../screens';

export default {
  [TABS.HOME]: {
    component: HomeNavigator,
    options: {
      title: 'HOME',
      tabBarIcon: ({color}) => <HomeTabIcon color={color} />,
      tabBarLabel: 'HOME',
    },
  },
  [TABS.CART]: {
    component: CartNavigator,
    options: {
      title: 'CART',
      tabBarIcon: ({color}) => <CartTabIcon color={color} />,
      tabBarLabel: 'CART',
    },
  },
  [TABS.MENU]: {
    component: TradeInView,
    options: {
      title: 'MENU',
      tabBarIcon: ({color}) => <MenuTabIcon color={color} />,
      tabBarLabel: 'MENU',
    },
  },
  [TABS.PROFILE]: {
    component: MyProfile,
    options: {
      title: 'PROFILE',
      tabBarIcon: ({color}) => <ProfileTabIcon color={color} />,
      tabBarLabel: 'PROFILE',
    },
  },
};
