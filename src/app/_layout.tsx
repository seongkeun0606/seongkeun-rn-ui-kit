import { DefaultTheme, MD3Theme, PaperProvider } from 'react-native-paper';
import React, { useEffect, useMemo } from 'react';
import { ReanimatedLogLevel, configureReanimatedLogger } from 'react-native-reanimated';

import CustomDrawerContent from '../components/drawer-contents';
import { Drawer } from 'expo-router/drawer';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeWindStyleSheet } from 'nativewind';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from 'expo-router';
import { fontConfig } from '../styles/fonts';
import { useFonts } from 'expo-font';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

const theme: MD3Theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    ...fontConfig,
  },
};

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

SplashScreen.preventAutoHideAsync();
const Layout: React.FC = () => {
  const [loaded, error] = useFonts({
    PretendardBlack: require('../assets/fonts/Pretendard-Black.ttf'),
    PretendardBold: require('../assets/fonts/Pretendard-Bold.ttf'),
    PretendardExtraBold: require('../assets/fonts/Pretendard-ExtraBold.ttf'),
    PretendardLight: require('../assets/fonts/Pretendard-Light.ttf'),
    PretendardMedium: require('../assets/fonts/Pretendard-Medium.ttf'),
    PretendardRegular: require('../assets/fonts/Pretendard-Regular.ttf'),
    PretendardSemiBold: require('../assets/fonts/Pretendard-SemiBold.ttf'),
    PretendardThin: require('../assets/fonts/Pretendard-Thin.ttf'),
  });
  const drawerScreenOption = useMemo<DrawerNavigationOptions>(
    () => ({
      headerTintColor: theme.colors.primary,
      drawerItemStyle: { borderRadius: 5 },
      drawerActiveTintColor: '#FFFFFF',
      drawerActiveBackgroundColor: theme.colors.primary,
    }),
    [],
  );
  // lifecycle
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Drawer screenOptions={drawerScreenOption} drawerContent={CustomDrawerContent}>
            <Drawer.Screen name="index" options={{ title: 'About Project', drawerLabel: 'About' }} />
            <Drawer.Screen name="home" options={{ swipeEnabled: false }} />
            <Drawer.Screen name="progress" options={{ title: 'Progress Indicator', drawerLabel: 'Progress Indicator' }} />
            <Drawer.Screen name="scroll" options={{ title: 'Aniamtion Header', drawerLabel: 'Aniamtion Header' }} />
            <Drawer.Screen name="carousel" options={{ title: 'Carousel', drawerLabel: 'Carousel' }} />
          </Drawer>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;
