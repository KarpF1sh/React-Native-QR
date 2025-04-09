import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import AndroidScreen from './screens/AndroidScreen';
import IOSScreen from './screens/IOSScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212', paddingTop: StatusBar.currentHeight || 0 }}>
      {Platform.OS === 'android' ? <AndroidScreen /> : <IOSScreen />}
    </SafeAreaView>
  );
}
