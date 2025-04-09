import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import QRScanner from '../components/QRScanner';

export default function AndroidScreen() {
  const handleShare = async (data: string) => {
    await Share.share({ message: data });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Code Scanner</Text>
      <QRScanner onScan={handleShare} />
      <Text style={styles.sub}>Scan a code and share instantly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16 },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ffe0',
    alignSelf: 'center',
    marginBottom: 10
  },
  sub: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 14
  }
});
