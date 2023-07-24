import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '..';
import {StoreReducers} from '../types';

import {fetchMovies} from './actions';
import {MoviesState} from './types';

const initialState: MoviesState = {
  isLoading: true,
};

const moviesSlice = createSlice({
  name: StoreReducers.movies,
  initialState,
  reducers: {
    onFavorite: (state, {payload}: PayloadAction<number>) => {
      const movie = state.movies[payload];

      state.movies[payload] = {...movie, isFavorite: !movie.isFavorite};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, {payload}) => {
      state.movies = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, {error}) => {
      state.error = error;
      state.isLoading = false;
    });
  },
});

export const selectMovies = (state: RootState) => state.movies;
export const selectMoviesState = (state: RootState) => state.movies;

const moviesReducer = moviesSlice.reducer;
const moviesActions = {...moviesSlice.actions, fetchMovies};

export {moviesActions, moviesReducer};
