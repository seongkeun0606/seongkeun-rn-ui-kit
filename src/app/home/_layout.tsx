import { Button, List, Text } from 'react-native-paper';
import React, { useState } from 'react';

import { Confetti } from 'root/components/confetti';
import ExpandableButtons from 'root/components/expanded-iconbutton/Buttons';
import ExpandedAccordion from 'root/components/expanded-accordion';
import Slider from 'root/components/slider/Slider';
import VectorIcons from 'root/components/vector-icons';
import { View } from 'react-native';

const HomeLayout: React.FC = () => {
  const [trigger, setTrigger] = useState(false);

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
      <View className="h-4" />
      <Text className="text-xl font-bold">Expandable Button</Text>
      <View className="justify-end items-center">
        <Text>direction: right</Text>
        <ExpandableButtons
          direction="RIGHT"
          mainButton={{
            icon: () => <VectorIcons name="plus" color="white" iconSource={'MaterialCommunityIcons'} />,
            size: 25,
          }}
          expandableButtons={[
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
          ]}
        />
      </View>
      <View className="justify-end items-center">
        <Text>direction: left</Text>
        <ExpandableButtons
          direction="LEFT"
          mainButton={{
            icon: () => <VectorIcons name="plus" color="white" iconSource={'MaterialCommunityIcons'} />,
            size: 25,
          }}
          expandableButtons={[
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
          ]}
        />
      </View>
      <View className="justify-end items-center">
        <Text>direction: bottom</Text>
        <ExpandableButtons
          direction="BOTTOM"
          mainButton={{
            icon: () => <VectorIcons name="plus" color="white" iconSource={'MaterialCommunityIcons'} />,
            size: 25,
          }}
          expandableButtons={[
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
            {
              icon: 'minus',
              bgColor: 'white',
              iconColor: 'black',
              size: 20,
            },
          ]}
        />
      </View>
      <View className="justify-end">
        <Text>Confetti</Text>
        <Button
          onPress={() => {
            setTrigger(true);
            setTimeout(() => {
              setTrigger(false);
            }, 500);
          }}>
          Show Confetti
        </Button>
      </View>
      <Confetti trigger={trigger} count={300} />
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
