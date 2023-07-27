import {MutableRefObject} from 'react';
import Lottie from 'lottie-react-native';

export type TabBarIcon = {
  focused: boolean;
  color: string;
  size: number;
  ref: MutableRefObject<Lottie>;
};
