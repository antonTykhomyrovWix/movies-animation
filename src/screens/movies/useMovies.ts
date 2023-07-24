import {useCallback, useEffect, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {useAppDispatch} from '../../hooks';
import {RootStackParams} from '../../navigation/types';
import {useAppSelector} from '../../hooks/useAppSelector';
import {moviesActions, selectMovies} from '../../store/movies';

const useMovies = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {isLoading, movies} = useAppSelector(selectMovies);

  const onFavoritePress = useCallback(
    (id: number) => {
      dispatch(moviesActions.onFavorite(id));
    },
    [dispatch]
  );

  const moviesList = useMemo(() => {
    if (!movies) return [];

    return Object.values(movies).map((movie) => ({
      ...movie,
      onPress: () => navigation.push('Movie', {movie}),
      onFavoritePress: () => onFavoritePress(movie.id),
    }));
  }, [movies, navigation, onFavoritePress]);

  useEffect(() => {
    dispatch(moviesActions.fetchMovies());
  }, [dispatch]);

  return {
    isLoading,
    moviesList,
  };
};

export default useMovies;
