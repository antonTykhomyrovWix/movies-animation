import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {TabBarIcon} from './types';

export const FavoriteMoviesTabBarIcon = ({
  focused,
  color,
  size,
}: TabBarIcon) => {
  if (focused)
    return (
      <MaterialCommunityIcons name="movie-star" size={size} color={color} />
    );

  return (
    <MaterialCommunityIcons
      name="movie-star-outline"
      size={size}
      color={color}
    />
  );
};
