import Animated, { useAnimatedProps, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { useTheme } from 'react-native-paper';

interface Props {
  progress?: number;
  barHeight?: number;
  infinite?: boolean;
  progressColor?: string;
  bgColor?: string;
}

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const ProgressBar: React.FC<Props> = ({ progress = 0, barHeight = 15, infinite, progressColor, bgColor }) => {
  const theme = useTheme();
  const progressShared = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({
    width: progressShared.value,
  }));

  useEffect(() => {
    if (infinite) {
      progressShared.value = withRepeat(withSequence(withTiming(100, { duration: 1500 }), withTiming(0, { duration: 0 })), -1, false);
    } else {
      progressShared.value = withTiming(progress, { duration: 1000 });
    }
  }, [progress, infinite]);

  return (
    <View style={[styles.container, { backgroundColor: bgColor ? bgColor : progressColor ? 'lightgrey' : theme.colors.primaryContainer }]}>
      <Svg height="15" width="100%" viewBox="0 0 100 15" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={progressColor || theme.colors.primary} stopOpacity="0.4" />
            <Stop offset="0.5" stopColor={progressColor || theme.colors.primary} stopOpacity="0.6" />
            <Stop offset="1" stopColor={progressColor || theme.colors.primary} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <AnimatedRect x="0" y="0" animatedProps={animatedProps} height={barHeight} fill="url(#grad)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 15,
  },
});

export default ProgressBar;
