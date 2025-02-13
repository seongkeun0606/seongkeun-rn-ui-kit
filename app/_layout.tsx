import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Layout: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider></SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
