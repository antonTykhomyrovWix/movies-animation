import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Spacings} from 'react-native-ui-lib';

import {Movie} from '../store/movies/types';

import {MovieCard} from './MovieCard';

type MoviesListProps = {
  movies: Movie[];
};

const renderCard = ({item}) => <MovieCard {...item} />;

export const MoviesList = ({movies}: MoviesListProps) => (
  <FlatList
    data={movies}
    keyExtractor={({id}) => id}
    renderItem={renderCard}
    contentContainerStyle={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s3,
  },
});
