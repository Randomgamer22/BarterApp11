import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen'
import MyBartersScreen from '../screens/MyBartersScreen'
import MyReceivedItemsScreen from '../screens/MyReceivedItemsScreen';
import NotificationScreen from '../screens/NotificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator
  },
  MyBarters: {
    screen: MyBartersScreen
  },
  MyReceivedItems: {
    screen: MyReceivedItemsScreen
  },
  Notifications: {
    screen: NotificationScreen
  },
  Setting: {
    screen: SettingScreen
  },
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })