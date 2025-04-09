import React from 'react';
import { View, Text, Button, Share, StyleSheet } from 'react-native';
import QRScanner from '../components/QRScanner';

export default function AndroidScreen() {
  const handleShare = async (data: string) => {
    await Share.share({ message: data });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Android QR Scanner</Text>
      <QRScanner onScan={handleShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
