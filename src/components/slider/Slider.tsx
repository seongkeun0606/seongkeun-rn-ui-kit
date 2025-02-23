import Animated, { SharedValue, clamp, runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import React, { useEffect, useMemo } from 'react';
import { View, ViewStyle, useWindowDimensions } from 'react-native';

import { SliderThumb } from './types';
import { useTheme } from 'react-native-paper';

interface Props {
  value?: number;
  maxValue?: number;
  step?: number;
  barHeight?: number;
  barColor?: string;
  thumb?: Partial<SliderThumb>;
  onChange: (value: number) => void;
  onComplete?: (value: number) => void;
}

const Slider: React.FC<Props> = ({ value, maxValue = 100, step, barHeight, barColor, thumb, onChange, onComplete }) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const sliderWidth = useMemo(() => {
    return width - 40;
  }, [width]);
  const previousValue = useSharedValue(0);

  // styles
  const wrapperStyle = useMemo<ViewStyle>(
    () => ({
      width: sliderWidth,
      height: barHeight || 15,
      borderRadius: 10,
      justifyContent: 'center',
    }),
    [width, theme.colors.primaryContainer],
  );
  const barStyle = useMemo<ViewStyle>(
    () => ({
      height: barHeight || 15,
      backgroundColor: barColor || theme.colors.primary,
      borderRadius: 12,
    }),
    [],
  );
  const sliderAniamteStyle = useAnimatedStyle(
    () => ({
      width: translateX.value,
    }),
    [translateX.value],
  );
  const thumbStyle = useMemo<ViewStyle>(
    () => ({
      position: 'absolute',
      width: thumb?.size || 25,
      height: thumb?.size || 25,
      borderRadius: 50,
      borderWidth: 0.5,
      borderColor: 'gray',
      backgroundColor: thumb?.color || '#ffffff',
      elevation: 3,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      left: -(thumb?.size || 20) / 2,
    }),
    [],
  );
  const thumbAniamtedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  }, [translateX.value]);

  // gesture
  const sliderGesture = Gesture.Pan()
    .maxPointers(1)
    .minPointers(1)
    .onTouchesUp((e) => {
      const x = e.allTouches[0].x;

      translateX.value = clamp(x, 0, sliderWidth);
    })
    .onTouchesMove((e) => {
      const x = e.allTouches[0].x;
      translateX.value = clamp(x, 0, sliderWidth);
      const updatedValue = updateSliderValue(translateX.value, sliderWidth, maxValue, step);
      if (updatedValue !== previousValue.value) {
        previousValue.value = updatedValue;
        runOnJS(onChange)(updatedValue);
      }
    })
    .onFinalize(() => {
      if (onComplete) {
        runOnJS(onComplete)(updateSliderValue(translateX.value, sliderWidth, maxValue, step));
      }
    });

  useEffect(() => {
    if (value) {
      translateX.value = Math.round((value / maxValue) * width);
    }
  }, [value]);

  return (
    <View className="bg-gray-200" style={wrapperStyle}>
      <GestureDetector gesture={sliderGesture}>
        <View className="justify-center">
          <Animated.View style={[barStyle, sliderAniamteStyle]}></Animated.View>
          <Animated.View style={[thumbStyle, thumbAniamtedStyle]}></Animated.View>
        </View>
      </GestureDetector>
    </View>
  );
};

export default Slider;

const updateSliderValue = (x: number, sliderWidth: number, maxValue: number, step?: number) => {
  'worklet';
  let updatedValue = 0;
  if (step && step > 0) {
    updatedValue = Math.round(((x / sliderWidth) * maxValue) / step) * step;
  } else {
    updatedValue = Math.round((x / sliderWidth) * maxValue);
  }

  return updatedValue;
};
