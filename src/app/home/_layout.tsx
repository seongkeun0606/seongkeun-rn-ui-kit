import { List, Text, useTheme } from 'react-native-paper';

import ExpandedAccordion from 'root/components/expanded-accordion';
import React from 'react';
import { View } from 'react-native';

const HomeLayout: React.FC = () => {
  const theme = useTheme();
  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold">Expanded Accordion</Text>
      <ExpandedAccordion title="Title 1">
        <List.Item title="List 1" />
        <List.Item title="List 2" />
        <List.Item title="List 3" />
        <List.Item title="List 4" />
      </ExpandedAccordion>
    </View>
  );
};

export default HomeLayout;
