import React from 'react';
import {ScrollView} from 'react-native';
import {Text, Image, View} from 'react-native-ui-lib';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../../navigation/types';

type MovieScreenProps = StackScreenProps<RootStackParams, 'Movie'>;

const Movie = ({route}: MovieScreenProps) => {
  const {movie} = route.params;

  return (
    <ScrollView>
      <Image source={{uri: movie.image}} style={{height: 400}} />

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

export default Movie;
