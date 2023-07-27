import React, {FC, useEffect, useMemo, useState} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View} from 'react-native-ui-lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LayoutChangeEvent, StyleSheet, Platform} from 'react-native';

import {TransitionTabBarIcon} from './icons';
import {TabBarItem} from './TabBarItem';

export const AnimatedTabBar: FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const {bottom} = useSafeAreaInsets();
  const {routes, index: activeIndex} = state;
  const [transitionIconXOffset, setTransitionIconXOffset] = useState(0);
  const [layoutMap, setLayoutMap] = useState(new Map<number, number>());

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    const newLayoutMap = new Map(
      layoutMap.set(index, event.nativeEvent.layout.x)
    );
    setLayoutMap(newLayoutMap);
  };

  useEffect(() => {
    if (layoutMap.size === routes.length) {
      const xOffset = layoutMap.get(activeIndex);
      setTransitionIconXOffset(xOffset ? xOffset - 25 : 0);
    }
  }, [activeIndex, layoutMap, routes.length]);

  const paddingBottom = useMemo(
    () =>
      Platform.select({
        ios: bottom,
        android: bottom + 20,
        default: bottom,
      }),
    [bottom]
  );

  return (
    <View style={[styles.tabBar, {paddingBottom}]}>
      <TransitionTabBarIcon xOffset={transitionIconXOffset} />
      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];

          return (
            <TabBarItem
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
  tabBarContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
