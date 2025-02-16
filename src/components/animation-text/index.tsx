import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import React, { useEffect, useMemo, useRef } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface Props {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
}
const AnimationTypingText: React.FC<Props> = ({ text, textStyle, wrapperStyle }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const theme = useTheme();
  const cursorOpacity = useSharedValue(1);
  const cursorStyle = useAnimatedStyle(() => {
    return { opacity: cursorOpacity.value };
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentText = useMemo(() => text.slice(0, currentIndex), [currentIndex]);
  // styles
  const defaultTextStyle = useMemo<TextStyle>(
    () => ({
      ...theme.fonts.titleMedium,
    }),
    [],
  );

  // lifecycle
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 20);

    if (currentIndex === text.length) {
      clearInterval(timeoutRef.current as NodeJS.Timeout);
    }
    cursorOpacity.value = withRepeat(withSequence(withTiming(0, { duration: 500 }), withTiming(1, { duration: 500 })), -1, true);

    return () => {
      clearInterval(timeoutRef.current as NodeJS.Timeout);
    };
  }, [currentIndex]);

  return (
    <View className="p-4" style={wrapperStyle}>
      <Animated.View
        className={'px-4 py-3 rounded-[10px] flex-row'}
        style={{ borderWidth: currentIndex === text.length ? 1.5 : 1, borderStyle: currentIndex === text.length ? 'solid' : 'dashed', borderColor: theme.colors.primary }}>
        <Animated.Text style={[defaultTextStyle, textStyle]}>
          {currentText}
          <Animated.View>
            <Animated.Text className={'top-1'} style={[defaultTextStyle, cursorStyle]}>
              {' |'}
            </Animated.Text>
          </Animated.View>
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default AnimationTypingText;
