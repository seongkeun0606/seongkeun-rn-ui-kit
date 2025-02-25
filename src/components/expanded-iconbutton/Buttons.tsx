import { ExpandableDirection, ExpandableIconButtonProps, MainButtonProps } from './types';
import React, { useCallback, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { runOnJS, runOnUI, useSharedValue } from 'react-native-reanimated';

import ExpandableIconButton from './ExpandableButton';
import { IconButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper/src/core/theming';

interface Props {
  mainButton: MainButtonProps;
  expandableButtons: ExpandableIconButtonProps[];
  wrapperStyle?: StyleProp<ViewStyle>;
  direction?: ExpandableDirection;
  offset?: number;
}
const ExpandableButtons: React.FC<Props> = ({ mainButton, expandableButtons, wrapperStyle, direction, offset }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const isExpanded = useSharedValue(false);

  // actions
  const onExpand = useCallback(() => {
    if (!expanded) {
      setExpanded(true);
      runOnUI(() => {
        isExpanded.value = true;
      })();
    } else {
      isExpanded.value = false;
      runOnJS(() => {
        setTimeout(() => {
          setExpanded(false);
        }, 500);
      })();
    }
  }, [expanded, isExpanded]);

  return (
    <View className="justify-center items-center" style={wrapperStyle}>
      {expanded &&
        expandableButtons.map((button, index) => (
          <View className="absolute" key={index}>
            <ExpandableIconButton
              key={index}
              index={index + 1}
              icon={button.icon}
              size={button.size}
              bgColor={button.bgColor}
              iconColor={button.iconColor}
              isExpanded={isExpanded}
              direction={direction ? direction : 'TOP'}
              offset={offset}
              onPress={button.onPress}
            />
          </View>
        ))}
      <IconButton
        size={mainButton.size || 25}
        style={[{ backgroundColor: mainButton.bgColor || theme.colors.primary }, mainButton.style]}
        icon={isExpanded.value && mainButton.expandedIcon ? mainButton.expandedIcon : mainButton.icon}
        iconColor={mainButton.iconColor}
        onPress={() => {
          onExpand();
          if (mainButton?.onPress) {
            mainButton?.onPress();
          }
        }}
      />
    </View>
  );
};

export default ExpandableButtons;
