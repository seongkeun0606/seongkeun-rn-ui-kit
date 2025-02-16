import { DefaultTheme, MD3Theme, PaperProvider } from 'react-native-paper';
import React, { useEffect } from 'react';

import CustomDrawerContent from '../components/drawer-contents';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from 'expo-router';
import { fontConfig } from '../styles/fonts';
import { useFonts } from 'expo-font';

const theme: MD3Theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    ...fontConfig,
  },
};
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
          <Drawer screenOptions={{ headerShown: true }} drawerContent={CustomDrawerContent}>
            <Drawer.Screen name="index" />
            <Drawer.Screen name="home" />
          </Drawer>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;
