/* eslint react/prop-types: 0 */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import DefaultTheme from '../themes/default';
import {
  emptyHeader,
  searchHeader,
  titleHeader,
  headerWithCloseButton,
} from './styles';
import Login from '../../screens/login/login';
import RecoveryPassword from '../../screens/recovery-password/recovery-password';
import SingUp from '../../screens/sing-up/sing-up';
import Home from '../../screens/home/home';
import Bag from '../../screens/bag/bag';
import Addresses from '../../screens/addresses/addresses';
import CreateAddress from '../../screens/create-address/create-address';

import SuppliersList from '../../screens/suppliers-list/suppliers-list';
import SupplierDetail from '../../screens/supplier-detail/supplier-detail';

import Profile from '../../screens/profile/profile';
import Checkout from '../../screens/checkout/checkout';
import ProfileSettings from '../../screens/profile-settings/profile-settings';

import Orders from '../../screens/orders/orders';
import OrderDetail from '../../screens/order-detail/order-detail';
import ProductDetail from '../../screens/product-detail/product-detail';

import TabIcon from '../../components/tab-icon/tab-icon';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => emptyHeader(),
  },
  RecoveryPassword: {
    screen: RecoveryPassword,
    navigationOptions: () => emptyHeader(),
  },
  SingUp: {
    screen: SingUp,
    navigationOptions: () => emptyHeader(),
  },
  Addresses: {
    screen: Addresses,
    navigationOptions: ({navigation}) =>
      titleHeader(navigation, 'Shipping Addresses'),
  },
  CreateAddress: {
    screen: CreateAddress,
    navigationOptions: ({navigation}) =>
      titleHeader(navigation, 'Adding Shipping Address'),
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: ({navigation}) => titleHeader(navigation, 'Checkout'),
  },
  ProfileSettings: {
    screen: ProfileSettings,
    navigationOptions: ({navigation}) => searchHeader(navigation, 'Settings'),
  },
  Orders: {
    screen: Orders,
    navigationOptions: ({navigation}) => searchHeader(navigation, 'Orders'),
  },
  OrderDetail: {
    screen: OrderDetail,
    navigationOptions: ({navigation}) =>
      searchHeader(navigation, 'Order Details'),
  },
  TabBar: createBottomTabNavigator(
    {
      Home: {
        screen: Home,
      },
      SupplierDetail: {
        screen: Checkout,
      },
      Bag: {
        screen: Bag,
      },
      Account: {
        screen: Profile,
      },
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor, focused}) => {
          const {routeName} = navigation.state;
          return (
            <TabIcon name={routeName} color={tintColor} focused={focused} />
          );
        },
      }),
      navigationOptions: {
        header: null,
      },
      tabBarOptions: {
        inactiveTintColor: DefaultTheme.gray,
        activeTintColor: DefaultTheme.primary,
        keyboardHidesTabBar: true,
        style: {
          height: 64,
          backgroundColor: '#ffffff',
          borderTopColor: 'transparent',
        },
      },
    },
  ),
});

export default createAppContainer(AppNavigator);
