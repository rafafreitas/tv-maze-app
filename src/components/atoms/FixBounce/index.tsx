import React from 'react';
import { View, Platform } from 'react-native';

export interface IFixBounce {
  color: string;
  position: 'top' | 'bottom';
}

const FixBounce = ({ color, position = 'top' }: IFixBounce) => {
  return Platform.OS === 'ios' ? (
    <View
      style={{
        position: 'absolute',
        [position]: -600,
        left: 0,
        right: 0,
        backgroundColor: color,
        height: 600,
      }}
    />
  ) : null;
};

export default FixBounce;
