import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from 'react-native-ui-lib';

type TransitionTabBarIconProps = {
  xOffset: number;
};

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export const TransitionTabBarIcon: FC<TransitionTabBarIconProps> = ({
  xOffset,
}) => {
  const animatedStyles = useAnimatedStyle(
    () => ({
      transform: [
        {translateX: withDelay(300, withTiming(xOffset, {duration: 200}))},
      ],
    }),
    [xOffset]
  );

  return (
    <AnimatedSvg
      width="110"
      height="60"
      viewBox="0 0 110 60"
      style={[styles.svg, animatedStyles]}
    >
      <Path
        fill={Colors.$backgroundGeneralLight}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
      />
    </AnimatedSvg>
  );
};

const styles = StyleSheet.create({
  svg: {
    position: 'absolute',
  },
});
