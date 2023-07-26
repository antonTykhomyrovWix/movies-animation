import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Spacings, View} from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';

type LoaderProps = {
  size: number;
};

export const Loader: FC<LoaderProps> = ({size}) => (
  <View
    style={{
      ...styles.loader,
      transform: [{translateX: -size / 2}],
    }}
  >
    <LottieView
      autoPlay
      style={{
        width: size,
        height: size,
      }}
      source={require('../assets/loading.json')}
    />
  </View>
);

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: '50%',
    paddingVertical: Spacings.s3,
  },
});
