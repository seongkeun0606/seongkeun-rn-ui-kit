import { List, Text, useTheme } from 'react-native-paper';

import ExpandedAccordion from 'root/components/expanded-accordion';
import React from 'react';
import Slider from 'root/components/slider/Slider';
import { View } from 'react-native';

const HomeLayout: React.FC = () => {
  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold">Expanded Accordion</Text>
      <ExpandedAccordion title="Title 1">
        <List.Item title="List 1" />
        <List.Item title="List 2" />
        <List.Item title="List 3" />
        <List.Item title="List 4" />
      </ExpandedAccordion>
      <Text className="text-xl font-bold">Slider</Text>
      <View className="h-4" />
      <SliderWithLabel />
    </View>
  );
};

export default HomeLayout;

const SliderWithLabel: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState(0);

  return (
    <>
      <Text>{`current (${sliderValue}%)`}</Text>
      <View className="h-4" />
      <Slider
        maxValue={100}
        onChange={(value) => {
          setSliderValue(value);
        }}
        onComplete={(value) => {
          setSliderValue(value);
        }}
      />
    </>
  );
};
