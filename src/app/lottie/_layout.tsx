import React, { useRef, useState } from 'react';

import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

const LottieLayout: React.FC = () => {
  const bikeLottieRef = useRef<LottieView>(null);
  const charactorLottieRef = useRef<LottieView>(null);
  const [reverse, setReverse] = useState(false);

  return (
    <View className="flex-1 bg-white ">
      <View className="flex-justify-center items-center">
        <LottieView ref={bikeLottieRef} style={{ width: 200, height: 150 }} source={require('../../assets/lotties/bike.json')} autoPlay loop speed={reverse ? -1 : 1} />
        <Button
          mode="contained"
          onPress={() => {
            bikeLottieRef.current?.play();
          }}>
          Play
        </Button>
        <View className="h-4" />
        <Button
          mode="contained"
          onPress={() => {
            bikeLottieRef.current?.pause();
          }}>
          Stop
        </Button>
        <View className="h-4" />
        <Button
          mode="contained"
          onPress={() => {
            setReverse(!reverse);
          }}>
          Reverse
        </Button>
      </View>
      <View className="h-10" />
      <View className="flex-justify-center items-center">
        <LottieView ref={charactorLottieRef} style={{ width: 200, height: 150 }} source={require('../../assets/lotties/charactor.json')} autoPlay loop />
        <Button
          mode="contained"
          onPress={() => {
            charactorLottieRef.current?.play();
          }}>
          Play
        </Button>
        <View className="h-4" />
        <Button
          mode="contained"
          onPress={() => {
            charactorLottieRef.current?.pause();
          }}>
          Stop
        </Button>
      </View>
    </View>
  );
};

export default LottieLayout;
