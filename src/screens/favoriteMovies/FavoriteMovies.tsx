import React from 'react';

import {MoviesList} from '../../components';

import useFavoriteMovies from './useFavoriteMovies';

const FavoriteMovies = () => {
  const {moviesList} = useFavoriteMovies();

  return <MoviesList movies={moviesList} />;
};

export default FavoriteMovies;
