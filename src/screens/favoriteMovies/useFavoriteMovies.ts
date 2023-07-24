import {useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {useAppDispatch} from '../../hooks';
import {RootStackParams} from '../../navigation/types';
import {useAppSelector} from '../../hooks/useAppSelector';
import {moviesActions, selectMovies} from '../../store/movies';

const useFavoriteMovies = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {movies} = useAppSelector(selectMovies);

  const onFavoritePress = useCallback(
    (id: number) => {
      dispatch(moviesActions.onFavorite(id));
    },
    [dispatch]
  );

  const moviesList = useMemo(() => {
    if (!movies) return [];

    return Object.values(movies).reduce((acc, movie) => {
      if (movie.isFavorite) {
        acc.push({
          ...movie,
          onPress: () => navigation.push('Movie', {movie}),
          onFavoritePress: () => onFavoritePress(movie.id),
        });
      }

      return acc;
    }, []);
  }, [movies, navigation, onFavoritePress]);

  return {
    moviesList,
  };
};

export default useFavoriteMovies;
