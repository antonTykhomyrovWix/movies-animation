import {AntDesign} from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Card, View, Text} from 'react-native-ui-lib';

import {Movie} from '../store/movies/types';

export type MovieCardProps = Movie & {
  onPress?: () => void;
  onFavoritePress?: () => void;
};

export const MovieCard = ({
  title,
  description,
  image,
  date,
  isFavorite,
  onPress,
  onFavoritePress,
}: MovieCardProps) => (
  <Card
    row
    br10
    marginB-s4
    height={160}
    onPress={onPress}
    bg-$backgroundElevated
  >
    <Card.Section imageSource={{uri: image}} imageStyle={styles.image} />
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
    <TouchableOpacity onPress={onFavoritePress}>
      <View center paddingH-s5 height="100%">
        <AntDesign name={isFavorite ? 'star' : 'staro'} size={32} color="red" />
      </View>
    </TouchableOpacity>
  </Card>
);

const styles = StyleSheet.create({
  image: {
    width: 115,
    height: '100%',
  },
});
