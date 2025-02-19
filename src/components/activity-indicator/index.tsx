import Animated, { Easing, useAnimatedProps, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';
import React, { useEffect } from 'react';

import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface Props {
  size?: number;
  strokeWidth?: number;
  progressColor?: string;
  bgColor?: string;
  animationDuration?: number;
}

const ProgressIndicator: React.FC<Props> = ({ size = 100, strokeWidth = 10, progressColor, bgColor, animationDuration = 1500 }) => {
  const theme = useTheme();
  const effectiveProgressColor = progressColor || theme.colors.primary;
  const effectiveBgColor = bgColor || theme.colors.primaryContainer;
  const radius = (size - strokeWidth) / 2;
  const perimeter = 2 * Math.PI * radius;
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(360, { duration: animationDuration, easing: Easing.linear }), -1, false);
  }, [animationDuration, progress]);

  const animatedProps = useAnimatedProps(() => {
    const offset = perimeter - (perimeter * progress.value) / 360;
    return {
      strokeDashoffset: offset,
    };
  });

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Svg width={size} height={size}>
        <Circle cx={size / 2} cy={size / 2} r={radius} stroke={effectiveBgColor} strokeWidth={strokeWidth} fill="transparent" />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={effectiveProgressColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={perimeter}
          animatedProps={animatedProps}
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        />
      </Svg>
    </View>
  );
};

export default ProgressIndicator;
