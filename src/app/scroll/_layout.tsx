import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Divider, List, Text, useTheme } from 'react-native-paper';
import React, { useMemo } from 'react';

import ScrollHeader from 'root/components/scroll-header';
import { View } from 'react-native';

const ScrollLayout: React.FC = () => {
  const theme = useTheme();
  const dummyList = useMemo(() => {
    return getDummyList();
  }, []);
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollHeader scrollY={scrollY} wrapperStyle={{ padding: 12, backgroundColor: theme.colors.primaryContainer }}>
        <Text>Scroll Header1</Text>
        <Text>Scroll Header2</Text>
        <Text>Scroll Header3</Text>
        <Text>Scroll Header4</Text>
        <Text>Scroll Header5</Text>
        <Text>Scroll Header6</Text>
        <Text>Scroll Header7</Text>
        <Text>Scroll Header8</Text>
        <Text>Scroll Header9</Text>
        <Text>Scroll Header10</Text>
        <Text>Scroll Header11</Text>
        <Text>Scroll Header12</Text>
        <Text>Scroll Header13</Text>
      </ScrollHeader>
      <Animated.FlatList
        keyExtractor={(_, index) => `src/app/scroll/dummyList_${index}`}
        data={dummyList}
        renderItem={(list) => <List.Item title={list.item.title} />}
        ItemSeparatorComponent={() => <Divider />}
        onScroll={onScroll}></Animated.FlatList>
    </View>
  );
};

export default ScrollLayout;

const getDummyList = () => {
  const list = [];
  for (let i = 0; i < 200; i++) {
    list.push({ key: i, title: `List ${i}` });
  }
  return list;
};
