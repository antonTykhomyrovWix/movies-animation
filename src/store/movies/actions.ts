import {format} from 'date-fns';
import {createAsyncThunk, SerializedError} from '@reduxjs/toolkit';

import {moviesService} from '../../services';

import {Movie, MoviesThunkTypePrefixes, StoreMovies} from './types';

const fetchMovies = createAsyncThunk<
  StoreMovies,
  undefined,
  {rejectValue: SerializedError}
>(MoviesThunkTypePrefixes.moviesFetch, async () => {
  const {results} = await moviesService.fetchPopularMovies();

  const movies: {[key: number]: Movie} = {};

  results.forEach(({id, title, overview, poster_path, release_date}) => {
    movies[id] = {
      id,
      title,
      isFavorite: false,
      description: overview,
      date: format(new Date(release_date), 'd LLL yyyy'),
      image: `https://image.tmdb.org/t/p/w500${poster_path}`,
    };
  });

  return movies;
});

export {fetchMovies};
