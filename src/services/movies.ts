import {MovieResponse} from '../store/movies/types';

import requests from './requests';

const API_URI = 'https://api.themoviedb.org/3';
const API_KEY = '017648c9cd3c1d0ae634a1dbf60e93b7';

type PopularMoviesResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieResponse[];
};

const fetchPopularMovies = async (): Promise<PopularMoviesResponse> =>
  requests.get(`${API_URI}/movie/popular?api_key=${API_KEY}`);

export const moviesService = {
  fetchPopularMovies,
};
