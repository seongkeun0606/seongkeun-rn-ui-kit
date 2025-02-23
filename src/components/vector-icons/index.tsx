import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import React from 'react';
import { useMemo } from 'react';
import { useTheme } from 'react-native-paper';

export type VectorIconSource =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'Fontisto'
  | 'Foundation'
  | 'FontAwesome5'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons';

type VectorIconMode = 'contained' | 'outlined' | 'text';
export interface GIconProps {
  iconSource: VectorIconSource;
  name: string;
  mode?: VectorIconMode;
  size?: number;
  color?: string;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle> | undefined;
}
const VectorIcons: React.FC<GIconProps> = ({ style, name, mode = 'text', iconSource, size = 25, color, bgColor, iconStyle }) => {
  const theme = useTheme();
  const iconColor = useMemo(() => {
    return color ? color : mode === 'contained' ? theme.colors.onPrimary : theme.colors.onPrimary;
  }, [color, mode]);
  const wrapperStyle = useMemo<TextStyle>(
    () => ({
      padding: mode === 'contained' || mode === 'outlined' ? 3 : 0,
      borderWidth: mode === 'outlined' ? 1 : 0,
      borderColor: mode === 'outlined' ? theme.colors.outlineVariant : 'transparent',
      borderRadius: 50,
      backgroundColor: mode === 'contained' ? bgColor || theme.colors.primary : 'transparent',
    }),
    [],
  );

  return (
    <View style={[wrapperStyle, style]}>
      {iconSource === 'AntDesign' && <AntDesign name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'Entypo' && <Entypo name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'EvilIcons' && <EvilIcons name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'Feather' && <Feather name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'FontAwesome' && <FontAwesome name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'FontAwesome5' && <FontAwesome5 name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'Fontisto' && <Fontisto name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'Foundation' && <Foundation name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'Ionicons' && <Ionicons name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'MaterialIcons' && <MaterialIcons name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'Octicons' && <Octicons name={name} color={iconColor} size={size} style={iconStyle} />}
      {iconSource === 'SimpleLineIcons' && <SimpleLineIcons name={name} color={iconColor} size={size} style={iconStyle} />}
    </View>
  );
};

export default VectorIcons;
