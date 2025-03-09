import Animated, { SharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { ExpandableDirection, ExpandableIconButtonProps } from './types';
import { IconButton, Surface } from 'react-native-paper';

import React from 'react';

const CONFIG = {
  duration: 1000,
  overshootClamping: true,
  dampingRatio: 0.85,
};

const AniamtedSurface = Animated.createAnimatedComponent(Surface);

interface Props extends ExpandableIconButtonProps {
  index: number;
  isExpanded: SharedValue<boolean>;
  direction: ExpandableDirection;
  offset?: number;
}

const ExpandableIconButton: React.FC<Props> = ({ isExpanded, index, icon, bgColor, direction, iconColor, size, offset, onPress }) => {
  const aniamtedStyle = useAnimatedStyle(() => {
    const buttonOffset = offset ? offset : 55;
    const moveValue =
      isExpanded.value && (direction === 'TOP' || direction === 'LEFT')
        ? -(buttonOffset * index)
        : isExpanded.value && (direction === 'RIGHT' || direction === 'BOTTOM')
          ? buttonOffset * index
          : 0;
    const translateValue = withSpring(moveValue, CONFIG);

    return {
      transform: [
        { translateX: direction === 'LEFT' || direction === 'RIGHT' ? translateValue : 0 },
        { translateY: direction === 'TOP' || direction === 'BOTTOM' ? translateValue : 0 },
      ],
    };
  }, []);

  return (
    <AniamtedSurface className={'rounded-full'} elevation={1} style={aniamtedStyle}>
      <IconButton style={{ margin: 0, backgroundColor: bgColor }} icon={icon} iconColor={iconColor} size={size} onPress={onPress} />
    </AniamtedSurface>
  );
};

export default ExpandableIconButton;
