import React from 'react';
import {ScrollView} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Text, Image, View} from 'react-native-ui-lib';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../../navigation/types';
import {getSharedMovieImageId} from '../../navigation/getSharedImageId';

type MovieScreenProps = StackScreenProps<RootStackParams, 'Movie'>;

const Movie = ({route}: MovieScreenProps) => {
  const {movie} = route.params;

  return (
    <ScrollView>
      <SharedElement id={getSharedMovieImageId(movie.id)}>
        <Image source={{uri: movie.image}} style={{height: 400}} />
      </SharedElement>

      <View padding-s5>
        <Text $textNeutralHeavy text80BO marginT-s2>
          {movie.date}
        </Text>
        <Text $textDefault text70 marginT-s2>
          {movie.description}
        </Text>
      </View>
    </ScrollView>
  );
};

Movie.sharedElements = (route) => {
  const {movie} = route.params;
  return [
    {
      id: getSharedMovieImageId(movie.id),
      animation: 'move',
      resize: 'clip',
    },
  ];
};

export default Movie;
