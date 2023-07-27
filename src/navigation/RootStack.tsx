import React, {FC} from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {MoviesTabBarIcon, FavoriteMoviesTabBarIcon} from './icons';
import {FavoriteMoviesTabStackScreen, MoviesTabStackScreen} from './stacks';
import {AnimatedTabBar} from './AnimatedTabBar';

const Tab = createBottomTabNavigator();
const TopBar: FC<BottomTabBarProps> = (props) => <AnimatedTabBar {...props} />;

export const RootStackScreen = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
    tabBar={TopBar}
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
