import Animated, { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import React, { useMemo } from 'react';

import { ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

interface DotProps {
  index: number;
  contentOffsetX: SharedValue<number>;
  itemWidth: number;
}

const Dot: React.FC<DotProps> = ({ index, contentOffsetX, itemWidth }) => {
  const theme = useTheme();
  const dotStyle = useMemo<ViewStyle>(
    () => ({
      height: 10,
      margin: 5,
      backgroundColor: theme.colors.primary,
      borderRadius: 15,
    }),
    [],
  );
  const dotAnimatedStyle = useAnimatedStyle(() => {
    const progress = contentOffsetX.value / itemWidth;
    const dotWidth = interpolate(progress, [index - 1, index, index + 1], [10, 16, 10], 'clamp');
    const opacity = interpolate(progress, [index - 1, index, index + 1], [0.5, 1, 0.5], 'clamp');

    return {
      width: dotWidth,
      opacity: opacity,
    };
  }, []);

  return <Animated.View style={[dotStyle, dotAnimatedStyle]} />;
};

export default Dot;
