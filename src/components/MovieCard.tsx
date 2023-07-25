import {AntDesign} from '@expo/vector-icons';
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Card, View, Text} from 'react-native-ui-lib';

import {Movie} from '../store/movies/types';

export type MovieCardProps = Movie & {
  index: number;
  onPress?: () => void;
  onFavoritePress?: () => void;
};

const {width} = Dimensions.get('screen');

export const MovieCard = ({
  title,
  description,
  image,
  date,
  index,
  isFavorite,
  onPress,
  onFavoritePress,
}: MovieCardProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAnim = useRef(new Animated.Value(-width)).current;
  // const leftAnim = useRef(new Animated.Value(-200));

  useEffect(() => {
    // Animated.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 1000,
    //   delay: index * 300,
    //   useNativeDriver: true,
    // }).start();
    // Animated.timing(translateXAnim, {
    //   toValue: 0,
    //   duration: 1000,
    //   delay: index * 300,
    //   useNativeDriver: true,
    // }).start();

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        delay: index * 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnim, {
        toValue: 0,
        duration: 1000,
        delay: index * 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateXAnim, fadeAnim, index]);

  const onFavoritePressHandler = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnim, {
        toValue: width,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => onFavoritePress());
  }, [fadeAnim, onFavoritePress, translateXAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [
          {
            translateX: translateXAnim,
          },
        ],
      }}
    >
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
        <TouchableOpacity onPress={onFavoritePressHandler}>
          <View center paddingH-s5 height="100%">
            <AntDesign
              name={isFavorite ? 'star' : 'staro'}
              size={32}
              color="red"
            />
          </View>
        </TouchableOpacity>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 115,
    height: '100%',
  },
});
