import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {TabBarIcon} from './types';

export const MoviesTabBarIcon = ({focused, color, size}: TabBarIcon) => {
  if (focused)
    return <MaterialCommunityIcons name="movie" size={size} color={color} />;

  return (
    <MaterialCommunityIcons name="movie-outline" size={size} color={color} />
  );
};
