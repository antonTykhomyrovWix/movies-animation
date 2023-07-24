import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreenIds} from '../screenIds';
import {ScreensRegistry} from '../screensRegistry';
import {RootStackParams, RootStackParamsKeys} from '../types';

const FavoriteMoviesTabStack = createStackNavigator<RootStackParams>();

export const FavoriteMoviesTabStackScreen = () => {
  const favoriteMoviesScreen = ScreensRegistry[ScreenIds.favoriteMovies];
  const movieScreen = ScreensRegistry[ScreenIds.movie];

  return (
    <FavoriteMoviesTabStack.Navigator>
      <FavoriteMoviesTabStack.Screen
        name={favoriteMoviesScreen.name as RootStackParamsKeys}
        component={favoriteMoviesScreen.component}
        options={{
          title: favoriteMoviesScreen.title,
        }}
      />

      <FavoriteMoviesTabStack.Screen
        name={movieScreen.name as RootStackParamsKeys}
        component={movieScreen.component}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </FavoriteMoviesTabStack.Navigator>
  );
};
