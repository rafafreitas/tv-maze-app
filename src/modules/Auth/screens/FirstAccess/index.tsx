import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from '@src/components';
import BG from '@src/assets/images/movies_bg.png';
import Brand from '@src/assets/brand/brand_primary.png';
import { PADDING_DEFAULT } from '@src/constants';

const IMAGE_WIDTH = 1202;
const IMAGE_HEIGHT = 657;

export default function MarqueeBackground() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marqueeContainer}>
        <Marquee spacing={20} speed={1} withGesture={false}>
          <Image
            source={BG}
            style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
            resizeMode="cover"
          />
        </Marquee>
      </View>
      <View style={styles.overlay}>
        <View style={styles.group}>
          <Image
            source={Brand}
            style={{ width: 316, height: 87 }}
            resizeMode="cover"
          />
          <Text variant="white" bold fontSize={18}>
            The best time of the day
          </Text>
        </View>
        <View style={styles.group}>
          <Button title="Continue" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: PADDING_DEFAULT,
  },
  marqueeContainer: {
    position: 'absolute',
  },
  overlay: {
    paddingVertical: PADDING_DEFAULT,
    flex: 1,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'space-between',
  },
  group: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDING_DEFAULT,
  },
});
