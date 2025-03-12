import Animated, { interpolate, runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { ListRenderItemInfo, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import Dot from './Dot';
import { useTheme } from 'react-native-paper';

interface Props<T> {
  data: T[];
  renderItem: (item: ListRenderItemInfo<T>) => React.ReactNode;
}

const GAP = 10;
function Carousel<T>(props: Props<T>) {
  const { data, renderItem } = props;
  const theme = useTheme();
  const flatlistRef = useRef<Animated.FlatList<T>>(null);
  const { width } = useWindowDimensions();
  const itemWidth = useMemo(() => width - GAP * 4, [width]);
  const offset = useMemo(() => itemWidth + GAP, [width]);
  const contentOffsetX = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  // styles

  // action
  const programmaticScroll = (index: number) => {
    currentIndex.value = index;
    setCurrentScrollIndex(index);
  };
  const scrollHander = useAnimatedScrollHandler({
    onScroll: (event) => {
      contentOffsetX.value = event.contentOffset.x;
      const currentIndex = Math.round(event.contentOffset.x / offset);
      runOnJS(programmaticScroll)(currentIndex);
    },
  });

  // lifecycle
  useEffect(() => {
    if (data.length > 0) {
      timerRef.current = setInterval(() => {
        const next = currentScrollIndex === data.length - 1 ? 0 : currentScrollIndex + 1;
        const x = currentScrollIndex === data.length - 1 ? 0 : next * offset;
        flatlistRef.current?.scrollToOffset({ offset: x, animated: next === 0 ? false : true });

        runOnJS(programmaticScroll)(next);
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentScrollIndex]);

  return (
    <View style={{ width: width }} pointerEvents="box-none">
      <Animated.FlatList
        ref={flatlistRef}
        scrollEventThrottle={16}
        data={data}
        keyExtractor={(_, index) => `carousel_${index}`}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToAlignment={'start'}
        snapToInterval={offset}
        disableIntervalMomentum
        alwaysBounceHorizontal
        contentContainerStyle={{ paddingHorizontal: GAP * 2, paddingRight: GAP }}
        renderItem={(item) => <View style={{ width: itemWidth, backgroundColor: theme.colors.primaryContainer, marginRight: GAP }}>{renderItem(item)}</View>}
        onScroll={scrollHander}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 8 }}>
        {data.map((_, index) => (
          <Dot key={index} index={index} contentOffsetX={contentOffsetX} itemWidth={itemWidth} />
        ))}
      </View>
    </View>
  );
}

export default Carousel;
