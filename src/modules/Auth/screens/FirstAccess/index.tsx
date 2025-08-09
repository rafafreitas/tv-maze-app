import React from 'react';
import { View, Image } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from '@src/components';
import BG from '@src/assets/images/movies_bg.png';
import Brand from '@src/assets/brand/brand_primary.png';
import { styles } from './style';
import { changeStack } from '@src/router/actions';
import { NAVIGATORS, SCREENS } from '@src/router/constants';

const IMAGE_WIDTH = 1202;
const IMAGE_HEIGHT = 857;

export default function FirstAccess() {
  const handleLogin = () => {
    changeStack(NAVIGATORS.PRIVATE_NAVIGATOR, SCREENS.PRIVATE.HOME.HOME);
  };
  const handleCreate = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.marqueeContainer}>
        <Marquee spacing={20} speed={1} withGesture={false}>
          <Image
            source={BG}
            style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
            resizeMode="cover"
          />
        </Marquee>
      </View>
      <View style={styles.backdrop}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.overlay}>
            <View style={styles.group}>
              <Image source={Brand} style={styles.brand} resizeMode="cover" />
              <Text variant="white" bold fontSize={18}>
                The best time of the day
              </Text>
            </View>
            <View style={styles.group}>
              <Button title="Access" onPress={handleLogin} />
              <Button
                title="Protect Account"
                variant="white"
                type="OUTLINE"
                onPress={handleCreate}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
