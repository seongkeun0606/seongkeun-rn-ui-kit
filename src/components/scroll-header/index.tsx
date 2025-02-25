import Animated, { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { StyleProp, ViewStyle } from 'react-native';

import React from 'react';

interface Props {
  scrollY: SharedValue<number>;
  children?: React.ReactNode;
  range?: {
    inputRange: number[];
    outputRange: number[];
  };
  wrapperStyle?: StyleProp<ViewStyle>;
}
const ScrollHeader: React.FC<Props> = ({ scrollY, children, range, wrapperStyle }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(scrollY.value, [0, 250], range?.outputRange || [250, 0], 'clamp');
    const opacity = interpolate(scrollY.value, range?.inputRange || [0, 250], [1, 0], 'clamp');
    return {
      height,
      opacity,
    };
  }, [scrollY.value]);
  return <Animated.View style={[{ overflow: 'hidden' }, wrapperStyle, animatedStyle]}>{children}</Animated.View>;
};

export default ScrollHeader;
