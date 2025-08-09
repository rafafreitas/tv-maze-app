import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export interface IScreen {
  name: string;
  component: React.FC<any>;
  options?: NativeStackNavigationOptions;
}
