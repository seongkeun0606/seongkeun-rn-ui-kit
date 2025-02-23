import Animated, { SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import React from 'react';
import VectorIcons from '../vector-icons';
import { useTheme } from 'react-native-paper';

const Chevron: React.FC<{ expanded: SharedValue<boolean> }> = ({ expanded }) => {
  const theme = useTheme();
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(expanded.value ? '180deg' : '0deg', { duration: 300 }),
        },
      ],
    };
  });

  return (
    <Animated.View style={iconStyle}>
      <VectorIcons color={theme.colors.primary} iconSource="MaterialCommunityIcons" name={expanded.value ? 'chevron-up' : 'chevron-down'} />
    </Animated.View>
  );
};

export default Chevron;
