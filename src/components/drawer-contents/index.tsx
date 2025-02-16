import { Divider, Text, useTheme } from 'react-native-paper';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Linking, StyleSheet, TextStyle, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';

import { FontFamily } from '../../styles/fonts';

type Props = DrawerContentComponentProps;
const CustomDrawerContent: React.FC<Props> = (props) => {
  const theme = useTheme();

  // styles
  const nameStyle = useMemo<TextStyle>(
    () => ({
      ...theme.fonts.titleMedium,
      fontFamily: FontFamily.PretendardExtraBold,
    }),
    [],
  );
  const phoneStyle = useMemo<TextStyle>(
    () => ({
      ...theme.fonts.labelLarge,
      textDecorationLine: 'underline',
      marginTop: 4,
    }),
    [],
  );

  // actions
  const linkPhoneCall = useCallback(async () => {
    await Linking.openURL('tel:01051908374');
  }, []);

  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <View className="flex-row bg-blue-100 items-center p-4">
          <Image style={styles.image} source={require('../../assets/images/profile-image.png')} />
          <View style={styles.profile_info}>
            <Text style={nameStyle}>오성근</Text>
            <Text style={phoneStyle} onPress={linkPhoneCall}>
              010-5190-8374
            </Text>
          </View>
        </View>
        <Divider className="my-2" />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  profile_info: {
    justifyContent: 'flex-start',
    marginLeft: 8,
  },
});
