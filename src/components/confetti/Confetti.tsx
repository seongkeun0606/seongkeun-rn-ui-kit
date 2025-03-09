import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import React, { useEffect, useMemo } from 'react';

import ConfettiPiece from './ConfettiePiece';
import { Easing } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

interface ConfettiProps {
  count?: number;
  trigger?: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ count = 150, trigger }) => {
  const progress = useSharedValue(0);
  const confettiStyle = useMemo<ViewStyle>(
    () => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    [],
  );

  // lifecycle
  useEffect(() => {
    if (trigger) {
      progress.value = 0;
      progress.value = withTiming(1, {
        duration: 2000,
        easing: Easing.out(Easing.exp),
      });
    }
  }, [trigger]);

  const confettiColors = ['#FF3B30', '#FF9500', '#FFCC00', '#4CD964', '#5AC8FA', '#007AFF', '#5856D6'];

  const pieces = [];
  for (let i = 0; i < count; i++) {
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    pieces.push(<ConfettiPiece key={i} progress={progress} color={color} />);
  }

  return (
    <Animated.View style={confettiStyle} pointerEvents="none">
      {pieces}
    </Animated.View>
  );
};

export default Confetti;
