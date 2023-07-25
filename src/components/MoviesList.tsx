import React from 'react';
import {ListRenderItem, StyleSheet} from 'react-native';
import Animation from 'react-native-reanimated';
import {Spacings} from 'react-native-ui-lib';

import {Movie} from '../store/movies/types';

import {MovieCard} from './MovieCard';

type MoviesListProps = {
  movies: Movie[];
};

const renderCard: ListRenderItem<Movie> = ({item, index}) => (
  <MovieCard {...item} index={index} />
);

export const MoviesList = ({movies}: MoviesListProps) => (
  <Animation.FlatList
    data={movies}
    // layout={Layout.delay(500)}
    // itemLayoutAnimation={Layout.delay(3000)}
    keyExtractor={({id}) => id.toString()}
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
