import ActivityIndicator from 'root/components/activity-indicator';
import ProgressBar from 'root/components/progress-bar';
import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

const ProgressLayout: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 12, alignItems: 'center' }}>
      <Text>Progress Bar</Text>
      <View className="h-1" />
      <ProgressBar progress={30} progressColor="red" bgColor="pink" />
      <View className="h-3" />
      <ProgressBar progress={60} />
      <View className="h-4" />
      <Text>Animation Progress Bar</Text>
      <View className="h-1" />
      <ProgressBar progress={100} infinite progressColor="red" bgColor="pink" />
      <View className="h-3" />
      <ProgressBar progress={100} infinite />
      <View className="h-4" />
      <Text>Animation Progress Bar</Text>
      <ActivityIndicator />
    </View>
  );
};

export default ProgressLayout;
