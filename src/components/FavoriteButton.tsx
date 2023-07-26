import {AntDesign} from '@expo/vector-icons';
import React, {FC, useCallback, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSequence,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';
import {View} from 'react-native-ui-lib';

import {useDelayedValue} from '../hooks/useDelayedValue';

export type FavoriteButtonProps = {
  isFavorite: boolean;
  onFavoritePress?: () => void;
};

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);
const animationConfig: WithTimingConfig = {duration: 200};
const defaultAnimatedStyle = {
  transform: [
    {
      scale: 1,
    },
    {
      rotate: '0deg',
    },
  ],
};

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  isFavorite,
  onFavoritePress,
}) => {
  const isInitialFavorite = useRef(true);
  // we want to change color of the icon after first 'scale' animation(when it was scaled to 0)
  const isFavoriteDelayed = useDelayedValue(
    isFavorite,
    animationConfig.duration
  );

  const style = useAnimatedStyle(() => {
    if (isInitialFavorite.current) {
      // return default 'scale' and 'rotate' values to avoid different animation on first press
      return defaultAnimatedStyle;
    }

    const scale = withSequence(withTiming(0), withTiming(1.2), withTiming(1));
    const rotate = withSequence(withTiming('-120deg'), withTiming('0deg'));

    return {
      transform: [{scale}, {rotate}],
    };
  }, [isFavorite]);

  const onPress = useCallback(() => {
    isInitialFavorite.current = false;
    onFavoritePress();
  }, [onFavoritePress]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View center paddingH-s5 height="100%">
        <AnimatedAntDesign
          style={style}
          name={isFavoriteDelayed ? 'star' : 'staro'}
          size={32}
          color="red"
        />
      </View>
    </TouchableOpacity>
  );
};
