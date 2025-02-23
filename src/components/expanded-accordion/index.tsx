import Animated, { measure, runOnUI, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Divider, Text, useTheme } from 'react-native-paper';
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import Chevron from './Chevron';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
}
const ExpandedAccordion: React.FC<Props> = ({ children, title, titleStyle, wrapperStyle }) => {
  const theme = useTheme();
  const aniamtedRef = useAnimatedRef<Animated.View>();
  const expanded = useSharedValue(false);
  const contentsHeight = useSharedValue(0);
  const childrenAnimationStyle = useAnimatedStyle(() => ({
    height: contentsHeight.value,
  }));

  return (
    <View className="m-[10px] rounded-xl border-[0.5px] overflow-hidden" style={wrapperStyle}>
      <TouchableOpacity
        className="p-4 flex-row items-center justify-between"
        onPress={() => {
          expanded.value = !expanded.value;

          if (expanded.value) {
            contentsHeight.value = withTiming(0, { duration: 300 });
          } else {
            if (aniamtedRef.current) {
              runOnUI(() => {
                'worklet';
                contentsHeight.value = withTiming(measure(aniamtedRef)!.height, { duration: 300 });
              })();
            }
          }
        }}>
        <Text style={[{ ...theme.fonts.labelMedium }, titleStyle]}>{title}</Text>
        <Chevron expanded={expanded} />
      </TouchableOpacity>
      <Divider />
      <Animated.View style={childrenAnimationStyle}>
        <Animated.View ref={aniamtedRef} className={'absolute w-[100%] top-0 p-4'}>
          {children}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default ExpandedAccordion;
