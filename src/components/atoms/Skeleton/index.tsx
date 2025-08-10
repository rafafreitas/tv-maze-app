import React, { useEffect } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface ISkeletonBase {
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export default function Skeleton({
  width = '100%',
  height = 50,
  borderRadius = 4,
  style,
  color = '#E1E9EE',
}: ISkeletonBase) {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 800 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          borderRadius,
          backgroundColor: color,
        },
        animatedStyle,
        style,
      ]}
    />
  );
}
