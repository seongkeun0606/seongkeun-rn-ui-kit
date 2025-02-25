import { StyleProp, ViewStyle } from 'react-native';

import { IconSource } from 'react-native-paper/src/components/Icon';
import { createRef } from 'react';

export type ExpandableDirection = 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT';
export interface MainButtonProps {
  icon: IconSource;
  expandedIcon?: IconSource;
  size?: number;
  iconColor?: string;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
export interface ExpandableIconButtonProps {
  icon: IconSource;
  size?: number;
  bgColor?: string;
  iconColor?: string;
  onPress?: () => void;
}

export interface ExpandableButtonAction {
  setExpanded: (value: boolean) => void;
}

export const MAP_INPUT_ICONBUTTON_REF = createRef<ExpandableButtonAction>();
