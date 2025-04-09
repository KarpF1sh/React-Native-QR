import React from 'react';
import { Platform } from 'react-native';
import AndroidScreen from './screens/AndroidScreen';
import IOSScreen from './screens/IOSScreen';

export default function App() {
  return Platform.OS === 'android' ? <IOSScreen /> : <IOSScreen />;
}
