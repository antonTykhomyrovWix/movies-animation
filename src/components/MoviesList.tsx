import React from 'react';
import {Animated, ListRenderItem, StyleSheet} from 'react-native';
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
  <Animated.FlatList
    data={movies}
    keyExtractor={({id}) => id.toString()}
    renderItem={renderCard}
    // renderItem={({item}) => (
    //   <Animated.View>
    //     <MovieCard {...item} />
    //   </Animated.View>
    // )}
    contentContainerStyle={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s3,
  },
});
