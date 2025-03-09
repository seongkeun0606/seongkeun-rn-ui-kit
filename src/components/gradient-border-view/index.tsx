import React, { useMemo, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

interface Props {
  children: React.ReactNode;
  borderWidth?: number;
  borderRadius?: number;
  gradientColors?: string[];
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
}
const GradientBorderView: React.FC<Props> = ({ children, borderWidth = 2, borderRadius = 8, gradientColors = ['red', 'blue'], style, wrapperStyle }) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const gradientId = 'graident-border-view';
  // style
  const svgStyle = useMemo<ViewStyle>(
    () => ({
      position: 'absolute',
      top: 0,
      left: 0,
    }),
    [],
  );
  const childrenWrapperStyle = useMemo<ViewStyle>(
    () => ({
      borderRadius: borderRadius,
      padding: 12,
    }),
    [],
  );

  return (
    <View style={[{ position: 'relative' }, style]}>
      {layout.width > 0 && layout.height > 0 && (
        <Svg width={layout.width} height={layout.height} style={svgStyle}>
          <Defs>
            <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
              {gradientColors.map((color, index) => (
                <Stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
              ))}
            </LinearGradient>
          </Defs>
          <Rect
            x={borderWidth / 2}
            y={borderWidth / 2}
            width={layout.width - borderWidth - 2}
            height={layout.height - borderWidth - 2}
            rx={borderRadius}
            ry={borderRadius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={borderWidth}
          />
        </Svg>
      )}
      <View
        style={childrenWrapperStyle}
        onLayout={(e) => {
          setLayout(e.nativeEvent.layout);
        }}>
        {children}
      </View>
    </View>
  );
};

export default GradientBorderView;
