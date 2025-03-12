import Carousel from 'root/components/carousel/Carousel';
import { List } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';

const CarouselLayout: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Carousel data={dummyListData} renderItem={({ item }) => <List.Item key={item.id} title={item.title} />} />
    </View>
  );
};

export default CarouselLayout;

const dummyListData = [
  {
    id: 1,
    title: 'List 1',
  },
  {
    id: 2,
    title: 'List 2',
  },
  {
    id: 3,
    title: 'List 3',
  },
  {
    id: 4,
    title: 'List 4',
  },
  {
    id: 5,
    title: 'List 5',
  },
];
