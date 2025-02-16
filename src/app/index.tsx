import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

const AboutLayout: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="justify-start items-start p-4"></View>
    </SafeAreaView>
  );
};

export default AboutLayout;
