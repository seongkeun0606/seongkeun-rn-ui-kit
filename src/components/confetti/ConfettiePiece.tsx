import Animated, { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Dimensions, ViewStyle } from 'react-native';
import React, { useMemo } from 'react';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

interface ConfettiPieceProps {
  progress: SharedValue<number>;
  color: string;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ progress, color }) => {
  const startX = useMemo(() => randomBetween(0, SCREEN_WIDTH), []);
  const endX = useMemo(() => randomBetween(0, SCREEN_WIDTH), []);
  const rotateStart = useMemo(() => randomBetween(0, 360), []);
  const rotateEnd = useMemo(() => rotateStart + randomBetween(180, 1080), []);
  const delay = useMemo(() => randomBetween(0, 0.8), []);
  // styles
  const animatedStyle = useAnimatedStyle(() => {
    const localProgress = progress.value < delay ? 0 : (progress.value - delay) / (1 - delay);
    const clampedProgress = localProgress > 1 ? 1 : localProgress;

    const x = interpolate(clampedProgress, [0, 1], [startX, endX], 'clamp');
    const y = interpolate(clampedProgress, [0, 1], [-50, SCREEN_HEIGHT + 50], 'clamp');
    const rotate = interpolate(clampedProgress, [0, 1], [rotateStart, rotateEnd], 'clamp');

    return {
      transform: [{ translateX: x }, { translateY: y }, { rotateZ: `${rotate}deg` }],
      backgroundColor: color,
    };
  });
  const confettiPieceStyle = useMemo<ViewStyle>(
    () => ({
      position: 'absolute',
      width: 8,
      height: 8,
      borderRadius: 2,
    }),
    [],
  );
  return <Animated.View style={[confettiPieceStyle, animatedStyle]} />;
};

export default ConfettiPiece;
