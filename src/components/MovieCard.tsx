import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Animated, {FadeInLeft, FadeOutRight} from 'react-native-reanimated';
import {Card, View, Text} from 'react-native-ui-lib';

import {Movie} from '../store/movies/types';
import {FavoriteButton} from './FavoriteButton';
import {getSharedMovieImageId} from '../navigation/getSharedImageId';

export type MovieCardProps = Movie & {
  index: number;
  onPress?: () => void;
  onFavoritePress?: () => void;
};

export const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  description,
  image,
  date,
  index,
  isFavorite,
  onPress,
  onFavoritePress,
}) => (
  <Animated.View entering={FadeInLeft.delay(index * 50)} exiting={FadeOutRight}>
    <Card
      row
      br10
      marginB-s4
      height={160}
      onPress={onPress}
      bg-$backgroundElevated
    >
      <SharedElement id={getSharedMovieImageId(id)}>
        <Card.Section imageSource={{uri: image}} imageStyle={styles.image} />
      </SharedElement>
      <View padding-s4 flex centerV>
        <Text text70 $textGeneral numberOfLines={1}>
          {title}
        </Text>
        <Text marginV-s2 text80 $textDefault numberOfLines={3}>
          {description}
        </Text>
        <Text text90 $textNeutral>
          {date}
        </Text>
      </View>
      <FavoriteButton
        onFavoritePress={onFavoritePress}
        isFavorite={isFavorite}
      />
    </Card>
  </Animated.View>
);

const styles = StyleSheet.create({
  image: {
    width: 115,
    height: '100%',
  },
});
