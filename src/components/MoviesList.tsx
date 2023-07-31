import React, {FC, useState} from 'react';
import {ListRenderItem, StyleSheet, RefreshControl} from 'react-native';
import Animated, {Layout} from 'react-native-reanimated';
import {Spacings} from 'react-native-ui-lib';

import {Movie} from '../store/movies/types';

import {MovieCard} from './MovieCard';
import {Loader} from './Loader';

type MoviesListProps = {
  movies: Movie[];
};

const renderCard: ListRenderItem<Movie> = ({item, index}) => (
  <MovieCard {...item} index={index} />
);

const loaderSize = 50;

export const MoviesList: FC<MoviesListProps> = ({movies}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <Animated.FlatList
      data={movies}
      itemLayoutAnimation={Layout.stiffness(200)}
      keyExtractor={({id}) => id.toString()}
      renderItem={renderCard}
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor="red"
          tintColor="transparent"
        >
          {refreshing ? <Loader size={loaderSize} /> : null}
        </RefreshControl>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s3,
  },
  loader: {
    position: 'absolute',
    left: '50%',
    paddingVertical: Spacings.s3,
    transform: [{translateX: -loaderSize / 2}],
  },
});
