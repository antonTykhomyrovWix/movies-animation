import {ScreenIds} from './screenIds';

export const ScreensRegistry = {
  [ScreenIds.movies]: {
    name: ScreenIds.movies,
    title: 'Movies',
    component: require('../screens').MoviesScreen,
  },
  [ScreenIds.movie]: {
    name: ScreenIds.movie,
    component: require('../screens').MovieScreen,
  },
  [ScreenIds.favoriteMovies]: {
    name: ScreenIds.favoriteMovies,
    title: 'Favorite Movies',
    component: require('../screens').FavoriteMoviesScreen,
  },
};
