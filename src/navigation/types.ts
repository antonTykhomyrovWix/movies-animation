import {Movie} from '../store/movies/types';

export type RootStackParamsKeys = keyof RootStackParams;

export type RootStackParams = {
  Movie: {movie: Movie};
  Movies: undefined;
  FavoriteMovies: undefined;
};
