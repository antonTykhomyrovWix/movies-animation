import React, {FC, useEffect, useRef} from 'react';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {StyleSheet, LayoutChangeEvent, Pressable} from 'react-native';
import {Text} from 'react-native-ui-lib';
import Lottie from 'lottie-react-native';

import {TabBarIcon} from './icons/types';

type TabBarItemProps = Readonly<{
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
}>;

const iconSize = 40;

export const TabBarItem: FC<TabBarItemProps> = ({
  active,
  options,
  onLayout,
  onPress,
}) => {
  const ref = useRef<Lottie>(null);

  useEffect(() => {
    if (active && ref?.current) {
      ref.current.play();
    }
  }, [active]);

  const animatedItemCircleStyles = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 300}),
        },
      ],
    }),
    [active]
  );

  const animatedIconContainerStyles = useAnimatedStyle(
    () => ({
      opacity: withTiming(active ? 1 : 0.5, {duration: 200}),
    }),
    [active]
  );

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.item}>
      <Animated.View style={[styles.itemCircle, animatedItemCircleStyles]} />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {options.tabBarIcon ? (
          options.tabBarIcon({
            ref,
            size: iconSize,
            focused: active,
            color: 'red',
          } as TabBarIcon)
        ) : (
          <Text>?</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  itemCircle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
