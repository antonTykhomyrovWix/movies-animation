import React from 'react';
import {LoaderScreen, Colors} from 'react-native-ui-lib';

import {MoviesList} from '../../components';

import useMovies from './useMovies';

const Movies = () => {
  const {isLoading, moviesList} = useMovies();

  if (isLoading) return <LoaderScreen color={Colors.$outlineGeneral} />;

  return <MoviesList movies={moviesList} />;
};

export default Movies;
