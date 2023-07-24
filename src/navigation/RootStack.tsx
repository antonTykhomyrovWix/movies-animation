import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MoviesTabBarIcon} from './icons';
import {FavoriteMoviesTabStackScreen, MoviesTabStackScreen} from './stacks';
import {FavoriteMoviesTabBarIcon} from './icons/FavoriteMoviesTabBarIcon';

const Tab = createBottomTabNavigator();

export const RootStackScreen = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="MoviesTabStackScreen"
      component={MoviesTabStackScreen}
      options={{headerShown: false, tabBarIcon: MoviesTabBarIcon}}
    />

    <Tab.Screen
      name="FavoriteMoviesTabStackScreen"
      component={FavoriteMoviesTabStackScreen}
      options={{headerShown: false, tabBarIcon: FavoriteMoviesTabBarIcon}}
    />
  </Tab.Navigator>
);
