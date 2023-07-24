import {configureStore} from '@reduxjs/toolkit';

import {StoreReducers} from './types';
import {moviesReducer} from './movies';

export const store = configureStore({
  reducer: {
    [StoreReducers.movies]: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
