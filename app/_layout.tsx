import * as SplashScreen from 'expo-splash-screen';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Drawer } from 'expo-router/drawer';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

const CustomDrawerContent: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <DrawerItem icon={({ color }) => <Feather name="list" size={24} color={color} />} label={'Feed'} onPress={() => {}} />
      </DrawerContentScrollView>
    </View>
  );
};

SplashScreen.preventAutoHideAsync();
const Layout: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Drawer screenOptions={{ headerShown: true }}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'About',
              title: 'About',
            }}
          />
          <Drawer.Screen
            name="home"
            options={{
              drawerLabel: 'Home',
              title: 'Home',
            }}
          />
        </Drawer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;
