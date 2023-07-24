import {SerializedError} from '@reduxjs/toolkit';

export enum MoviesThunkTypePrefixes {
  moviesFetch = 'movies/fetch',
}

export type MovieResponse = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Movie = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  isFavorite: boolean;
};

export type StoreMovies = {[key: number]: Movie};

export interface MoviesState {
  isLoading: boolean;
  movies?: StoreMovies;
  error?: SerializedError;
}
