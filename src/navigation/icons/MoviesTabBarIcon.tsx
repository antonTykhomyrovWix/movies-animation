import React, {FC} from 'react';

import Lottie from 'lottie-react-native';
import {TabBarIcon} from './types';

export const MoviesTabBarIcon: FC<TabBarIcon> = ({focused, size, ref}) => (
  <Lottie
    ref={ref}
    source={require('../../assets/movie.json')}
    style={{width: size, height: size}}
    loop={false}
    duration={2000}
    progress={focused ? 0 : 1}
  />
);
