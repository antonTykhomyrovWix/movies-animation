import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {ScreenIds} from '../screenIds';
import {ScreensRegistry} from '../screensRegistry';
import {RootStackParams, RootStackParamsKeys} from '../types';

const MoviesTabStack = createSharedElementStackNavigator<RootStackParams>();

export const MoviesTabStackScreen = () => {
  const moviesScreen = ScreensRegistry[ScreenIds.movies];
  const movieScreen = ScreensRegistry[ScreenIds.movie];

  return (
    <MoviesTabStack.Navigator>
      <MoviesTabStack.Screen
        name={moviesScreen.name as RootStackParamsKeys}
        component={moviesScreen.component}
        options={{
          title: moviesScreen.title,
        }}
      />

      <MoviesTabStack.Screen
        name={movieScreen.name as RootStackParamsKeys}
        component={movieScreen.component}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </MoviesTabStack.Navigator>
  );
};
